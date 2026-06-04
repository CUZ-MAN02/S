import { MapPin, ChevronLeft, X, Maximize2, ImageOff, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { destinationsData, Category, SubCategory, mapPinGalleries, GalleryImage } from '../data/destinationsData';

export default function Destinations() {
  const { t } = useLanguage();
  const [view, setView] = useState<'categories' | 'subcategories' | 'gallery'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [activeGallery, setActiveGallery] = useState<GalleryImage[]>([]);
  const [activeGalleryTitle, setActiveGalleryTitle] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxSource, setLightboxSource] = useState<'map' | 'gallery'>('gallery');
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Filtra le categorie per rimuovere quelle rimosse (se necessario in futuro)
  const categories = useMemo(() => destinationsData, []);

  const selectedMapImage = useMemo(() => {
    if (!selectedSubCategory) return null;
    const src = isMobile && selectedSubCategory.mobileImage ? selectedSubCategory.mobileImage : selectedSubCategory.image;
    const fallback = src.startsWith('/images/') ? src.replace('/images/', '/immages/') : null;
    return { src, fallback };
  }, [isMobile, selectedSubCategory]);

  const applyImagesFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const currentSrc = e.currentTarget.src;
    if (currentSrc.includes('/images/')) {
      e.currentTarget.src = currentSrc.replace('/images/', '/immages/');
    }
  };

  const getSubCategoryCardImageSrc = (sub: SubCategory) => {
    if (sub.isMap) {
      const galleriesForMap = mapPinGalleries[sub.id];
      const firstPinId = sub.pins?.[0]?.id;
      const firstPinGallerySrc = firstPinId ? galleriesForMap?.[firstPinId]?.[0]?.src : undefined;
      return firstPinGallerySrc || sub.image;
    }
    return sub.gallery?.[0]?.src || sub.image;
  };

  const displayedSubCategories = useMemo(() => {
    if (!selectedCategory) return [];
    if (selectedCategory.id === 'costa' || selectedCategory.id === 'corsica') {
      return selectedCategory.subCategories.filter((s) => !s.isMap);
    }
    return selectedCategory.subCategories;
  }, [selectedCategory]);

  const isArcipelagoLavezziMap = selectedSubCategory?.id === 'corsica-map';
  const mapWrapperMaxWidthClass =
    selectedSubCategory?.id === 'spargi'
      ? 'w-full max-w-none md:max-w-lg'
      : selectedSubCategory?.id === 'la-maddalena'
        ? 'w-full max-w-none md:max-w-[40rem]'
      : selectedSubCategory?.id === 'piscine-naturali'
        ? 'w-full max-w-none md:max-w-xl'
        : selectedSubCategory?.id === 'costa-map'
          ? 'w-full max-w-none md:max-w-3xl'
          : selectedSubCategory?.id === 'corsica-map'
            ? 'w-full max-w-none md:max-w-xl'
            : 'w-full max-w-none md:max-w-2xl';
  const mapMobileExpandClass =
    selectedSubCategory?.id === 'costa-map'
      ? 'w-[calc(100%+0.5rem)] -mx-1 sm:w-full sm:mx-0'
      : 'w-[calc(100%+1rem)] -mx-2 sm:w-full sm:mx-0';
  const mapPinSize = isArcipelagoLavezziMap
    ? (isMobile ? 'clamp(38px, 10vw, 54px)' : 'clamp(32px, 4vw, 44px)')
    : (isMobile ? 'clamp(32px, 9vw, 46px)' : 'clamp(28px, 3.5vw, 38px)');
  const mapPinPingSize = isArcipelagoLavezziMap
    ? (isMobile ? 'clamp(52px, 14vw, 74px)' : 'clamp(44px, 5.2vw, 62px)')
    : (isMobile ? 'clamp(44px, 12vw, 64px)' : 'clamp(38px, 4.5vw, 54px)');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(mediaQuery.matches);
    onChange();
    if ('addEventListener' in mediaQuery) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    }
    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setView('subcategories');
    if (category.id === 'maddalena') {
      setSelectedSubCategory(null);
    } else {
      const defaultMapSub = category.subCategories.find((s) => s.isMap);
      if (defaultMapSub) {
        setSelectedSubCategory(defaultMapSub);
      } else {
        setSelectedSubCategory(null);
      }
    }
    scrollToSection();
  };

  const handleSubCategoryClick = (sub: SubCategory) => {
    setSelectedSubCategory(sub);
    if (sub.isMap) {
      // Se è una mappa, rimaniamo in subcategories ma mostriamo la mappa
      scrollToSection();
    } else {
      setLightboxSource('gallery');
      setActiveGallery(sub.gallery);
      setActiveGalleryTitle(sub.name);
      setView('gallery');
      scrollToSection();
    }
  };

  const handleMapPinClick = (pinId: string, pinName: string) => {
    const subId = selectedSubCategory?.id;
    if (!subId) return;

    const galleriesForMap = mapPinGalleries[subId];
    const gallery = galleriesForMap?.[pinId];
    setLightboxSource('map');
    setActiveGallery(gallery || []);
    setActiveGalleryTitle(pinName);
    setView('gallery');
    scrollToSection();
    if (gallery && gallery.length > 0) setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    if (lightboxSource === 'map') {
      setView('subcategories');
      scrollToSection();
    }
  };

  const handleBack = () => {
    if (lightboxIndex !== null) {
      closeLightbox();
      return;
    }

    if (view === 'gallery') {
      setView('subcategories');
      if (selectedCategory && selectedSubCategory && !selectedSubCategory.isMap) {
        const defaultMapSub = selectedCategory.subCategories.find((s) => s.isMap) || null;
        if (defaultMapSub) setSelectedSubCategory(defaultMapSub);
      }
    } else if (view === 'subcategories') {
      if ((selectedCategory?.id === 'costa' || selectedCategory?.id === 'corsica') && selectedSubCategory?.isMap) {
        setView('categories');
        setSelectedCategory(null);
        setSelectedSubCategory(null);
        scrollToSection();
        return;
      }
      if (selectedSubCategory) {
        setSelectedSubCategory(null);
      } else {
        setView('categories');
        setSelectedCategory(null);
      }
    }
    scrollToSection();
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && activeGallery.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % activeGallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && activeGallery.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + activeGallery.length) % activeGallery.length);
    }
  };

  const scrollToSection = () => {
    if (sectionRef.current) {
      const offset = 80; // Compensazione per eventuale header fisso
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToMap = () => {
    if (mapRef.current) {
      const offset = 120; // più spazio per vedere anche il titolo sopra la foto
      const elementPosition = mapRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (view === 'subcategories' && selectedSubCategory?.isMap) {
      scrollToMap();
    }
  }, [view, selectedSubCategory?.id, selectedSubCategory?.isMap]);

  return (
    <section ref={sectionRef} id="destinations" className="py-12 md:py-20 px-4 bg-[#FFFDF0] min-h-[600px] transition-all duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-3 md:mb-4">
            {view === 'categories' ? t('destinations.title') : selectedCategory?.name}
          </h2>
          {view === 'categories' && (
            <p className="text-lg md:text-xl text-[#1e3a8a]">
              {t('destinations.subtitle')}
            </p>
          )}
          {view !== 'categories' && (
            <button 
              onClick={handleBack}
              className="mt-4 flex items-center gap-2 mx-auto text-amber-600 font-bold hover:text-amber-700 transition-colors py-2 px-4 rounded-full bg-white shadow-sm border border-amber-100"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t('common.back')}</span>
            </button>
          )}
        </div>

        {/* Level 1: Categories */}
        {view === 'categories' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
              >
                <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm line-clamp-2 pl-7">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Level 2: Subcategories */}
        {view === 'subcategories' && selectedCategory && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Se è selezionata una sottocategoria con mappa, mostriamo la mappa sopra */}
            {selectedSubCategory?.isMap ? (
              <div
                ref={mapRef}
                className={`relative ${mapWrapperMaxWidthClass} mx-auto mb-16`}
              >
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-1">{selectedSubCategory.name}</h3>
                  <p className="text-[#1e3a8a]/70 font-medium italic">Tocca le mete sulla mappa per esplorare</p>
                </div>
                <div className={`relative rounded-2xl overflow-hidden ${mapMobileExpandClass}`}>
                  <img
                    src={selectedMapImage?.src || selectedSubCategory.image}
                    alt={selectedSubCategory.name}
                    className="block w-full h-auto rounded-2xl"
                    onError={(e) => {
                      if (selectedMapImage?.fallback) {
                        (e.currentTarget as HTMLImageElement).src = selectedMapImage.fallback;
                      }
                    }}
                  />
                  {/* Pallini interattivi sulla mappa (sovrapposti a quelli della foto) */}
                  {selectedSubCategory.pins?.map((pin) => (
                    <button
                      key={pin.id}
                      type="button"
                      aria-label={pin.name}
                      className="absolute cursor-pointer group select-none focus:outline-none focus-visible:outline-none"
                      style={{ 
                        left: `${isMobile && pin.mobileX !== undefined ? pin.mobileX : pin.x}%`, 
                        top: `${isMobile && pin.mobileY !== undefined ? pin.mobileY : pin.y}%`, 
                        width: mapPinSize,
                        height: mapPinSize,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20
                      }}
                      onClick={() => handleMapPinClick(pin.id, pin.name)}
                    >
                      {/* Area di clic molto ampia che copre sia il pallino che il nome sulla foto */}
                      <div className="absolute -inset-10 sm:-inset-12 z-10 rounded-full"></div>
                      
                      {/* Effetto pulsante azzurro (raggio raddoppiato, senza pallino fisico) */}
                      <div className="relative flex items-center justify-center w-full h-full">
                        <div
                          className={`absolute rounded-full animate-ping opacity-75 ${
                            selectedSubCategory.id === 'piscine-naturali' && pin.id === 'rosa' ? 'bg-rose-300' : 'bg-cyan-400'
                          }`}
                          style={{ width: mapPinPingSize, height: mapPinPingSize }}
                        />
                      </div>

                      {/* Tooltip opzionale al passaggio */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-10 bg-black/70 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold py-1 px-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-20 pointer-events-none">
                        {pin.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Griglia delle sottocategorie (sempre visibile o filtrata) */}
            {!selectedSubCategory?.isMap && (
              <div className={`grid gap-6 ${
                displayedSubCategories.length >= 4 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-3'
              }`}>
                {displayedSubCategories.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleSubCategoryClick(sub)}
                    className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white ${
                      selectedSubCategory?.id === sub.id ? 'ring-4 ring-amber-400 transform scale-[1.02]' : ''
                    }`}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={getSubCategoryCardImageSrc(sub)}
                        alt={sub.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (img.src.includes('/images/')) {
                            img.src = img.src.replace('/images/', '/immages/');
                            return;
                          }
                          img.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center p-4">
                      <h4 className="text-white text-lg md:text-xl font-bold text-center drop-shadow-lg transform group-hover:scale-105 transition-transform">
                        {sub.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Level 3: Gallery */}
        {view === 'gallery' && (
          <div className="animate-in fade-in zoom-in duration-500">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-8 text-center">{activeGalleryTitle}</h3>
            
            {activeGallery.length > 0 ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {activeGallery.map((img, index) => (
                  <div 
                    key={index} 
                    className="relative group overflow-hidden rounded-xl shadow-md cursor-zoom-in break-inside-avoid bg-slate-100"
                    onClick={() => {
                      setLightboxSource('gallery');
                      setLightboxIndex(index);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                      onError={applyImagesFallback}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                        <Maximize2 className="text-white w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-slate-200">
                <ImageOff className="w-16 h-16 text-slate-300 mb-4" />
                <p className="text-slate-500 font-medium text-lg">Galleria in fase di caricamento...</p>
                <p className="text-slate-400 text-sm mt-2">Le foto di questa località saranno presto disponibili.</p>
              </div>
            )}
          </div>
        )}

        {/* Itinerary Note (Only on Level 1) */}
        {view === 'categories' && (
          <div className="text-center mt-12 animate-in fade-in slide-in-from-top-2 duration-700">
            <p className="text-lg text-[#1e3a8a] italic bg-white/50 py-3 px-6 rounded-full inline-block shadow-sm">
              {t('destinations.itinerary_note')}
            </p>
          </div>
        )}

        {/* Lightbox */}
        {lightboxIndex !== null && activeGallery.length > 0 && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-zoom-out backdrop-blur-sm transition-all"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors z-50 p-2"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Navigation Arrows */}
            {activeGallery.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md"
                >
                  <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-md"
                >
                  <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
                </button>
              </>
            )}

            <div className="relative max-w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeGallery[lightboxIndex].src}
                alt={activeGallery[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] md:max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in duration-300 object-contain"
                onError={applyImagesFallback}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

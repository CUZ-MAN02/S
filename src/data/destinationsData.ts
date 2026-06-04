export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SubCategory {
  id: string;
  name: string;
  image: string; // Immagine di copertina per la sottocategoria o mappa
  mobileImage?: string; // Variante immagine per mobile (opzionale)
  gallery: GalleryImage[];
  isMap?: boolean; // Se true, visualizza la mappa con i pallini interattivi
  pins?: { id: string; x: number; y: number; name: string; mobileX?: number; mobileY?: number }[]; // Coordinate dei pallini per la mappa (opzionali per mobile)
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string; // Immagine di copertina per la categoria principale
  subCategories: SubCategory[];
}

export const destinationsData: Category[] = [
  {
    id: 'maddalena',
    name: 'Arcipelago della Maddalena',
    description: 'Esplora le isole più famose dell\'arcipelago',
    image: "/immages/arcipelago-della-maddalena.avif",
    subCategories: [
      {
        id: 'la-maddalena',
        name: 'La Maddalena',
        image: "/immages/maddalena/mappa maddalena.jpeg",
        isMap: true,
        pins: [
          { id: 'monti-da-rena', x: 42.2, y: 50.0, name: 'Spiaggia Monti d\'à Rena' },
          { id: 'bassa-trinita', x: 18.3, y: 80.0, name: 'Spiaggia Bassa Trinità' }
        ],
        gallery: [] // Questa gallery non verrà usata direttamente, useremo le gallerie dei punti sulla mappa
      },
      {
        id: 'spargi',
        name: 'Isola di Spargi',
        image: "/immages/maddalena/spargi/mappa spargi.jpeg",
        isMap: true,
        pins: [
          // Ulteriori micro-affinamenti: Granara ancora un po' più su
          { id: 'corsara', x: 35.5, y: 86.0, name: 'Cala Corsara' },
          { id: 'soraya', x: 59.2, y: 83.0, name: 'Cala Soraya' },
          { id: 'granara', x: 70.0, y: 74.0, name: 'Cala Granara' },
          { id: 'connari', x: 82.6, y: 55.5, name: 'Cala Connari' }
        ],
        gallery: [] // Questa gallery non verrà usata direttamente, useremo le gallerie delle cale
      },
      {
        id: 'piscine-naturali',
        name: 'Piscine Naturali',
        image: "/immages/maddalena/piscine naturali/mappa piscine.jpeg",
        isMap: true,
        pins: [
          { id: 'santa-maria', x: 76.0, y: 47.0, name: 'Cala Santa Maria' },
          { id: 'piscine', x: 62.6, y: 56.6, name: 'Piscine Naturali' },
          { id: 'cavaliere', x: 53.6, y: 63.6, name: 'Spiaggia del Cavaliere' },
          { id: 'rosa', x: 53.6, y: 83.6, name: 'Spiaggia Rosa' }
        ],
        gallery: [] // Questa gallery non verrà usata direttamente, useremo le gallerie dei punti sulla mappa
      }
    ]
  },
  {
    id: 'costa',
    name: 'Il meglio della Costa',
    description: 'Le spiagge più belle lungo la costa sarda',
    image: "/immages/sardinien.jpg",
    subCategories: [
      {
        id: 'costa-map',
        name: 'Mappa Costa',
        image: "/images/costa/mappa costa pc.png",
        mobileImage: "/images/costa/mappa costa cell.png",
        isMap: true,
        pins: [
          { id: 'marmorata', x: 24.2, y: 66.0, mobileX: 44.5, mobileY: 19.5, name: 'Isola Della Marmorata' },
          { id: 'sambuco', x: 76.7, y: 70.5, mobileX: 48.0, mobileY: 66.5, name: 'Cala Sambuco' },
          { id: 'balcacia', x: 94.3, y: 78.1, mobileX: 45.0, mobileY: 83.5, name: 'Cala Balcacia' }
        ],
        gallery: []
      },
      {
        id: 'marmorata',
        name: 'Spiaggia la Marmorata',
        image: "/immages/costa/marmorata.jpg",
        gallery: [
          { src: "/images/costa/marmorata/marmorata1.jpeg", alt: "Spiaggia la Marmorata 1" },
          { src: "/images/costa/marmorata/marmorata2.jpeg", alt: "Spiaggia la Marmorata 2" },
          { src: "/images/costa/marmorata/marmorata3.jpeg", alt: "Spiaggia la Marmorata 3" },
          { src: "/images/costa/marmorata/marmorata4.jfif", alt: "Spiaggia la Marmorata 4" }
        ]
      },
      {
        id: 'sambuco',
        name: 'Cala Sambuco',
        image: "/immages/costa/sambuco.jpg",
        gallery: [
          { src: "/images/costa/sambuco/sambuco1.jpeg", alt: "Cala Sambuco 1" },
          { src: "/images/costa/sambuco/sambuco2.jpeg", alt: "Cala Sambuco 2" },
          { src: "/images/costa/sambuco/sambuco3.jpeg", alt: "Cala Sambuco 3" },
          { src: "/images/costa/sambuco/sambuco4.jpeg", alt: "Cala Sambuco 4" }
        ]
      },
      {
        id: 'balcaccia',
        name: 'Cala Balcaccia',
        image: "/immages/costa/balcaccia.jpg",
        gallery: [
          { src: "/images/costa/balcacia/Balcacia1.jpeg", alt: "Cala Balcaccia 1" },
          { src: "/images/costa/balcacia/Balcacia2.jpeg", alt: "Cala Balcaccia 2" },
          { src: "/images/costa/balcacia/Balcacia3.jpeg", alt: "Cala Balcaccia 3" },
          { src: "/images/costa/balcacia/balcacia4.jpeg", alt: "Cala Balcaccia 4" }
        ]
      }
    ]
  },
  {
    id: 'corsica',
    name: 'Corsica',
    description: 'Itinerario su richiesta',
    image: "/immages/corsica.jpg",
    subCategories: [
      {
        id: 'corsica-map',
        name: 'Arcipelago Lavezzi',
        image: "/immages/corsica/mappa arcipelago lavezzi.jpeg",
        isMap: true,
        pins: [
          { id: 'piana', x: 10.8, y: 12.8, name: 'Isola Piana' },
          { id: 'cavallo', x: 74.7, y: 23.3, name: 'Isola Cavallo' },
          { id: 'lavezzi', x: 57.5, y: 82.0, name: 'Isola di Lavezzi' }
        ],
        gallery: []
      },
      {
        id: 'lavezzi',
        name: 'Isola di Lavezzi',
        image: "/images/corsica/isola lavezzi/lavezzi1.jpeg",
        gallery: [
          { src: "/images/corsica/isola lavezzi/lavezzi1.jpeg", alt: "Isola di Lavezzi 1" },
          { src: "/images/corsica/isola lavezzi/lavezzi2.jpeg", alt: "Isola di Lavezzi 2" },
          { src: "/images/corsica/isola lavezzi/lavezzi3.jpeg", alt: "Isola di Lavezzi 3" },
          { src: "/images/corsica/isola lavezzi/lavezzi4.jpeg", alt: "Isola di Lavezzi 4" },
          { src: "/images/corsica/isola lavezzi/lavezzi5.jpeg", alt: "Isola di Lavezzi 5" }
        ]
      },
      {
        id: 'cavallo',
        name: 'Isola Cavallo',
        image: "/images/corsica/isola cavallo/cavallo1.jpeg",
        gallery: [
          { src: "/images/corsica/isola cavallo/cavallo1.jpeg", alt: "Isola Cavallo 1" },
          { src: "/images/corsica/isola cavallo/cavallo2.jpeg", alt: "Isola Cavallo 2" },
          { src: "/images/corsica/isola cavallo/cavallo3.jpeg", alt: "Isola Cavallo 3" },
          { src: "/images/corsica/isola cavallo/cavallo4.jpeg", alt: "Isola Cavallo 4" },
          { src: "/images/corsica/isola cavallo/cavallo5.jpeg", alt: "Isola Cavallo 5" }
        ]
      },
      {
        id: 'piana',
        name: 'Isola Piana',
        image: "/images/corsica/isola piana/piana1.jpeg",
        gallery: [
          { src: "/images/corsica/isola piana/piana1.jpeg", alt: "Isola Piana 1" },
          { src: "/images/corsica/isola piana/piana2.jpeg", alt: "Isola Piana 2" },
          { src: "/images/corsica/isola piana/piana3.jpeg", alt: "Isola Piana 3" },
          { src: "/images/corsica/isola piana/piana4.jpeg", alt: "Isola Piana 4" },
          { src: "/images/corsica/isola piana/piana5.jpeg", alt: "Isola Piana 5" }
        ]
      }
    ]
  }
];

// Gallerie specifiche per le cale di Spargi
export const spargiCovesGalleries: Record<string, GalleryImage[]> = {
  corsara: [
    { src: "/immages/maddalena/spargi/Corsara1.jpg", alt: "Cala Corsara 1" },
    { src: "/immages/maddalena/spargi/Corsara2.jpg", alt: "Cala Corsara 2" },
    { src: "/immages/maddalena/spargi/Corsara3.jpg", alt: "Cala Corsara 3" }
  ],
  soraya: [
    { src: "/immages/maddalena/spargi/Soraya1.jpg", alt: "Cala Soraya 1" },
    { src: "/immages/maddalena/spargi/Soraya2.jpg", alt: "Cala Soraya 2" },
    { src: "/immages/maddalena/spargi/Soraya3.jpg", alt: "Cala Soraya 3" },
    { src: "/immages/maddalena/spargi/Soraya4.png", alt: "Cala Soraya 4" }
  ],
  granara: [
    { src: "/immages/maddalena/spargi/Granara1.jpg", alt: "Cala Granara 1" },
    { src: "/immages/maddalena/spargi/Granara2.jpg", alt: "Cala Granara 2" },
    { src: "/immages/maddalena/spargi/Granara3.png", alt: "Cala Granara 3" }
  ],
  connari: [
    { src: "/immages/maddalena/spargi/Connari1.jpg", alt: "Cala Connari 1" },
    { src: "/immages/maddalena/spargi/Connari2.jpg", alt: "Cala Connari 2" },
    { src: "/immages/maddalena/spargi/Connari3.jpg", alt: "Cala Connari 3" },
    { src: "/immages/maddalena/spargi/Connari4.jpg", alt: "Cala Connari 4" },
    { src: "/immages/maddalena/spargi/Connari5.jpg", alt: "Cala Connari 5" }
  ]
};

// Gallerie specifiche per i punti delle Piscine Naturali
export const piscineNaturaliSpotsGalleries: Record<string, GalleryImage[]> = {
  'santa-maria': [
    { src: "/immages/maddalena/piscine naturali/cala s maria/Maria1.jpg", alt: "Cala Santa Maria 1" },
    { src: "/immages/maddalena/piscine naturali/cala s maria/Maria2.webp", alt: "Cala Santa Maria 2" },
    { src: "/immages/maddalena/piscine naturali/cala s maria/Maria3.jpg", alt: "Cala Santa Maria 3" },
    { src: "/immages/maddalena/piscine naturali/cala s maria/Maria4.jpg", alt: "Cala Santa Maria 4" }
  ],
  piscine: [
    { src: "/immages/maddalena/piscine naturali/piscine nat/Piscine1.webp", alt: "Piscine Naturali 1" },
    { src: "/immages/maddalena/piscine naturali/piscine nat/Piscine2.jpg", alt: "Piscine Naturali 2" },
    { src: "/immages/maddalena/piscine naturali/piscine nat/Piscine3.jpg", alt: "Piscine Naturali 3" },
    { src: "/immages/maddalena/piscine naturali/piscine nat/Piscine4.jpg", alt: "Piscine Naturali 4" },
    { src: "/immages/maddalena/piscine naturali/piscine nat/piscine5.jpg", alt: "Piscine Naturali 5" }
  ],
  cavaliere: [
    { src: "/immages/maddalena/piscine naturali/spiaggia cavaliere/Cavaliere1.jpg", alt: "Spiaggia del Cavaliere 1" },
    { src: "/immages/maddalena/piscine naturali/spiaggia cavaliere/Cavaliere2.jpg", alt: "Spiaggia del Cavaliere 2" },
    { src: "/immages/maddalena/piscine naturali/spiaggia cavaliere/Cavaliere3.jpg", alt: "Spiaggia del Cavaliere 3" },
    { src: "/immages/maddalena/piscine naturali/spiaggia cavaliere/Cavaliere4.jpg", alt: "Spiaggia del Cavaliere 4" }
  ],
  rosa: [
    { src: "/immages/maddalena/piscine naturali/spiaggia rosa/Rosa1.jpg", alt: "Spiaggia Rosa 1" },
    { src: "/immages/maddalena/piscine naturali/spiaggia rosa/Rosa2.avif", alt: "Spiaggia Rosa 2" },
    { src: "/immages/maddalena/piscine naturali/spiaggia rosa/Rosa3.jpg", alt: "Spiaggia Rosa 3" },
    { src: "/immages/maddalena/piscine naturali/spiaggia rosa/Rosa4.jpg", alt: "Spiaggia Rosa 4" }
  ]
};

export const laMaddalenaBeachesGalleries: Record<string, GalleryImage[]> = {
  'monti-da-rena': [
    { src: "/immages/maddalena/La Maddalena/Monti Da Rena/Rena1.jpeg", alt: "Spiaggia Monti d'à Rena 1" },
    { src: "/immages/maddalena/La Maddalena/Monti Da Rena/Rena2.webp", alt: "Spiaggia Monti d'à Rena 2" },
    { src: "/immages/maddalena/La Maddalena/Monti Da Rena/Rena3.jpg", alt: "Spiaggia Monti d'à Rena 3" },
    { src: "/immages/maddalena/La Maddalena/Monti Da Rena/Rena4.jfif", alt: "Spiaggia Monti d'à Rena 4" },
    { src: "/immages/maddalena/La Maddalena/Monti Da Rena/Rena5.jpg", alt: "Spiaggia Monti d'à Rena 5" }
  ],
  'bassa-trinita': [
    { src: "/immages/maddalena/La Maddalena/La Trinita/Trinita1.jpg", alt: "Spiaggia Bassa Trinità 1" },
    { src: "/immages/maddalena/La Maddalena/La Trinita/Trinita2.jpg", alt: "Spiaggia Bassa Trinità 2" },
    { src: "/immages/maddalena/La Maddalena/La Trinita/Trinita3.webp", alt: "Spiaggia Bassa Trinità 3" },
    { src: "/immages/maddalena/La Maddalena/La Trinita/Trinita4.jfif", alt: "Spiaggia Bassa Trinità 4" }
  ]
};

export const corsicaIslandsGalleries: Record<string, GalleryImage[]> = {
  lavezzi: [
    { src: "/images/corsica/isola lavezzi/lavezzi1.jpeg", alt: "Isola di Lavezzi 1" },
    { src: "/images/corsica/isola lavezzi/lavezzi2.jpeg", alt: "Isola di Lavezzi 2" },
    { src: "/images/corsica/isola lavezzi/lavezzi3.jpeg", alt: "Isola di Lavezzi 3" },
    { src: "/images/corsica/isola lavezzi/lavezzi4.jpeg", alt: "Isola di Lavezzi 4" },
    { src: "/images/corsica/isola lavezzi/lavezzi5.jpeg", alt: "Isola di Lavezzi 5" }
  ],
  cavallo: [
    { src: "/images/corsica/isola cavallo/cavallo1.jpeg", alt: "Isola Cavallo 1" },
    { src: "/images/corsica/isola cavallo/cavallo2.jpeg", alt: "Isola Cavallo 2" },
    { src: "/images/corsica/isola cavallo/cavallo3.jpeg", alt: "Isola Cavallo 3" },
    { src: "/images/corsica/isola cavallo/cavallo4.jpeg", alt: "Isola Cavallo 4" },
    { src: "/images/corsica/isola cavallo/cavallo5.jpeg", alt: "Isola Cavallo 5" }
  ],
  piana: [
    { src: "/images/corsica/isola piana/piana1.jpeg", alt: "Isola Piana 1" },
    { src: "/images/corsica/isola piana/piana2.jpeg", alt: "Isola Piana 2" },
    { src: "/images/corsica/isola piana/piana3.jpeg", alt: "Isola Piana 3" },
    { src: "/images/corsica/isola piana/piana4.jpeg", alt: "Isola Piana 4" },
    { src: "/images/corsica/isola piana/piana5.jpeg", alt: "Isola Piana 5" }
  ]
};

export const costaBeachesGalleries: Record<string, GalleryImage[]> = {
  marmorata: [
    { src: "/images/costa/marmorata/marmorata1.jpeg", alt: "Spiaggia la Marmorata 1" },
    { src: "/images/costa/marmorata/marmorata2.jpeg", alt: "Spiaggia la Marmorata 2" },
    { src: "/images/costa/marmorata/marmorata3.jpeg", alt: "Spiaggia la Marmorata 3" },
    { src: "/images/costa/marmorata/marmorata4.jfif", alt: "Spiaggia la Marmorata 4" }
  ],
  sambuco: [
    { src: "/images/costa/sambuco/sambuco1.jpeg", alt: "Cala Sambuco 1" },
    { src: "/images/costa/sambuco/sambuco2.jpeg", alt: "Cala Sambuco 2" },
    { src: "/images/costa/sambuco/sambuco3.jpeg", alt: "Cala Sambuco 3" },
    { src: "/images/costa/sambuco/sambuco4.jpeg", alt: "Cala Sambuco 4" }
  ],
  balcacia: [
    { src: "/images/costa/balcacia/Balcacia1.jpeg", alt: "Cala Balcacia 1" },
    { src: "/images/costa/balcacia/Balcacia2.jpeg", alt: "Cala Balcacia 2" },
    { src: "/images/costa/balcacia/Balcacia3.jpeg", alt: "Cala Balcacia 3" },
    { src: "/images/costa/balcacia/balcacia4.jpeg", alt: "Cala Balcacia 4" }
  ]
};

export const mapPinGalleries: Record<string, Record<string, GalleryImage[]>> = {
  spargi: spargiCovesGalleries,
  'piscine-naturali': piscineNaturaliSpotsGalleries,
  'la-maddalena': laMaddalenaBeachesGalleries,
  'costa-map': costaBeachesGalleries,
  'corsica-map': corsicaIslandsGalleries
};

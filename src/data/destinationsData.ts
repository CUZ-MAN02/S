export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PinData {
  id: string;
  x: number;
  y: number;
  name: string;
  mobileX?: number;
  mobileY?: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface SubCategory {
  id: string;
  name: string;
  image: string;
  mobileImage?: string;
  gallery: GalleryImage[];
  isMap?: boolean;
  pins?: PinData[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
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
          { 
            id: 'monti-da-rena', 
            x: 42.2, 
            y: 50.0, 
            name: 'Spiaggia Monti d\'à Rena',
            title: 'Cala Monti da Rena',
            subtitle: 'La montagna che balla con il vento',
            description: 'Il nome parla da sé: "Monte di Sabbia". Questa caletta è famosa per la maestosa duna di sabbia finissima che domina il paesaggio. Una leggenda locale racconta che la duna sia "viva", poiché il vento di Maestrale ne modella continuamente la forma, cambiandole d\'abito ogni giorno. Un tuffo qui è un\'esperienza rigenerante, circondati da rocce granitiche dalle forme bizzarre.'
          },
          { 
            id: 'bassa-trinita', 
            x: 18.3, 
            y: 80.0, 
            name: 'Spiaggia Bassa Trinità',
            title: 'Bassa Trinita',
            subtitle: 'Tra dune bianche e storie di devozione',
            description: 'Questa caletta è un vero capolavoro di sabbia finissima e acque che sfumano dal turchese al blu profondo. Il suo nome ha radici antiche e spirituali: deriva dalla vicina chiesetta della Trinità, costruita a fine \'700 dai primi coloni dell\'isola. È la spiaggia perfetta per chi ama la natura selvaggia, abbracciata da dune di sabbia che sembrano dipinte dal vento.'
          }
        ],
        gallery: []
      },
      {
        id: 'spargi',
        name: 'Isola di Spargi',
        image: "/immages/maddalena/spargi/mappa spargi.jpeg",
        isMap: true,
        pins: [
          { 
            id: 'corsara', 
            x: 50.0, 
            y: 81.0, 
            name: 'Cala Corsara',
            title: 'Cala Corsara',
            subtitle: 'Un antico rifugio di pirati e tesori nascosti',
            description: 'È una delle spiagge più iconiche dell\'intero arcipelago, ma sapevate che il suo nome evoca storie di arrembaggi? In passato, questa baia riparata era il nascondiglio perfetto per i pirati saraceni (i "corsari", appunto), che vi trovavano rifugio dopo le loro scorribande. Oggi i pirati non ci sono più, ma la cala custodisce ancora un tesoro: le sue rocce scolpite dal tempo, tra cui la celebre roccia della "Strega".'
          },
          { 
            id: 'soraya', 
            x: 68.0, 
            y: 73.0, 
            name: 'Cala Soraya',
            title: 'Cala Soraya',
            subtitle: 'La spiaggia degna di una principessa',
            description: 'Questa perla incontaminata deve il suo nome alla Principessa Soraya di Persia, che negli anni \'60 rimase folgorata dalla bellezza di questo angolo di paradiso e vi trascorse momenti indimenticabili. Prima di allora era conosciuta como Cala d\'Alga, ma l\'eleganza regale del luogo rende il nome "Soraya" decisamente più azzeccato per le sue acque trasparenti e la natura selvaggia.'
          },
          { 
            id: 'granara', 
            x: 76.0, 
            y: 62.0, 
            mobileX: 76.0, 
            mobileY: 58.0, 
            name: 'Cala Granara',
            title: 'Cala Granara',
            subtitle: 'La spiaggia del grano e dei sapori di un tempo',
            description: 'Un tempo l\'arcipelago non era solo mare, ma anche terra vissuta. Il nome "Granara" deriva dal fatto che, in passato, in questa zona veniva sbarcato o coltivato il grano. Oggi, al posto delle spighe, troverete una sabbia dorata e un mare così calmo e cristallino da sembrare una piscina privata.'
          },
          { 
            id: 'connari', 
            x: 82.6, 
            y: 42.0, 
            name: 'Cala Connari',
            title: 'Cala Connari & Cala dell\'Amore',
            subtitle: 'Il segreto degli innamorati',
            description: 'Due nomi per un unico, immenso incanto. Cala Connari prende il nome dalle piante di canne che crescono spontanee nelle vicinanze, ma è universalmente conosciuta come "Cala dell\'Amore". È una minuscola e intima caletta, raggiungibile quasi esclusivamente via mare. La sua forma raccolta e l\'atmosfera sospesa nel tempo la rendono il luogo perfetto per un bagno romantico lontano da tutto e da tutti.'
          }
        ],
        gallery: []
      },
      {
        id: 'piscine-naturali',
        name: 'Piscine Naturali',
        image: "/immages/maddalena/piscine naturali/mappa piscine.jpeg",
        isMap: true,
        pins: [
          { 
            id: 'santa-maria', 
            x: 76.0, 
            y: 47.0, 
            name: 'Cala Santa Maria',
            title: 'Cala Santa Maria',
            subtitle: 'La spiaggia dei monaci e del silenzio',
            description: 'Una distesa di sabbia bianca lunghissima e bagnata da un mare irreale. L\'isola e la spiaggia prendono il nome da un antico convento di monaci benedettini che nel Medioevo scelsero questo luogo di pace assoluta per ritirarsi in preghiera. Oggi quella pace è rimasta intatta: è il luogo ideale per rilassarsi a bordo, cullati dal rumore della risacca.'
          },
          { 
            id: 'piscine', 
            x: 62.6, 
            y: 56.6, 
            name: 'Piscine Naturali',
            title: 'Piscine Naturali',
            subtitle: 'Il paradiso dove il mare diventa cristallo',
            description: 'Questo tratto di mare, racchiuso tra le isole di Budelli, Razzoli e Santa Maria, è un vero miracolo della natura. Il nome descrive perfettamente la magia del luogo: i fondali bassissimi di sabbia bianchissima e le correnti calme creano uno specchio d’acqua così trasparente, fermo e turchese da non sembrare mare aperto, ma una gigantesca piscina artificiale scavata nel granito. È il cuore pulsante dell\'arcipelago, un luogo dove la barca sembra galleggiare nel vuoto e dove un tuffo diventa un\'esperienza surreale.'
          },
          { 
            id: 'cavaliere', 
            x: 53.6, 
            y: 63.6, 
            name: 'Spiaggia del Cavaliere',
            title: 'Spiaggia del Cavaliere',
            subtitle: 'Il regno del custode del paradiso',
            description: 'Situata proprio nel cuore delle Piscine Naturali, questa spiaggia deve il suo nome, secondo i racconti del posto, a un antico "cavaliere" o nobile viaggiatore che rimase stregato da questo angolo di mondo, decidendo di farne il suo rifugio. Camminare lungo la riva dà la sensazione di calpestare polvere di stelle, con l\'isola di Razzoli a fare da sfondo.'
          },
          { 
            id: 'rosa', 
            x: 53.6, 
            y: 83.6, 
            name: 'Spiaggia Rosa',
            title: 'Spiaggia Rosa',
            subtitle: 'Il mito proibito dell\'Arcipelago',
            description: 'È una delle spiagge più famose al mondo, un’opera d’arte della natura. Il suo colore unico non è una leggenda: è dovuto ai frammenti microscopici di un piccolo organismo marino (la Miniacina miniacea) che, depositandosi sulla battigia, tinge la sabbia di sfumature rosate. Oggi è un\'area protetta a tutela integrale (si può solo ammirare dalla barca), il che rende l\'escursione privata l\'unico vero modo per goderne la bellezza da una posizione privilegiata.'
          }
        ],
        gallery: []
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
          { 
            id: 'marmorata', 
            x: 24.2, 
            y: 66.0, 
            mobileX: 40.5, 
            mobileY: 19.5, 
            name: 'Isola Della Marmorata',
            title: 'Spiaggia La Marmorata',
            subtitle: 'Il mare turchese ai piedi del granito',
            description: 'La Marmorata è una delle baie più scenografiche della costa di Santa Teresa Gallura, con sabbia chiara, fondali trasparenti e una vista aperta verso l’arcipelago. Il nome richiama il paesaggio granitico della zona e le antiche attività legate alla pietra, che hanno segnato per anni questo tratto di costa. Davanti alla spiaggia, l’Isola della Marmorata crea uno scenario naturale perfetto per una sosta in barca. Qui il mare passa dal turchese brillante al blu profondo, rendendo ogni bagno un’esperienza semplice ma spettacolare.'
          },
          { 
            id: 'sambuco', 
            x: 76.7, 
            y: 70.5, 
            mobileX: 49.0, 
            mobileY: 71.5, 
            name: 'Cala Sambuco',
            title: 'Cala Sambuco',
            subtitle: 'La cala nascosta tra macchia mediterranea e silenzio',
            description: 'Cala Sambuco è una piccola insenatura selvaggia, incastonata tra rocce granitiche, vegetazione mediterranea e acqua limpida. È una delle cale più riservate della zona, perfetta per chi cerca tranquillità e un contatto più autentico con la costa gallurese. Il suo fascino sta proprio nella semplicità: niente eccessi, solo mare trasparente, profumo di macchia mediterranea e fondali ideali per una nuotata o un po’ di snorkeling. Raggiungerla via mare permette di viverla nel modo migliore, lontano dai percorsi più battuti.'
          },
          { 
            id: 'balcacia', 
            x: 94.3, 
            y: 78.1, 
            mobileX: 47.0, 
            mobileY: 90.5, 
            name: 'Cala Balcaccia',
            title: 'Cala Balcaccia',
            subtitle: 'Un angolo intimo della Gallura più autentica',
            description: 'Cala Balcaccia è una piccola baia protetta, raccolta tra rocce chiare e mare cristallino. È una tappa ideale per chi vuole scoprire una costa meno conosciuta ma estremamente suggestiva, dove la natura conserva ancora un carattere selvaggio e discreto. La cala offre fondali limpidi, colori intensi e un’atmosfera tranquilla, perfetta per una sosta bagno durante la navigazione. Vista dal mare, Cala Balcaccia rivela tutto il fascino della Gallura: granito, macchia mediterranea e acqua trasparente in un equilibrio perfetto.'
          }
        ],
        gallery: []
      },
      {
        id: 'marmorata',
        name: 'Spiaggia la Marmorata',
        image: "/immages/costa/marmorata.jpg",
        title: 'Spiaggia La Marmorata',
        subtitle: 'Il mare turchese ai piedi del granito',
        description: 'La Marmorata è una delle baie più scenografiche della costa di Santa Teresa Gallura, con sabbia chiara, fondali trasparenti e una vista aperta verso l’arcipelago. Il nome richiama il paesaggio granitico della zona e le antiche attività legate alla pietra, che hanno segnato per anni questo tratto di costa. Davanti alla spiaggia, l’Isola della Marmorata crea uno scenario naturale perfetto per una sosta in barca. Qui il mare passa dal turchese brillante al blu profondo, rendendo ogni bagno un’esperienza semplice ma spettacolare.',
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
        title: 'Cala Sambuco',
        subtitle: 'La cala nascosta tra macchia mediterranea e silenzio',
        description: 'Cala Sambuco è una piccola insenatura selvaggia, incastonata tra rocce granitiche, vegetazione mediterranea e acqua limpida. È una delle cale più riservate della zona, perfetta per chi cerca tranquillità e un contatto più autentico con la costa gallurese. Il suo fascino sta proprio nella semplicità: niente eccessi, solo mare trasparente, profumo di macchia mediterranea e fondali ideali per una nuotata o un po’ di snorkeling. Raggiungerla via mare permette di viverla nel modo migliore, lontano dai percorsi più battuti.',
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
        title: 'Cala Balcaccia',
        subtitle: 'Un angolo intimo della Gallura più autentica',
        description: 'Cala Balcaccia è una piccola baia protetta, raccolta tra rocce chiare e mare cristallino. È una tappa ideale per chi vuole scoprire una costa meno conosciuta ma estremamente suggestiva, dove la natura conserva ancora un carattere selvaggio e discreto. La cala offre fondali limpidi, colori intensi e un’atmosfera tranquilla, perfetta per una sosta bagno durante la navigazione. Vista dal mare, Cala Balcaccia rivela tutto il fascino della Gallura: granito, macchia mediterranea e acqua trasparente in un equilibrio perfetto.',
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
          { 
            id: 'piana', 
            x: 10.8, 
            y: 12.8, 
            name: 'Isola Piana',
            title: 'Isola Piana',
            subtitle: 'La laguna sospesa tra Sardegna e Corsica',
            description: 'L’Isola Piana è uno degli angoli più sorprendenti delle Bocche di Bonifacio: un piccolo paradiso di sabbia chiara, fondali bassissimi e acqua trasparente che sembra cambiare colore a ogni ora del giorno. Il suo nome racconta già la sua natura: un’isola bassa, dolce, quasi appoggiata sul mare. Navigare qui significa entrare in una laguna naturale dove il confine tra cielo e acqua si perde, con la Corsica sullo sfondo e la Sardegna alle spalle. È una tappa perfetta per chi ama soste tranquille, bagni rilassanti e paesaggi da cartolina.'
          },
          { 
            id: 'cavallo', 
            x: 74.7, 
            y: 23.3, 
            name: 'Isola Cavallo',
            title: 'Isola di Cavallo',
            subtitle: 'L’isola elegante delle Bocche di Bonifacio',
            description: 'Cavallo è l’isola più esclusiva dell’arcipelago corso, conosciuta per le sue ville nascoste tra le rocce granitiche, le piccole baie riservate e un’atmosfera fuori dal tempo. Un tempo punto di passaggio e rifugio nel cuore delle Bocche di Bonifacio, oggi è famosa per il suo carattere discreto e raffinato. Le sue acque limpide, le calette protette e le rocce scolpite dal vento la rendono una destinazione ideale per chi cerca una navigazione elegante, lontana dal turismo più affollato. Arrivare a Cavallo via mare significa scoprire una Corsica più segreta, silenziosa e preziosa.'
          },
          { 
            id: 'lavezzi', 
            x: 57.5, 
            y: 82.0, 
            name: 'Isola di Lavezzi',
            title: 'Isola di Lavezzi',
            subtitle: 'Il giardino di granito nel cuore del mare',
            description: 'Lavezzi è un’isola selvaggia e magnetica, fatta di massi granitici levigati dal vento, sentieri naturali e calette nascoste tra acque cristalline. È uno dei luoghi simbolo delle Bocche di Bonifacio, dove la natura domina completamente il paesaggio. Qui il mare assume sfumature incredibili, dal verde smeraldo al blu intenso, creando piscine naturali tra le rocce. L’isola conserva anche una memoria storica profonda, legata ai naufragi e alla navigazione in uno dei tratti di mare più affascinanti e potenti del Mediterraneo. Una tappa perfetta per chi vuole vivere la Corsica nella sua forma più autentica e selvaggia.'
          }
        ],
        gallery: []
      },
      {
        id: 'lavezzi',
        name: 'Isola di Lavezzi',
        image: "/images/corsica/isola lavezzi/lavezzi1.jpeg",
        title: 'Isola di Lavezzi',
        subtitle: 'Il giardino di granito nel cuore del mare',
        description: 'Lavezzi è un’isola selvaggia e magnetica, fatta di massi granitici levigati dal vento, sentieri naturali e calette nascoste tra acque cristalline. È uno dei luoghi simbolo delle Bocche di Bonifacio, dove la natura domina completamente il paesaggio. Qui il mare assume sfumature incredibili, dal verde smeraldo al blu intenso, creando piscine naturali tra le rocce. L’isola conserva anche una memoria storica profonda, legata ai naufragi e alla navigazione in uno dei tratti di mare più affascinanti e potenti del Mediterraneo. Una tappa perfetta per chi vuole vivere la Corsica nella sua forma più autentica e selvaggia.',
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
        title: 'Isola di Cavallo',
        subtitle: 'L’isola elegante delle Bocche di Bonifacio',
        description: 'Cavallo è l’isola più esclusiva dell’arcipelago corso, conosciuta per le sue ville nascoste tra le rocce granitiche, le piccole baie riservate e un’atmosfera fuori dal tempo. Un tempo punto di passaggio e rifugio nel cuore delle Bocche di Bonifacio, oggi è famosa per il suo carattere discreto e raffinato. Le sue acque limpide, le calette protette e le rocce scolpite dal vento la rendono una destinazione ideale per chi cerca una navigazione elegante, lontana dal turismo più affollato. Arrivare a Cavallo via mare significa scoprire una Corsica più segreta, silenziosa e preziosa.',
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
        title: 'Isola Piana',
        subtitle: 'La laguna sospesa tra Sardegna e Corsica',
        description: 'L’Isola Piana è uno degli angoli più sorprendenti delle Bocche di Bonifacio: un piccolo paradiso di sabbia chiara, fondali bassissimi e acqua trasparente che sembra cambiare colore a ogni ora del giorno. Il suo nome racconta già la sua natura: un’isola bassa, dolce, quasi appoggiata sul mare. Navigare qui significa entrare in una laguna naturale dove il confine tra cielo e acqua si perde, con la Corsica sullo sfondo e la Sardegna alle spalle. È una tappa perfetta per chi ama soste tranquille, bagni rilassanti e paesaggi da cartolina.',
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
    { src: "/immages/maddalena/spargi/Connari4.jpg", alt: "Cala Connari 3" },
    { src: "/immages/maddalena/spargi/Connari5.jpg", alt: "Cala Connari 4" }
  ]
};

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
    { src: "/images/costa/balcacia/Balcacia1.jpeg", alt: "Cala Balcaccia 1" },
    { src: "/images/costa/balcacia/Balcacia2.jpeg", alt: "Cala Balcaccia 2" },
    { src: "/images/costa/balcacia/Balcacia3.jpeg", alt: "Cala Balcaccia 3" },
    { src: "/images/costa/balcacia/balcacia4.jpeg", alt: "Cala Balcaccia 4" }
  ]
};

export const mapPinGalleries: Record<string, Record<string, GalleryImage[]>> = {
  spargi: spargiCovesGalleries,
  'piscine-naturali': piscineNaturaliSpotsGalleries,
  'la-maddalena': laMaddalenaBeachesGalleries,
  'costa-map': costaBeachesGalleries,
  'corsica-map': corsicaIslandsGalleries
};

export const mapPinDetails: Record<string, PinData> = {};
destinationsData.forEach(category => {
  category.subCategories.forEach(subCategory => {
    if (subCategory.pins) {
      subCategory.pins.forEach(pin => {
        mapPinDetails[pin.id] = pin;
      });
    }
  });
});

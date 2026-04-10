export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  image: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  tags: string[];
  featured?: boolean;
}

const baseUrl = import.meta.env.BASE_URL;
const asset = (path: string) => `${baseUrl}${path}`;

export const categories = [
  { name: "Resina Epoxi", slug: "resina-epoxi" },
  { name: "Revestimientos Epoxicos", slug: "revestimientos-epoxicos" },
  { name: "Revestimientos de Poliuretano", slug: "revestimientos-poliuretano" },
  { name: "Pavimentos Industriales", slug: "pavimentos-industriales" },
  { name: "Pavimentos Decorativos", slug: "pavimentos-decorativos" },
  { name: "Soluciones para Suelos", slug: "soluciones-suelos" },
  { name: "Acabados de Resina", slug: "acabados-resina" },
  { name: "Suelos Decorativos", slug: "suelos-decorativos" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Resina Epoxi Cristal HD",
    slug: "resina-epoxi-cristal-hd",
    category: "Resina Epoxi",
    categorySlug: "resina-epoxi",
    price: 89.9,
    image: asset("epoxy-products.jpg"),
    shortDescription: "Resina epoxi transparente de alta definicion para vertidos decorativos y acabados cristalinos.",
    description:
      "Formulada para ofrecer transparencia, nivelacion uniforme y una gran estabilidad visual, esta resina epoxi decorativa es ideal para piezas premium, encapsulados y trabajos donde el acabado final marca la diferencia. Ofrece una mezcla estable, brillo profundo y un excelente comportamiento en interiores.",
    benefits: ["Alta transparencia", "Autonivelante", "Curado uniforme", "Acabado brillante", "Facil de pigmentar"],
    applications: ["Arte en resina epoxi", "Encimeras", "Mesas rio", "Elementos decorativos con epoxi", "Joyeria"],
    specs: [
      { label: "Ratio de mezcla", value: "2:1" },
      { label: "Tiempo de trabajo", value: "40 min" },
      { label: "Curado completo", value: "72 horas" },
      { label: "Espesor maximo", value: "50 mm" },
    ],
    tags: ["resina epoxi decorativa", "arte en resina epoxi", "detalles decorativos con resina"],
    featured: true,
  },
  {
    id: "2",
    name: "Revestimiento Epoxico Industrial Pro",
    slug: "revestimiento-epoxico-industrial-pro",
    category: "Revestimientos Epoxicos",
    categorySlug: "revestimientos-epoxicos",
    price: 149,
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Sistema epoxico de alto rendimiento para pavimentos industriales y zonas de trafico intenso.",
    description:
      "Pensado para entornos tecnicos y exigentes, este revestimiento epoxico aporta resistencia mecanica, limpieza sencilla y larga vida util. Es una solucion profesional para suelos industriales, talleres, almacenes y superficies que necesitan continuidad y rendimiento.",
    benefits: ["Alta resistencia mecanica", "Resistente a productos quimicos", "Facil de limpiar", "Version antideslizante", "Gran durabilidad"],
    applications: ["Pavimentos industriales", "Naves logisticas", "Talleres", "Garajes", "Laboratorios"],
    specs: [
      { label: "Rendimiento", value: "4-6 m2/kg" },
      { label: "Espesor recomendado", value: "300-500 um" },
      { label: "Resistencia a compresion", value: "80 MPa" },
      { label: "Transito peatonal", value: "24 horas" },
    ],
    tags: ["revestimientos epoxicos", "soluciones para suelos industriales", "pavimentos resistentes"],
    featured: true,
  },
  {
    id: "3",
    name: "Pavimento Decorativo Metallic",
    slug: "pavimento-decorativo-metallic",
    category: "Pavimentos Decorativos",
    categorySlug: "pavimentos-decorativos",
    price: 199,
    image: asset("epoxy-art.jpg"),
    shortDescription: "Sistema metalico con alto impacto visual para suelos decorativos continuos y premium.",
    description:
      "Este sistema permite crear pavimentos decorativos con profundidad, reflejos y movimiento visual. Es perfecto para espacios donde el suelo forma parte de la identidad del ambiente y se busca una imagen diferencial sin renunciar a resistencia y mantenimiento sencillo.",
    benefits: ["Efecto metalico exclusivo", "Sin juntas", "Facil mantenimiento", "Acabado premium", "Alta resistencia superficial"],
    applications: ["Showrooms", "Tiendas", "Restaurantes", "Viviendas de alto nivel", "Recepciones"],
    specs: [
      { label: "Rendimiento", value: "3-5 m2/kg" },
      { label: "Colores disponibles", value: "24 tonos" },
      { label: "Espesor", value: "1.5-2 mm" },
      { label: "Curado completo", value: "7 dias" },
    ],
    tags: ["pavimentos decorativos", "suelos decorativos", "revestimientos epoxi para decoracion"],
    featured: true,
  },
  {
    id: "4",
    name: "Poliuretano Protector UV",
    slug: "poliuretano-protector-uv",
    category: "Revestimientos de Poliuretano",
    categorySlug: "revestimientos-poliuretano",
    price: 119,
    image: asset("epoxy-products.jpg"),
    shortDescription: "Acabado protector para interiores y exteriores con defensa UV y alta resistencia al desgaste.",
    description:
      "Capa final ideal para proteger sistemas epoxicos y superficies expuestas a luz, uso continuado o desgaste diario. Mejora la estabilidad del color y prolonga el ciclo de vida de los revestimientos decorativos e industriales.",
    benefits: ["Proteccion UV", "Menor amarilleo", "Resistente a abrasion", "Brillo duradero", "Apto para exterior"],
    applications: ["Terrazas", "Balcones", "Suelos exteriores", "Sobre sistemas epoxi", "Zonas soleadas"],
    specs: [
      { label: "Rendimiento", value: "8-10 m2/L" },
      { label: "Acabado", value: "Brillante o satinado" },
      { label: "Secado al tacto", value: "4 horas" },
      { label: "Repintado", value: "12 horas" },
    ],
    tags: ["revestimientos de poliuretano", "acabados de resina", "pavimentos resistentes"],
  },
  {
    id: "5",
    name: "Kit Suelo Garaje Premium",
    slug: "kit-suelo-garaje-premium",
    category: "Soluciones para Suelos",
    categorySlug: "soluciones-suelos",
    price: 299,
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Kit completo para renovar suelos con imprimacion, epoxi y acabado protector.",
    description:
      "Una solucion completa para usuarios que quieren transformar un suelo con una compra guiada y facil de entender. Incluye las capas esenciales para lograr un acabado limpio, duradero y con apariencia profesional.",
    benefits: ["Kit cerrado y sencillo", "Pensado para proyectos DIY", "Incluye sistema completo", "Buena resistencia a manchas", "Ideal para reformas"],
    applications: ["Garajes residenciales", "Taller domestico", "Cuartos tecnicos", "Trasteros"],
    specs: [
      { label: "Cobertura", value: "20-25 m2" },
      { label: "Capas incluidas", value: "3 capas" },
      { label: "Tiempo total", value: "3-5 dias" },
      { label: "Contenido", value: "Base + epoxi + protector" },
    ],
    tags: ["soluciones para suelos industriales", "pavimentos resistentes", "resina epoxi"],
    featured: true,
  },
  {
    id: "6",
    name: "Pigmentos Metalicos Premium",
    slug: "pigmentos-metalicos-premium",
    category: "Acabados de Resina",
    categorySlug: "acabados-resina",
    price: 34.9,
    image: asset("epoxy-art.jpg"),
    shortDescription: "Pigmentos premium para arte en resina epoxi, muebles y composiciones decorativas.",
    description:
      "Coleccion pensada para aportar profundidad, reflejo y personalidad a cualquier mezcla. Son ideales para artistas, decoradores y aplicadores que buscan acabados con gran carga visual y excelente dispersion dentro de la resina.",
    benefits: ["Color intenso", "Gran efecto metalico", "Facil dispersion", "Alta concentracion", "Amplia variedad cromatica"],
    applications: ["Arte en resina epoxi", "Accesorios decorativos epoxi", "Muebles de resina epoxi", "Encimeras", "Moldes"],
    specs: [
      { label: "Formato", value: "50 g / 100 g" },
      { label: "Colores", value: "36 tonos" },
      { label: "Base", value: "Mica natural" },
      { label: "Dosificacion", value: "2-5%" },
    ],
    tags: ["acabados de resina", "diseno con resina epoxi", "accesorios decorativos epoxi"],
  },
  {
    id: "7",
    name: "Resina Epoxi para Encimeras",
    slug: "resina-epoxi-encimeras",
    category: "Resina Epoxi",
    categorySlug: "resina-epoxi",
    price: 129,
    image: asset("epoxy-countertop.jpg"),
    shortDescription: "Resina epoxi para superficies de cocina, bano, barras y mobiliario de alto uso.",
    description:
      "Pensada para crear superficies continuas, atractivas y faciles de mantener, esta resina combina presencia decorativa con prestaciones tecnicas. Es una opcion excelente para proyectos de encimeras de epoxi y revestimientos donde importa tanto el aspecto como la resistencia.",
    benefits: ["Acabado premium", "Buena resistencia termica", "Autonivelante", "Facil limpieza", "Aspecto muy brillante"],
    applications: ["Encimeras de epoxi", "Mostradores", "Barras", "Mesas", "Muebles de resina epoxi"],
    specs: [
      { label: "Certificacion", value: "Uso interior" },
      { label: "Resistencia termica", value: "Hasta 120 C" },
      { label: "Ratio", value: "2:1" },
      { label: "Curado", value: "72 horas" },
    ],
    tags: ["encimeras de epoxi", "muebles de resina epoxi", "resina epoxi decorativa"],
    featured: true,
  },
  {
    id: "8",
    name: "Microcemento Epoxi Decorativo",
    slug: "microcemento-epoxi-decorativo",
    category: "Suelos Decorativos",
    categorySlug: "suelos-decorativos",
    price: 175,
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Sistema continuo con aspecto mineral para banos, cocinas y espacios contemporaneos.",
    description:
      "Una propuesta decorativa para crear superficies sin juntas, con imagen actual y tacto visual mineral. Muy adecuado para reformas de interior donde se busca una solucion limpia, elegante y funcional.",
    benefits: ["Sin juntas", "Aspecto mineral", "Apto para zonas humedas", "Amplia carta de color", "Mantenimiento sencillo"],
    applications: ["Suelos decorativos", "Banos", "Cocinas", "Locales comerciales", "Oficinas"],
    specs: [
      { label: "Espesor", value: "2-3 mm" },
      { label: "Rendimiento", value: "1.5-2 kg/m2" },
      { label: "Colores", value: "18 tonos" },
      { label: "Resistencia", value: "Clase 4" },
    ],
    tags: ["suelos decorativos", "pavimentos decorativos", "revestimientos epoxi para decoracion"],
  },
];

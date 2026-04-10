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
  featured?: boolean;
}

export const categories = [
  { name: "Resina Epoxi", slug: "resina-epoxi" },
  { name: "Revestimientos Epóxicos", slug: "revestimientos-epoxicos" },
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
    price: 89.90,
    image: "/epoxy-products.jpg",
    shortDescription: "Resina epoxi transparente de alta definición para acabados cristalinos perfectos.",
    description: "Nuestra Resina Epoxi Cristal HD es la solución definitiva para proyectos que requieren una transparencia absoluta y un acabado brillante impecable. Formulada con tecnología avanzada, ofrece una claridad óptica superior y una resistencia excepcional a los rayos UV.",
    benefits: ["Transparencia cristalina", "Autonivelante", "Resistente a UV", "Sin burbujas", "Curado uniforme"],
    applications: ["Encimeras", "Mesas río", "Arte en resina", "Joyería", "Recubrimientos"],
    specs: [
      { label: "Ratio mezcla", value: "2:1" },
      { label: "Tiempo de trabajo", value: "40 min" },
      { label: "Curado completo", value: "72 horas" },
      { label: "Espesor máximo", value: "50 mm" },
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Revestimiento Epóxico Industrial Pro",
    slug: "revestimiento-epoxico-industrial-pro",
    category: "Revestimientos Epóxicos",
    categorySlug: "revestimientos-epoxicos",
    price: 149.00,
    image: "/epoxy-floor.jpg",
    shortDescription: "Revestimiento epóxico de alto rendimiento para pavimentos industriales exigentes.",
    description: "El Revestimiento Epóxico Industrial Pro está diseñado para soportar las condiciones más exigentes. Ideal para naves industriales, talleres y zonas de tráfico pesado, ofrece una resistencia mecánica y química excepcional.",
    benefits: ["Alta resistencia mecánica", "Resistente a productos químicos", "Fácil limpieza", "Antideslizante", "Larga durabilidad"],
    applications: ["Naves industriales", "Talleres mecánicos", "Almacenes", "Garajes", "Laboratorios"],
    specs: [
      { label: "Rendimiento", value: "4-6 m²/kg" },
      { label: "Espesor recomendado", value: "300-500 μm" },
      { label: "Resistencia compresión", value: "80 MPa" },
      { label: "Curado al tránsito", value: "24 horas" },
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Pavimento Decorativo Metallic",
    slug: "pavimento-decorativo-metallic",
    category: "Pavimentos Decorativos",
    categorySlug: "pavimentos-decorativos",
    price: 199.00,
    image: "/epoxy-art.jpg",
    shortDescription: "Sistema de pavimento decorativo con efecto metálico 3D de alto impacto visual.",
    description: "Crea superficies únicas con nuestro Pavimento Decorativo Metallic. Este sistema innovador permite obtener acabados metálicos tridimensionales espectaculares, ideales para espacios comerciales, showrooms y hogares que buscan un diseño diferenciador.",
    benefits: ["Efecto 3D metálico", "Diseños únicos e irrepetibles", "Sin juntas", "Fácil mantenimiento", "Alta resistencia"],
    applications: ["Showrooms", "Hoteles", "Restaurantes", "Viviendas de lujo", "Comercios"],
    specs: [
      { label: "Rendimiento", value: "3-5 m²/kg" },
      { label: "Colores disponibles", value: "24 tonos" },
      { label: "Espesor", value: "1.5-2 mm" },
      { label: "Curado completo", value: "7 días" },
    ],
    featured: true,
  },
  {
    id: "4",
    name: "Poliuretano Protector UV",
    slug: "poliuretano-protector-uv",
    category: "Revestimientos de Poliuretano",
    categorySlug: "revestimientos-poliuretano",
    price: 119.00,
    image: "/epoxy-products.jpg",
    shortDescription: "Capa de protección de poliuretano con filtro UV para exteriores e interiores.",
    description: "Protege tus superficies con nuestro Poliuretano Protector UV. Esta capa de acabado ofrece la máxima protección contra la radiación ultravioleta, el amarilleamiento y el desgaste, manteniendo la belleza de tus revestimientos durante años.",
    benefits: ["Protección UV máxima", "Anti-amarilleamiento", "Resistente a abrasión", "Brillo duradero", "Apto exterior"],
    applications: ["Terrazas", "Balcones", "Suelos exteriores", "Sobre revestimientos epoxi", "Zonas expuestas al sol"],
    specs: [
      { label: "Rendimiento", value: "8-10 m²/L" },
      { label: "Acabado", value: "Brillante/Satinado" },
      { label: "Secado al tacto", value: "4 horas" },
      { label: "Repintado", value: "12 horas" },
    ],
  },
  {
    id: "5",
    name: "Kit Suelo Garaje Premium",
    slug: "kit-suelo-garaje-premium",
    category: "Soluciones para Suelos",
    categorySlug: "soluciones-suelos",
    price: 299.00,
    image: "/epoxy-floor.jpg",
    shortDescription: "Kit completo para renovar el suelo de tu garaje con acabado profesional.",
    description: "Todo lo que necesitas para transformar el suelo de tu garaje en una superficie profesional, resistente y estética. Incluye imprimación, revestimiento epoxi y acabado de poliuretano.",
    benefits: ["Kit completo", "Fácil aplicación DIY", "Acabado profesional", "Resistente a aceites", "Instrucciones incluidas"],
    applications: ["Garajes residenciales", "Talleres domésticos", "Trasteros", "Zonas de almacenaje"],
    specs: [
      { label: "Cobertura", value: "20-25 m²" },
      { label: "Capas incluidas", value: "3 (imprimación + epoxi + PU)" },
      { label: "Tiempo total", value: "3-5 días" },
      { label: "Contenido", value: "Kit completo + herramientas" },
    ],
    featured: true,
  },
  {
    id: "6",
    name: "Pigmentos Metálicos Premium",
    slug: "pigmentos-metalicos-premium",
    category: "Acabados de Resina",
    categorySlug: "acabados-resina",
    price: 34.90,
    image: "/epoxy-art.jpg",
    shortDescription: "Pigmentos metálicos de alta calidad para crear efectos espectaculares en resina.",
    description: "Nuestra colección de Pigmentos Metálicos Premium ofrece una paleta de colores vibrantes y efectos metálicos deslumbrantes para tus proyectos de resina epoxi. Formulados con partículas de mica natural.",
    benefits: ["Colores vibrantes", "Efecto metálico intenso", "Fácil dispersión", "No tóxicos", "Alta concentración"],
    applications: ["Arte en resina", "Pavimentos decorativos", "Encimeras", "Joyería artesanal", "Muebles de resina"],
    specs: [
      { label: "Presentación", value: "50g / 100g" },
      { label: "Colores", value: "36 tonos disponibles" },
      { label: "Tipo", value: "Mica natural" },
      { label: "Dosificación", value: "2-5% del peso" },
    ],
  },
  {
    id: "7",
    name: "Resina Epoxi para Encimeras",
    slug: "resina-epoxi-encimeras",
    category: "Resina Epoxi",
    categorySlug: "resina-epoxi",
    price: 129.00,
    image: "/epoxy-countertop.jpg",
    shortDescription: "Resina epoxi certificada alimentaria para encimeras de cocina y baño.",
    description: "Nuestra Resina Epoxi para Encimeras está certificada para contacto alimentario y ofrece la máxima resistencia al calor, manchas y productos de limpieza. Transforma cualquier superficie en una encimera de diseño premium.",
    benefits: ["Apta para alimentos", "Resistente al calor", "Anti-manchas", "Autonivelante", "Ultra brillante"],
    applications: ["Encimeras de cocina", "Encimeras de baño", "Barras", "Mesas de comedor", "Mostradores"],
    specs: [
      { label: "Certificación", value: "Alimentaria" },
      { label: "Resistencia térmica", value: "Hasta 120°C" },
      { label: "Ratio", value: "2:1" },
      { label: "Curado", value: "72 horas" },
    ],
    featured: true,
  },
  {
    id: "8",
    name: "Microcemento Epoxi Decorativo",
    slug: "microcemento-epoxi-decorativo",
    category: "Suelos Decorativos",
    categorySlug: "suelos-decorativos",
    price: 175.00,
    image: "/epoxy-floor.jpg",
    shortDescription: "Sistema de microcemento epoxi para suelos decorativos sin juntas de aspecto mineral.",
    description: "El Microcemento Epoxi Decorativo combina la estética del microcemento con la resistencia superior del epoxi. Ideal para crear superficies continuas sin juntas con un acabado mineral elegante y contemporáneo.",
    benefits: ["Sin juntas", "Aspecto mineral natural", "Alta resistencia", "Múltiples colores", "Apto para baños"],
    applications: ["Baños", "Cocinas", "Salones", "Locales comerciales", "Oficinas"],
    specs: [
      { label: "Espesor", value: "2-3 mm" },
      { label: "Rendimiento", value: "1.5-2 kg/m²" },
      { label: "Colores", value: "18 tonos" },
      { label: "Resistencia", value: "Clase 4 tráfico" },
    ],
  },
];

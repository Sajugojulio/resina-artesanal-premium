export interface ProductDocument {
  label: string;
  href: string;
  format: "DOCX" | "PDF";
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  tags: string[];
  manufacturer: string;
  brand: string;
  line: string;
  price?: number;
  documents: ProductDocument[];
  featured?: boolean;
}

const baseUrl = import.meta.env.BASE_URL;
const asset = (path: string) => `${baseUrl}${path}`;
const doc = (path: string) => `${baseUrl}technical-sheets/${path}`;

export const categories = [
  { name: "Epoxi Base Agua", slug: "epoxi-base-agua" },
  { name: "Epoxi 100% Solidos", slug: "epoxi-100-solidos" },
  { name: "Pavimentos Continuos", slug: "pavimentos-continuos" },
  { name: "Impermeabilizacion", slug: "impermeabilizacion" },
  { name: "Acabados y Selladores", slug: "acabados-selladores" },
];

export const products: Product[] = [
  {
    id: "colodur",
    name: "Colodur",
    slug: "colodur",
    category: "Acabados y Selladores",
    categorySlug: "acabados-selladores",
    image: asset("epoxy-products.jpg"),
    shortDescription: "Sistema tecnico para acabado y proteccion de superficies con documentacion tecnica disponible.",
    description:
      "Colodur forma parte del porfolio tecnico que IDP puede presentar bajo su propia identidad comercial. Es una referencia pensada para proyectos donde importan la proteccion superficial, la continuidad del sistema y una documentacion clara para obra y prescripcion.",
    benefits: ["Ficha tecnica descargable", "Aplicacion profesional", "Compatible con proyectos de pavimento", "Listo para presupuesto"],
    applications: ["Proteccion de superficies", "Revestimientos continuos", "Pavimentos interiores", "Obra nueva y rehabilitacion"],
    specs: [
      { label: "Familia", value: "Acabado tecnico" },
      { label: "Documentacion", value: "Ficha tecnica en espanol" },
      { label: "Marca comercial", value: "IDP Iberica S.L." },
      { label: "Fabricante de referencia", value: "Polytec" },
    ],
    tags: ["acabados de resina", "revestimientos epoxicos", "soluciones para suelos industriales"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Acabados tecnicos",
    documents: [{ label: "Descargar ficha tecnica", href: doc("colodur.docx"), format: "DOCX" }],
    featured: true,
  },
  {
    id: "colodur-eco",
    name: "Colodur ECO",
    slug: "colodur-eco",
    category: "Acabados y Selladores",
    categorySlug: "acabados-selladores",
    image: asset("epoxy-products.jpg"),
    shortDescription: "Version ECO orientada a acabados tecnicos con soporte documental para propuestas comerciales y de obra.",
    description:
      "Colodur ECO amplía la línea técnica con una variante enfocada a sistemas de acabado y protección donde el cliente necesita trazabilidad documental, imagen de marca propia y soporte para futuras ampliaciones del catálogo.",
    benefits: ["Version ECO del sistema", "Descarga directa de ficha", "Encaje comercial en linea IDP", "Preparado para futuras versiones de etiqueta"],
    applications: ["Acabados de resina", "Sellado de superficies", "Suelos decorativos", "Entornos interiores"],
    specs: [
      { label: "Familia", value: "Acabado tecnico ECO" },
      { label: "Formato disponible", value: "DOCX" },
      { label: "Idioma", value: "Espanol" },
      { label: "Branding previsto", value: "Linea verde IDP" },
    ],
    tags: ["acabados de resina", "suelos decorativos", "revestimientos epoxi para decoracion"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Acabados tecnicos",
    documents: [{ label: "Descargar ficha tecnica", href: doc("colodur-eco.docx"), format: "DOCX" }],
  },
  {
    id: "ep-aquacoat",
    name: "EP Aquacoat",
    slug: "ep-aquacoat",
    category: "Epoxi Base Agua",
    categorySlug: "epoxi-base-agua",
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Sistema epoxi base agua pensado para proteccion y renovacion tecnica de soportes.",
    description:
      "EP Aquacoat se posiciona como una referencia profesional para trabajos donde se busca una solución epoxi con enfoque técnico y documentación disponible para el cliente final, aplicadores y estudios que necesiten respaldo de producto.",
    benefits: ["Sistema epoxi con documentacion", "Orientado a soporte tecnico", "Enfoque profesional", "Escalable dentro del catalogo IDP"],
    applications: ["Pavimentos interiores", "Renovacion de superficies", "Zonas tecnicas", "Locales comerciales"],
    specs: [
      { label: "Familia", value: "Epoxi base agua" },
      { label: "Documento", value: "Ficha tecnica disponible" },
      { label: "Uso comercial", value: "Catalogo tecnico IDP" },
      { label: "Estado", value: "Listo para presupuesto" },
    ],
    tags: ["revestimientos epoxicos", "pavimentos decorativos", "soluciones para suelos industriales"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Sistemas epoxi al agua",
    documents: [{ label: "Descargar ficha tecnica", href: doc("ep-aquacoat.docx"), format: "DOCX" }],
    featured: true,
  },
  {
    id: "ep-aquanivel",
    name: "EP Aquanivel",
    slug: "ep-aquanivel",
    category: "Epoxi Base Agua",
    categorySlug: "epoxi-base-agua",
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Sistema epoxi autonivelante base agua para propuestas de suelo continuo con enfoque tecnico.",
    description:
      "EP Aquanivel está planteado para proyectos donde la regularidad del acabado, el apoyo documental y la presentación profesional del sistema son claves. En la web queda preparado como producto real con descarga técnica y espacio para ampliar detalle más adelante.",
    benefits: ["Autonivelante base agua", "Apto para porfolio tecnico", "Descarga de ficha inmediata", "Presentacion comercial profesional"],
    applications: ["Suelos continuos", "Pavimentos decorativos", "Reformas interiores", "Superficies de uso intensivo"],
    specs: [
      { label: "Familia", value: "Epoxi base agua autonivelante" },
      { label: "Formato", value: "DOCX" },
      { label: "Marca", value: "IDP Iberica S.L." },
      { label: "Fabricante base", value: "Polytec" },
    ],
    tags: ["pavimentos decorativos", "revestimientos epoxicos", "suelos decorativos"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Sistemas epoxi al agua",
    documents: [{ label: "Descargar ficha tecnica", href: doc("ep-aquanivel.docx"), format: "DOCX" }],
    featured: true,
  },
  {
    id: "ep-coat-100",
    name: "EP Coat 100",
    slug: "ep-coat-100",
    category: "Epoxi 100% Solidos",
    categorySlug: "epoxi-100-solidos",
    image: asset("epoxy-industrial.jpg"),
    shortDescription: "Ligante epoxidico 100% solidos para revestimientos en capa fina, autonivelantes y sistemas multicapa.",
    description:
      "EP Coat 100 es una de las referencias técnicas mejor documentadas del lote recibido. Se trata de un ligante epoxídico de dos componentes y 100% sólidos, especialmente diseñado para formación de revestimientos epoxi en capa fina, autonivelantes o multicapas antideslizantes en zonas interiores de uso exigente.",
    benefits: ["100% solidos", "Aplicacion a rodillo, llana o rastrillo", "Excelente nivelacion", "Apto para sistemas multicapa antideslizantes", "Cobertura profesional de arido"],
    applications: ["Locales industriales", "Parkings", "Almacenes", "Locales comerciales", "Suelos de hormigon interior"],
    specs: [
      { label: "Relacion de mezcla", value: "A=100 / B=25 en peso" },
      { label: "Pot life a 23 C", value: "25 minutos" },
      { label: "Transito peatonal a 23 C", value: "24 horas" },
      { label: "Curado total a 23 C", value: "6 dias" },
    ],
    tags: ["revestimientos epoxicos", "pavimentos industriales", "pavimentos resistentes"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Epoxi estructural",
    documents: [{ label: "Descargar ficha tecnica", href: doc("ep-coat-100.docx"), format: "DOCX" }],
    featured: true,
  },
  {
    id: "impermax",
    name: "Impermax",
    slug: "impermax",
    category: "Impermeabilizacion",
    categorySlug: "impermeabilizacion",
    image: asset("epoxy-industrial.jpg"),
    shortDescription: "Sistema de impermeabilizacion tecnica con documentacion extensa para proyectos exigentes.",
    description:
      "Impermax se incorpora como referencia clave en la parte de impermeabilización del catálogo. La ficha aportada por el cliente es especialmente amplia, lo que permite construir más adelante una presentación muy sólida para prescriptores, distribuidores y obra técnica.",
    benefits: ["Documentacion extensa", "Preparado para porfolio profesional", "Apto para futuras fichas maquetadas IDP", "Escalable a nuevos productos"],
    applications: ["Impermeabilizacion", "Cubiertas", "Proteccion de soportes", "Rehabilitacion tecnica"],
    specs: [
      { label: "Familia", value: "Impermeabilizacion tecnica" },
      { label: "Documento", value: "Ficha tecnica ampliada" },
      { label: "Soporte comercial", value: "Marca IDP" },
      { label: "Estado", value: "Disponible para consulta" },
    ],
    tags: ["impermeabilizacion", "revestimientos resistentes", "soluciones para suelos industriales"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Impermeabilizacion",
    documents: [{ label: "Descargar ficha tecnica", href: doc("impermax.docx"), format: "DOCX" }],
    featured: true,
  },
  {
    id: "impermax-aqua",
    name: "Impermax Aqua",
    slug: "impermax-aqua",
    category: "Impermeabilizacion",
    categorySlug: "impermeabilizacion",
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Version Aqua para soluciones de impermeabilizacion con soporte documental y enfoque comercial técnico.",
    description:
      "Impermax Aqua refuerza la línea de impermeabilización con una referencia específica orientada a proyectos donde el cliente necesita una ficha clara, identidad de marca propia y acompañamiento técnico en la fase comercial.",
    benefits: ["Version Aqua del sistema", "Descarga tecnica directa", "Preparado para identidad visual IDP", "Valido para porfolio profesional"],
    applications: ["Impermeabilizacion", "Cubiertas y terrazas", "Proteccion superficial", "Rehabilitacion"],
    specs: [
      { label: "Familia", value: "Impermeabilizacion Aqua" },
      { label: "Idioma", value: "Espanol" },
      { label: "Formato disponible", value: "DOCX" },
      { label: "Marca comercial", value: "IDP Iberica S.L." },
    ],
    tags: ["impermeabilizacion", "revestimientos de poliuretano", "pavimentos resistentes"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Impermeabilizacion",
    documents: [{ label: "Descargar ficha tecnica", href: doc("impermax-aqua.docx"), format: "DOCX" }],
  },
  {
    id: "impermax-cold-polyurea",
    name: "Impermax Cold Polyurea",
    slug: "impermax-cold-polyurea",
    category: "Impermeabilizacion",
    categorySlug: "impermeabilizacion",
    image: asset("epoxy-industrial.jpg"),
    shortDescription: "Sistema tecnico de poliurea en frio para soluciones avanzadas de impermeabilizacion.",
    description:
      "Impermax Cold Polyurea aporta una referencia más avanzada dentro del porfolio. En la web queda presentada como sistema técnico especializado, con ficha descargable y espacio para enriquecer después con casos de uso, rendimientos y detalles de aplicación.",
    benefits: ["Tecnologia de poliurea en frio", "Descarga de ficha tecnica", "Apto para ampliacion futura", "Perfil profesional"],
    applications: ["Impermeabilizacion avanzada", "Cubiertas", "Proteccion de soporte", "Intervenciones tecnicas"],
    specs: [
      { label: "Familia", value: "Poliurea en frio" },
      { label: "Documento", value: "Ficha tecnica disponible" },
      { label: "Presentacion web", value: "Catalogo tecnico IDP" },
      { label: "Soporte comercial", value: "Presupuesto bajo consulta" },
    ],
    tags: ["revestimientos de poliuretano", "impermeabilizacion", "revestimientos resistentes"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Impermeabilizacion",
    documents: [{ label: "Descargar ficha tecnica", href: doc("impermax-cold-polyurea.docx"), format: "DOCX" }],
  },
  {
    id: "kryptanate-100-lv",
    name: "Kryptanate 100 LV",
    slug: "kryptanate-100-lv",
    category: "Acabados y Selladores",
    categorySlug: "acabados-selladores",
    image: asset("epoxy-products.jpg"),
    shortDescription: "Referencia tecnica de baja viscosidad para sellado, proteccion o capas funcionales dentro del sistema.",
    description:
      "Kryptanate 100 LV se presenta como una solución de perfil técnico dentro de la línea de acabados y selladores. La web la deja preparada con descarga documental, contexto profesional y un enfoque válido para futuras ampliaciones de portfolio.",
    benefits: ["Baja viscosidad", "Posicionamiento tecnico", "Ficha descargable", "Compatible con porfolio ampliable"],
    applications: ["Sellado tecnico", "Proteccion superficial", "Capas funcionales", "Soluciones complementarias"],
    specs: [
      { label: "Familia", value: "Sellador tecnico" },
      { label: "Nivel documental", value: "Ficha tecnica disponible" },
      { label: "Marca", value: "IDP Iberica S.L." },
      { label: "Fabricante base", value: "Polytec" },
    ],
    tags: ["acabados de resina", "revestimientos resistentes", "diseno con resina epoxi"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Selladores tecnicos",
    documents: [{ label: "Descargar ficha tecnica", href: doc("kryptanate-100-lv.docx"), format: "DOCX" }],
  },
  {
    id: "pavifloor",
    name: "Pavifloor",
    slug: "pavifloor",
    category: "Pavimentos Continuos",
    categorySlug: "pavimentos-continuos",
    image: asset("epoxy-floor.jpg"),
    shortDescription: "Sistema orientado a pavimentos continuos con apoyo documental listo para cliente y prescripcion.",
    description:
      "Pavifloor es una referencia estratégica para enfocar la web hacia proyectos reales de suelo continuo. Su presencia en catálogo permite hablar con más credibilidad de pavimentos industriales, decorativos y soluciones técnicas para aplicadores y estudios.",
    benefits: ["Posicionamiento claro en pavimentos", "Ficha tecnica directa", "Ideal para web comercial tecnica", "Escalable con nuevas referencias"],
    applications: ["Pavimentos continuos", "Locales comerciales", "Espacios tecnicos", "Reformas de suelo"],
    specs: [
      { label: "Familia", value: "Pavimentos continuos" },
      { label: "Soporte", value: "Documentacion tecnica disponible" },
      { label: "Marca comercial", value: "IDP Iberica S.L." },
      { label: "Disponibilidad", value: "Bajo consulta" },
    ],
    tags: ["pavimentos industriales", "pavimentos decorativos", "soluciones para suelos industriales"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Pavimentos",
    documents: [{ label: "Descargar ficha tecnica", href: doc("pavifloor.docx"), format: "DOCX" }],
    featured: true,
  },
  {
    id: "pavisoft",
    name: "Pavisoft",
    slug: "pavisoft",
    category: "Pavimentos Continuos",
    categorySlug: "pavimentos-continuos",
    image: asset("epoxy-art.jpg"),
    shortDescription: "Sistema de pavimento con enfoque tecnico-comercial para completar la linea de soluciones continuas.",
    description:
      "Pavisoft complementa la familia de pavimentos continuos y ayuda a presentar un catálogo más completo ante el cliente. Está preparado con ficha técnica enlazada y lenguaje comercial profesional para que la web evolucione con nuevas incorporaciones sin rehacer la estructura.",
    benefits: ["Completa la linea de pavimentos", "Ficha tecnica enlazada", "Encaje comercial profesional", "Preparado para rebranding documental"],
    applications: ["Suelos tecnicos", "Espacios interiores", "Pavimentos decorativos", "Soluciones continuas"],
    specs: [
      { label: "Familia", value: "Pavimentos continuos" },
      { label: "Documento", value: "Ficha tecnica en espanol" },
      { label: "Branding previsto", value: "IDP en verde" },
      { label: "Uso comercial", value: "Consulta y presupuesto" },
    ],
    tags: ["suelos decorativos", "pavimentos decorativos", "acabados de resina"],
    manufacturer: "Polytec",
    brand: "IDP Iberica S.L.",
    line: "Pavimentos",
    documents: [{ label: "Descargar ficha tecnica", href: doc("pavisoft.docx"), format: "DOCX" }],
  },
];

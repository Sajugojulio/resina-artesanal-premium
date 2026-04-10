import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import epoxyFloor from "@/assets/epoxy-floor.jpg";
import epoxyCountertop from "@/assets/epoxy-countertop.jpg";
import epoxyIndustrial from "@/assets/epoxy-industrial.jpg";
import epoxyArt from "@/assets/epoxy-art.jpg";

const solutions = [
  {
    title: "Pavimentos Industriales",
    desc: "Revestimientos epóxicos de alto rendimiento para naves industriales, talleres, almacenes y zonas de tráfico pesado. Máxima resistencia mecánica y química con acabados antideslizantes y fácil mantenimiento.",
    image: epoxyIndustrial,
    keywords: ["Naves industriales", "Talleres", "Almacenes", "Garajes"],
  },
  {
    title: "Pavimentos Decorativos",
    desc: "Sistemas de suelos decorativos con efectos metálicos 3D, microcemento epoxi y acabados únicos e irrepetibles. Ideales para showrooms, hoteles, restaurantes, comercios y viviendas de lujo.",
    image: epoxyFloor,
    keywords: ["Showrooms", "Hoteles", "Comercios", "Viviendas de lujo"],
  },
  {
    title: "Encimeras y Superficies de Epoxi",
    desc: "Resinas epoxi certificadas para encimeras de cocina y baño, mesas río, mostradores y barras. Acabados cristalinos con certificación alimentaria y resistencia excepcional al calor y las manchas.",
    image: epoxyCountertop,
    keywords: ["Cocinas", "Baños", "Mesas río", "Mostradores"],
  },
  {
    title: "Arte y Decoración con Resina Epoxi",
    desc: "Materiales premium para artistas y creadores: resinas cristalinas, pigmentos metálicos, moldes y herramientas para crear piezas únicas de arte en resina, joyería artesanal y elementos decorativos con epoxi.",
    image: epoxyArt,
    keywords: ["Arte en resina", "Joyería", "Muebles de resina", "Elementos decorativos"],
  },
  {
    title: "Revestimientos Resistentes para Exteriores",
    desc: "Soluciones de poliuretano con protección UV para terrazas, balcones y zonas exteriores. Máxima durabilidad frente a la intemperie sin perder la estética.",
    image: epoxyFloor,
    keywords: ["Terrazas", "Balcones", "Piscinas", "Fachadas"],
  },
  {
    title: "Suelos Decorativos Sin Juntas",
    desc: "Sistemas de microcemento epoxi para superficies continuas con aspecto mineral contemporáneo. Aptos para baños, cocinas, salones y locales comerciales con un acabado elegante y sin juntas.",
    image: epoxyIndustrial,
    keywords: ["Baños", "Salones", "Oficinas", "Locales comerciales"],
  },
];

const Soluciones = () => (
  <Layout>
    <section className="py-16 bg-gradient-dark border-b border-border">
      <div className="container text-center">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Soluciones y aplicaciones</span>
        <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold">Diseño con resina epoxi para cada espacio</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Desde pavimentos industriales hasta detalles decorativos con resina, ofrecemos la solución perfecta para profesionales y particulares.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container space-y-16">
        {solutions.map((sol, i) => (
          <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={`rounded-lg overflow-hidden aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={sol.image} alt={sol.title} loading="lazy" width={800} height={500} className="w-full h-full object-cover" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{sol.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{sol.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {sol.keywords.map((kw, j) => (
                  <span key={j} className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">{kw}</span>
                ))}
              </div>
              <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                <Link to="/tienda">Ver productos <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 bg-gradient-dark">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿No encuentras lo que buscas?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Nuestro equipo de expertos puede asesorarte para encontrar la solución ideal para tu proyecto. Contacta sin compromiso.
        </p>
        <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
          <Link to="/contacto">Solicitar asesoramiento</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Soluciones;

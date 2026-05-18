import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText, Palette, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroImage from "@/assets/hero-epoxy.jpg";
import epoxyFloor from "@/assets/epoxy-floor.jpg";
import epoxyIndustrial from "@/assets/epoxy-industrial.jpg";

const featuredProducts = products.filter((product) => product.featured);

const workflow = [
  {
    icon: FileText,
    title: "Catalogo con referencias reales",
    description: "La web ya trabaja con los nombres y familias de producto recibidos del cliente.",
  },
  {
    icon: Download,
    title: "Fichas tecnicas integradas",
    description: "Cada producto puede enlazar su documentacion para consulta y descarga inmediata.",
  },
  {
    icon: Palette,
    title: "Base lista para rebranding",
    description: "La siguiente fase sera rehacer las fichas con verde IDP, logo y maquetacion propia.",
  },
  {
    icon: Shield,
    title: "Estructura escalable",
    description: "Podemos seguir anadiendo referencias nuevas sin desmontar el catalogo ya construido.",
  },
];

const Index = () => (
  <Layout>
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Resina epoxi decorativa - IDP Productos" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container relative z-10 flex min-h-[90vh] items-center py-20">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Catalogo tecnico IDP
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl">
            Productos reales, <span className="text-gradient-gold">fichas tecnicas</span> y una base lista para crecer
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Hemos convertido la web en un catalogo profesional con referencias reales del cliente, documentacion integrada y estructura preparada para rehacer todas las fichas con identidad visual IDP.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-gold px-8 text-base font-semibold text-primary-foreground hover:opacity-90">
              <Link to="/tienda">Ver catalogo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/40 px-8 text-base font-semibold text-primary hover:bg-primary/10">
              <Link to="/documentacion">Ver fichas tecnicas</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base font-medium text-muted-foreground hover:text-foreground">
              <Link to="/contacto">
                Solicitar asesoramiento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-dark py-20">
      <div className="container">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Familias de producto</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Estructura de catalogo preparada para cliente</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Las categorias ya responden a familias tecnicas reales, no a productos de muestra.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/tienda?cat=${category.slug}`}
              className="rounded-lg border border-border bg-gradient-card p-5 text-center transition-all duration-300 hover:border-primary/30 hover:glow-gold"
            >
              <h3 className="text-sm font-semibold text-foreground">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workflow.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-gradient-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-dark py-20">
      <div className="container">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Referencias destacadas</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Productos ya preparados para presupuesto y ficha</h2>
          </div>
          <Button asChild variant="ghost" className="hidden text-primary hover:text-primary/80 md:flex">
            <Link to="/tienda">Ver todos</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-border">
          <img src={epoxyIndustrial} alt="Catalogo tecnico para pavimentos industriales" className="h-full w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <img src={epoxyFloor} alt="Documentacion y acabados de resina" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section className="border-y border-border py-20">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Siguiente objetivo</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Fusilar las fichas con marca IDP, de forma limpia y profesional</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            El cliente ya ha dejado clara la direccion correcta: mantener la base tecnica del fabricante y rehacer la presentacion con logo, nombre, tipologia y color verde IDP. La web ya queda lista para apoyar ese proceso con descargas y catalogacion ordenada.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <p className="text-sm font-semibold text-emerald-300">Que ya podemos hacer con lo recibido</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Publicar productos reales en lugar de referencias ficticias.</li>
            <li>Adjuntar fichas por producto dentro de la web.</li>
            <li>Preparar una biblioteca tecnica descargable.</li>
            <li>Montar el siguiente paso de branding documental sobre una base ordenada.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Listos para la siguiente fase del proyecto</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Ya tenemos una web mucho mas util para cliente y equipo comercial. El siguiente salto es maquetar las fichas IDP con un acabado realmente propio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-gold px-8 text-base font-semibold text-primary-foreground hover:opacity-90">
            <Link to="/documentacion">Revisar documentacion</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/40 px-8 text-base font-semibold text-primary hover:bg-primary/10">
            <Link to="/contacto">Preparar briefing</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;

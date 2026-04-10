import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Clock, Award, ArrowRight, Star, CheckCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroImage from "@/assets/hero-epoxy.jpg";
import epoxyFloor from "@/assets/epoxy-floor.jpg";
import epoxyCountertop from "@/assets/epoxy-countertop.jpg";
import epoxyIndustrial from "@/assets/epoxy-industrial.jpg";
import epoxyArt from "@/assets/epoxy-art.jpg";

const featuredProducts = products.filter((p) => p.featured);

const benefits = [
  { icon: Shield, title: "Máxima Resistencia", desc: "Formulaciones de alto rendimiento diseñadas para soportar las condiciones más exigentes." },
  { icon: Sparkles, title: "Acabados Premium", desc: "Efectos metálicos, brillantes y decorativos que transforman cualquier espacio." },
  { icon: Clock, title: "Durabilidad Extrema", desc: "Productos que mantienen su aspecto y prestaciones durante décadas." },
  { icon: Award, title: "Calidad Certificada", desc: "Todos nuestros productos cumplen con las normativas europeas más exigentes." },
];

const applications = [
  { title: "Pavimentos Industriales", image: epoxyIndustrial, desc: "Suelos resistentes para naves, talleres y almacenes." },
  { title: "Pavimentos Decorativos", image: epoxyFloor, desc: "Diseños exclusivos con efectos metálicos y 3D." },
  { title: "Encimeras de Epoxi", image: epoxyCountertop, desc: "Superficies únicas para cocinas y baños de diseño." },
  { title: "Arte en Resina Epoxi", image: epoxyArt, desc: "Creaciones artísticas con acabados espectaculares." },
];

const testimonials = [
  { name: "Carlos M.", role: "Arquitecto de interiores", text: "IDP Productos ha sido clave en nuestros proyectos. La calidad de sus resinas es inigualable y el acabado siempre supera expectativas.", rating: 5 },
  { name: "Laura R.", role: "Reformista profesional", text: "Desde que trabajo con IDP, mis clientes no dejan de elogiar los resultados. Los pavimentos decorativos son espectaculares.", rating: 5 },
  { name: "Miguel Á.", role: "Artista de resina", text: "Los pigmentos metálicos y la resina cristal son simplemente perfectos para mis obras. Transparencia total y colores vibrantes.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-resin-stage">
        <img
          src={heroImage}
          alt="Resina epoxi decorativa - IDP Productos"
          width={1920}
          height={1080}
          className="hero-resin-base w-full h-full object-cover"
        />
        <div aria-hidden="true" className="hero-resin-pour" />
        <div aria-hidden="true" className="hero-resin-stream-glow" />
        <div aria-hidden="true" className="hero-resin-puddle-glow" />
        <div aria-hidden="true" className="hero-resin-ripple" />
        <div aria-hidden="true" className="hero-resin-spark" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in">
            Revestimientos Epóxicos Premium
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 animate-fade-in-up">
            Transforma tus espacios con{" "}
            <span className="text-gradient-gold">resina epoxi</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Soluciones innovadoras en pavimentos decorativos, revestimientos epóxicos y acabados de resina. Calidad, durabilidad y un toque estético único para cada proyecto.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold text-base px-8 hover:opacity-90">
              <Link to="/tienda">Ver productos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10 font-semibold text-base px-8">
              <Link to="/contacto">Solicitar asesoramiento</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground font-medium text-base">
              <Link to="/soluciones">Descubrir soluciones <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Nuestro catálogo</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold">Categorías de productos</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra amplia gama de resinas epoxi, revestimientos epóxicos, pavimentos decorativos y soluciones para suelos industriales.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/tienda?cat=${cat.slug}`}
              className="group p-6 rounded-lg bg-gradient-card border border-border hover:border-primary/30 text-center transition-all duration-300 hover:glow-gold"
            >
              <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">¿Por qué IDP Productos?</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold">La diferencia está en la calidad</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-lg bg-gradient-card border border-border text-center group hover:border-primary/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Productos destacados</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold">Los más vendidos</h2>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex text-primary hover:text-primary/80">
            <Link to="/tienda">Ver todos <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="border-primary/40 text-primary">
            <Link to="/tienda">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Applications */}
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Aplicaciones</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold">Soluciones para cada proyecto</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Desde pavimentos industriales hasta encimeras de epoxi y arte en resina. Descubre todas las posibilidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, i) => (
            <Link
              key={i}
              to="/soluciones"
              className="group relative aspect-[16/9] rounded-lg overflow-hidden"
            >
              <img src={app.image} alt={app.title} loading="lazy" width={800} height={450} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{app.title}</h3>
                <p className="text-sm text-muted-foreground">{app.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Testimonios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-lg bg-gradient-card border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="py-12 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Proyectos completados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "15+", label: "Años de experiencia" },
            { value: "24h", label: "Envío rápido" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-display font-bold text-gradient-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          ¿Listo para transformar tus espacios?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Nuestro equipo de expertos está preparado para asesorarte en la elección de la solución perfecta para tu proyecto. Contacta con nosotros sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold text-base px-8 hover:opacity-90">
            <Link to="/contacto">Solicitar presupuesto</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10 font-semibold text-base px-8">
            <Link to="/tienda">Explorar productos</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;

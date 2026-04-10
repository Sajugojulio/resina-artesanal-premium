import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ResinHeroCanvas from "@/components/ResinHeroCanvas";
import { categories, products } from "@/data/products";
import epoxyFloor from "@/assets/epoxy-floor.jpg";
import epoxyCountertop from "@/assets/epoxy-countertop.jpg";
import epoxyIndustrial from "@/assets/epoxy-industrial.jpg";
import epoxyArt from "@/assets/epoxy-art.jpg";

const featuredProducts = products.filter((product) => product.featured);

const benefits = [
  {
    icon: Shield,
    title: "Maxima resistencia",
    desc: "Formulaciones de alto rendimiento preparadas para soportar uso intensivo y entornos exigentes.",
  },
  {
    icon: Sparkles,
    title: "Acabados premium",
    desc: "Efectos decorativos, metalicos y cristalinos para proyectos con una presencia visual superior.",
  },
  {
    icon: Clock,
    title: "Durabilidad real",
    desc: "Sistemas pensados para mantener brillo, color y resistencia durante mucho tiempo.",
  },
  {
    icon: Award,
    title: "Calidad profesional",
    desc: "Soluciones seleccionadas para aplicadores, reformas cuidadas y proyectos de alto nivel estetico.",
  },
];

const applications = [
  { title: "Pavimentos industriales", image: epoxyIndustrial, desc: "Suelos resistentes para naves, talleres y almacenes." },
  { title: "Pavimentos decorativos", image: epoxyFloor, desc: "Disenos exclusivos con efectos metalicos y continuidad visual." },
  { title: "Encimeras de epoxi", image: epoxyCountertop, desc: "Superficies unicas para cocinas, banos y barras de diseno." },
  { title: "Arte en resina epoxi", image: epoxyArt, desc: "Creaciones artisticas con profundidad, brillo y color." },
];

const testimonials = [
  {
    name: "Carlos M.",
    role: "Arquitecto de interiores",
    text: "IDP Productos ha sido clave en nuestros proyectos. La calidad de sus resinas eleva cada acabado.",
    rating: 5,
  },
  {
    name: "Laura R.",
    role: "Reformista profesional",
    text: "Los pavimentos decorativos tienen una presencia espectacular y el asesoramiento es muy util.",
    rating: 5,
  },
  {
    name: "Miguel A.",
    role: "Artista de resina",
    text: "Los pigmentos y las resinas cristalinas responden justo como necesitas cuando buscas piezas premium.",
    rating: 5,
  },
];

const Index = () => (
  <Layout>
    <section className="resin-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,193,91,0.16),transparent_28%),radial-gradient(circle_at_70%_35%,rgba(65,223,255,0.14),transparent_22%),linear-gradient(140deg,rgba(7,9,13,0.95),rgba(14,20,31,0.92))]" />
      <div className="absolute inset-y-0 left-[-10%] w-[45%] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-y-0 right-[-8%] w-[38%] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10 grid min-h-[92vh] items-center gap-14 py-20 lg:grid-cols-[1fr_1.05fr] lg:py-10">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-primary animate-fade-in">
            Revestimientos epoxicos premium
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] animate-fade-in-up sm:text-5xl lg:text-7xl">
            La resina como{" "}
            <span className="text-gradient-gold">materia viva</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Soluciones innovadoras en pavimentos decorativos, revestimientos epoxicos y acabados de resina con una presencia visual que convierte la portada en parte de la marca.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-gradient-gold px-8 text-base font-semibold text-primary-foreground hover:opacity-90">
              <Link to="/tienda">Ver productos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/40 px-8 text-base font-semibold text-primary hover:bg-primary/10">
              <Link to="/contacto">Solicitar asesoramiento</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-base font-medium text-muted-foreground hover:text-foreground">
              <Link to="/soluciones">
                Descubrir soluciones <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
            {[
              { value: "Brillo", label: "Efecto visual premium" },
              { value: "Fluidez", label: "Aplicacion y nivelacion" },
              { value: "Resistencia", label: "Acabado duradero" },
            ].map((item) => (
              <div key={item.value} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs text-white/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-cyan-300/10 to-transparent blur-3xl" />
          <ResinHeroCanvas />
        </div>
      </div>
    </section>

    <section className="bg-gradient-dark py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Nuestro catalogo</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Categorias de productos</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Explora nuestra gama de resinas epoxi, revestimientos epoxicos, pavimentos decorativos y soluciones para suelos industriales.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/tienda?cat=${category.slug}`}
              className="group rounded-lg border border-border bg-gradient-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:glow-gold"
            >
              <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary md:text-base">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Por que IDP Productos</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">La diferencia esta en la calidad</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group rounded-lg border border-border bg-gradient-card p-6 text-center transition-all duration-300 hover:border-primary/30">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-dark py-20">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Productos destacados</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Los mas vendidos</h2>
          </div>
          <Button asChild variant="ghost" className="hidden text-primary hover:text-primary/80 md:flex">
            <Link to="/tienda">
              Ver todos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
      <div className="container">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Aplicaciones</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Soluciones para cada proyecto</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Desde pavimentos industriales hasta encimeras de epoxi y arte en resina. Descubre todas las posibilidades.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {applications.map((application) => (
            <Link key={application.title} to="/soluciones" className="group relative aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={application.image}
                alt={application.title}
                loading="lazy"
                width={800}
                height={450}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-1 text-xl font-bold transition-colors group-hover:text-primary">{application.title}</h3>
                <p className="text-sm text-muted-foreground">{application.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-dark py-20">
      <div className="container">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Testimonios</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-lg border border-border bg-gradient-card p-6">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-border py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { value: "500+", label: "Proyectos completados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "15+", label: "Anos de experiencia" },
            { value: "24h", label: "Envio rapido" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Listo para transformar tus espacios?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Nuestro equipo esta preparado para asesorarte en la eleccion de la solucion perfecta para tu proyecto.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-gold px-8 text-base font-semibold text-primary-foreground hover:opacity-90">
            <Link to="/contacto">Solicitar presupuesto</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/40 px-8 text-base font-semibold text-primary hover:bg-primary/10">
            <Link to="/tienda">Explorar productos</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;

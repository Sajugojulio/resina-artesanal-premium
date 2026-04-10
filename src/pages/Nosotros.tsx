import Layout from "@/components/Layout";
import { CheckCircle, Target, Eye, Lightbulb } from "lucide-react";
import aboutImg from "@/assets/epoxy-industrial.jpg";

const values = [
  { icon: Target, title: "Precisión", desc: "Cada producto está formulado con exactitud para ofrecer resultados perfectos en cada aplicación." },
  { icon: Eye, title: "Estética", desc: "Creemos que los acabados funcionales pueden ser también extraordinariamente bellos." },
  { icon: Lightbulb, title: "Innovación", desc: "Investigamos constantemente nuevas fórmulas y tendencias para estar a la vanguardia del sector." },
];

const Nosotros = () => (
  <Layout>
    <section className="py-16 bg-gradient-dark border-b border-border">
      <div className="container text-center">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Sobre nosotros</span>
        <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold">Expertos en revestimientos epóxicos</h1>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden aspect-[4/3]">
            <img src={aboutImg} alt="IDP Productos - Equipo profesional" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Tu socio ideal en el mundo de los revestimientos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IDP Productos nació con una misión clara: democratizar el acceso a soluciones de revestimiento de alta calidad. Nos especializamos en resina epoxi, pavimentos decorativos e industriales, y revestimientos de poliuretano, garantizando calidad, durabilidad y un toque estético único en cada proyecto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Con más de 15 años de experiencia en el sector, nuestro equipo de profesionales ofrece asesoramiento personalizado para encontrar la solución perfecta para cada necesidad, ya seas profesional del sector o particular apasionado por la transformación de espacios.
            </p>
            <ul className="space-y-3">
              {["Asesoramiento técnico especializado", "Productos certificados de alta calidad", "Envío rápido a toda España", "Soporte post-venta personalizado"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Nuestros valores</span>
          <h2 className="mt-3 text-3xl font-display font-bold">Lo que nos define</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-lg bg-gradient-card border border-border text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Nosotros;

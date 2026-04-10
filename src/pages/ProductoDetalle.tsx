import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductoDetalle = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Producto no encontrado</h1>
          <Button asChild><Link to="/tienda">Volver a la tienda</Link></Button>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <Link to="/tienda" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Volver a la tienda
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-card border border-border">
              <img src={product.image} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">{product.category}</span>
              <h1 className="mt-2 text-3xl md:text-4xl font-display font-bold">{product.name}</h1>
              <p className="mt-4 text-4xl font-bold text-gradient-gold">{product.price.toFixed(2)} €</p>
              <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Añadir al carrito
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link to="/contacto"><FileText className="mr-2 h-5 w-5" /> Pedir presupuesto</Link>
                </Button>
              </div>

              {/* Benefits */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Beneficios</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Características técnicas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.specs.map((s, i) => (
                    <div key={i} className="p-3 rounded bg-secondary/50">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-semibold">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Aplicaciones</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center mb-8">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Qué rendimiento tiene este producto?", a: "El rendimiento varía según el tipo de superficie y la aplicación. Consulta la ficha técnica o contacta con nuestro equipo para un cálculo personalizado." },
                { q: "¿Puedo aplicarlo sin experiencia?", a: "Muchos de nuestros productos están diseñados para aplicación DIY. Incluimos instrucciones detalladas y ofrecemos soporte técnico gratuito." },
                { q: "¿Realizan envíos a toda España?", a: "Sí, enviamos a toda la Península en 24-48 horas. Consulta condiciones para Baleares y Canarias." },
              ].map((faq, i) => (
                <div key={i} className="p-5 rounded-lg bg-gradient-card border border-border">
                  <p className="font-semibold text-sm mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-display font-bold mb-8">Productos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductoDetalle;

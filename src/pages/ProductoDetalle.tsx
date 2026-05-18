import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, FileText, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandedTechnicalSheet from "@/components/BrandedTechnicalSheet";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useShop } from "@/context/ShopContext";

const faqs = [
  {
    q: "La ficha ya esta fusionada con la identidad IDP?",
    a: "Si. La ficha ya se presenta dentro de la propia web con cabecera, estructura y acento verde IDP sobre el contenido tecnico del fabricante.",
  },
  {
    q: "Se pueden seguir anadiendo productos nuevos?",
    a: "Si. La estructura ya esta preparada para crecer sin rehacer el formato de ficha tecnica fusionada.",
  },
  {
    q: "Se conserva la base tecnica original?",
    a: "Si. La base tecnica del fabricante se conserva y se presenta ya integrada bajo marca IDP.",
  },
];

const ProductoDetalle = () => {
  const { slug } = useParams();
  const { addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);

  const scrollToSheet = () => {
    document.getElementById("ficha-tecnica-idp")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold">Producto no encontrado</h1>
          <Button asChild>
            <Link to="/tienda">Volver al catalogo</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = products
    .filter((entry) => entry.categorySlug === product.categorySlug && entry.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      <section className="py-8">
        <div className="container">
          <Link to="/tienda" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Volver al catalogo
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg border border-border bg-gradient-card">
                <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-gradient-card p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Linea</p>
                  <p className="mt-2 text-sm text-muted-foreground">{product.line}</p>
                </div>
                <div className="rounded-lg border border-border bg-gradient-card p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Fabricante base</p>
                  <p className="mt-2 text-sm text-muted-foreground">{product.manufacturer}</p>
                </div>
                <div className="rounded-lg border border-border bg-gradient-card p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Marca comercial</p>
                  <p className="mt-2 text-sm text-muted-foreground">{product.brand}</p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Ficha tecnica fusionada</p>
                    <h2 className="mt-3 text-2xl font-bold">La ficha y el boceto ya funcionan como una sola pieza</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Esta referencia ya no separa la etiqueta del contenido tecnico. La ficha completa se presenta con estructura IDP, cabecera propia, acento verde y base tecnica integrada en una sola pieza.
                    </p>
                  </div>
                  <FileText className="mt-1 h-8 w-8 shrink-0 text-emerald-300" />
                </div>

                <div className="mt-5 grid gap-3">
                  <button
                    type="button"
                    onClick={scrollToSheet}
                    className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-background/50 px-4 py-3 transition-colors hover:border-emerald-400/50"
                  >
                    <div>
                      <p className="font-medium text-foreground">Ver ficha tecnica IDP fusionada</p>
                      <p className="text-xs text-muted-foreground">Etiqueta + contenido tecnico integrados en la misma ficha</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{product.category}</span>
              <h1 className="mt-2 text-3xl font-bold md:text-4xl">{product.name}</h1>
              <p className="mt-4 text-2xl font-bold text-gradient-gold">
                {product.price !== undefined ? `${product.price.toFixed(2)} €` : "Presupuesto y ficha bajo consulta"}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-border bg-gradient-card p-5">
                <p className="text-sm font-semibold">Prepara tu consulta</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Anade esta referencia a tu seleccion para pedir presupuesto, soporte documental o asesoramiento tecnico personalizado.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center rounded-md border border-border">
                    <button
                      type="button"
                      className="px-4 py-3 text-muted-foreground hover:text-foreground"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-12 text-center font-medium">{quantity}</span>
                    <button
                      type="button"
                      className="px-4 py-3 text-muted-foreground hover:text-foreground"
                      onClick={() => setQuantity((current) => current + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-gold font-semibold text-primary-foreground hover:opacity-90"
                    onClick={() => addToCart(product.id, quantity)}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Anadir a la seleccion
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10">
                    <Link to={`/contacto?product=${product.slug}`}>
                      <FileText className="mr-2 h-5 w-5" />
                      Pedir presupuesto
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Beneficios clave</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 rounded-md bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Caracteristicas tecnicas</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="rounded-md bg-secondary/40 p-4">
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="mt-1 text-sm font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Aplicaciones recomendadas</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <span key={application} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <BrandedTechnicalSheet product={product} />

          <div className="mx-auto mt-20 max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-lg border border-border bg-gradient-card p-5">
                  <p className="font-semibold">{faq.q}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 text-2xl font-bold">Productos relacionados</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
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

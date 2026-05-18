import { Download, FileBadge2, FileText, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { products } from "@/data/products";

const Documentacion = () => {
  const totalDocs = products.reduce((sum, product) => sum + product.documents.length, 0);

  return (
    <Layout>
      <section className="border-b border-border bg-gradient-dark py-16">
        <div className="container text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Documentacion tecnica</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Fichas tecnicas y material de marca</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Hemos organizado las referencias reales del cliente para que la web funcione ya como catálogo técnico profesional: productos, descargas y una base lista para rehacer las fichas con identidad visual IDP.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <FileText className="h-8 w-8 text-emerald-300" />
            <p className="mt-4 text-3xl font-bold">{totalDocs}</p>
            <p className="mt-2 text-sm text-muted-foreground">Fichas tecnicas enlazadas y preparadas para descarga.</p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <FileBadge2 className="h-8 w-8 text-emerald-300" />
            <p className="mt-4 text-3xl font-bold">{products.length}</p>
            <p className="mt-2 text-sm text-muted-foreground">Referencias reales ya convertidas en catálogo digital utilizable.</p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <Palette className="h-8 w-8 text-emerald-300" />
            <p className="mt-4 text-3xl font-bold">IDP</p>
            <p className="mt-2 text-sm text-muted-foreground">Base lista para pasar a fichas con logo, tipografia y linea verde.</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Biblioteca tecnica</span>
              <h2 className="mt-3 text-3xl font-bold">Descargas por producto</h2>
            </div>
            <Button asChild variant="outline" className="hidden border-primary/30 text-primary hover:bg-primary/10 md:inline-flex">
              <Link to="/tienda">Ir al catalogo</Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <div key={product.id} className="rounded-xl border border-border bg-gradient-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">{product.category}</p>
                    <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{product.shortDescription}</p>
                  </div>
                  <Link to={`/producto/${product.slug}`} className="text-sm font-medium text-primary hover:text-primary/80">
                    Ver producto
                  </Link>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Fabricante base: {product.manufacturer}</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Marca: {product.brand}</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Linea: {product.line}</span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300">Etiqueta IDP implementada</span>
                </div>

                <div className="mt-6 grid gap-3">
                  <Link
                    to={`/producto/${product.slug}#ficha-tecnica-idp`}
                    className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 transition-colors hover:border-emerald-400/50"
                  >
                    <div>
                      <p className="font-medium">Ver ficha tecnica IDP fusionada</p>
                      <p className="text-xs text-muted-foreground">Version web unificada con cabecera y estilo IDP</p>
                    </div>
                    <FileText className="h-4 w-4 text-emerald-300" />
                  </Link>
                  {product.documents.map((document) => (
                    <a
                      key={document.href}
                      href={document.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 transition-colors hover:border-emerald-400/50"
                    >
                      <div>
                        <p className="font-medium">Base tecnica original</p>
                        <p className="text-xs text-muted-foreground">{document.format} · Documento fuente</p>
                      </div>
                      <Download className="h-4 w-4 text-emerald-300" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-dark py-20">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Siguiente fase</span>
            <h2 className="mt-3 text-3xl font-bold">Rebranding documental con identidad IDP</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              La web ya tiene la estructura necesaria para trabajar de forma profesional. El siguiente paso será rehacer cada ficha con nombre comercial propio, logo, dirección, color verde, tipografía consistente y una maquetación lista para enviar a clientes o distribuidores.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <p className="text-sm font-semibold text-emerald-300">Material de referencia</p>
            <div className="mt-4 space-y-3">
              <a href={`${import.meta.env.BASE_URL}technical-sheets/polytec-idp-brand-sample.pdf`} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3 text-sm hover:border-emerald-400/50">
                <span>Muestra PDF Polytec + IDP</span>
                <Download className="h-4 w-4 text-emerald-300" />
              </a>
              <a href={`${import.meta.env.BASE_URL}technical-sheets/etiqueta-boceto-idp.docx`} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3 text-sm hover:border-emerald-400/50">
                <span>Boceto de etiqueta IDP</span>
                <Download className="h-4 w-4 text-emerald-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documentacion;

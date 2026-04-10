import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Tienda = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCat = searchParams.get("cat") || "";
  const [showFilters, setShowFilters] = useState(false);

  const filtered = activeCat ? products.filter((p) => p.categorySlug === activeCat) : products;

  const setCategory = (slug: string) => {
    if (slug) {
      setSearchParams({ cat: slug });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-dark border-b border-border">
        <div className="container text-center">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Catálogo completo</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold">Tienda de resina epoxi</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de resinas epoxi, revestimientos epóxicos, pavimentos decorativos y soluciones profesionales para suelos.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">{filtered.length} productos</p>
            <Button variant="outline" size="sm" className="md:hidden border-border text-muted-foreground" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" /> Filtrar
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar filters */}
            <aside className={`${showFilters ? "fixed inset-0 z-50 bg-background p-6 overflow-y-auto" : "hidden"} md:block md:relative md:w-56 md:shrink-0`}>
              <div className="flex items-center justify-between md:hidden mb-6">
                <h3 className="font-semibold text-lg">Filtros</h3>
                <button onClick={() => setShowFilters(false)}><X className="h-5 w-5" /></button>
              </div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Categorías</h3>
              <div className="space-y-1">
                <button
                  onClick={() => { setCategory(""); setShowFilters(false); }}
                  className={`w-full text-left text-sm px-3 py-2 rounded transition-colors ${!activeCat ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Todos los productos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => { setCategory(cat.slug); setShowFilters(false); }}
                    className={`w-full text-left text-sm px-3 py-2 rounded transition-colors ${activeCat === cat.slug ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tienda;

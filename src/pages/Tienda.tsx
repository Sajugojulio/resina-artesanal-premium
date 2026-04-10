import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

const Tienda = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCat, setActiveCat] = useState("");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("cat") ?? "";
    setActiveCat(categoryFromUrl);
  }, [searchParams]);

  const handleCategoryChange = (categorySlug: string) => {
    setActiveCat(categorySlug);

    if (categorySlug) {
      setSearchParams({ cat: categorySlug });
      return;
    }

    setSearchParams({});
  };

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory = activeCat ? product.categorySlug === activeCat : true;
      const matchesQuery = normalizedQuery
        ? [product.name, product.category, product.shortDescription, ...product.tags]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery)
        : true;

      return matchesCategory && matchesQuery;
    });

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result = [...result].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
        break;
    }

    return result;
  }, [activeCat, query, sortBy]);

  const currentCategory = categories.find((category) => category.slug === activeCat);

  return (
    <Layout>
      <section className="border-b border-border bg-gradient-dark py-16">
        <div className="container text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Catalogo completo</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Tienda de resina epoxi y revestimientos</h1>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            Explora soluciones para pavimentos industriales, pavimentos decorativos, acabados de resina y proyectos de diseno con resina epoxi.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_220px_auto]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Busca resina epoxi, encimeras, pavimentos decorativos..."
                className="h-12 border-border bg-secondary/30 pl-11"
              />
            </div>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-12 rounded-md border border-border bg-secondary/30 px-4 text-sm outline-none transition-colors focus:border-primary"
            >
              <option value="featured">Ordenar por destacados</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name">Nombre</option>
            </select>
            <Button variant="outline" className="border-border lg:hidden" onClick={() => setShowFilters(true)}>
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleCategoryChange("")}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCat === ""
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Todo
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => handleCategoryChange(category.slug)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeCat === category.slug
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-gradient-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Productos</p>
              <p className="mt-2 text-3xl font-bold">{filtered.length}</p>
              <p className="mt-2 text-sm text-muted-foreground">Resultados listos para comparar y guardar en tu seleccion.</p>
            </div>
            <div className="rounded-lg border border-border bg-gradient-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Categoria activa</p>
              <p className="mt-2 text-xl font-semibold">{currentCategory?.name ?? "Todas las categorias"}</p>
              <p className="mt-2 text-sm text-muted-foreground">Filtra segun el tipo de sistema o aplicacion que necesites.</p>
            </div>
            <div className="rounded-lg border border-border bg-gradient-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Asesoramiento</p>
              <p className="mt-2 text-xl font-semibold">Guiamos tu eleccion</p>
              <p className="mt-2 text-sm text-muted-foreground">Selecciona productos y pide presupuesto con contexto tecnico desde la web.</p>
            </div>
          </div>

          <div className="mt-10 flex gap-8">
            <aside
              className={`${showFilters ? "fixed inset-0 z-50 block bg-background p-6" : "hidden"} lg:sticky lg:top-28 lg:block lg:h-fit lg:w-72 lg:shrink-0 lg:rounded-lg lg:border lg:border-border lg:bg-gradient-card lg:p-6`}
            >
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <h2 className="text-lg font-semibold">Filtros</h2>
                <button type="button" onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Categorias</p>
                <div className="mt-4 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => {
                        handleCategoryChange(category.slug);
                        setShowFilters(false);
                      }}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        activeCat === category.slug
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-border bg-secondary/30 p-4">
                <p className="text-sm font-semibold">Proyectos que cubrimos</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Revestimientos epoxicos para industria</li>
                  <li>Suelos decorativos y continuos</li>
                  <li>Encimeras y mobiliario</li>
                  <li>Arte y detalles decorativos con resina</li>
                </ul>
              </div>

              <Button asChild className="mt-6 w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
                <a href="/contacto">Solicitar ayuda tecnica</a>
              </Button>
            </aside>

            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border px-6 py-14 text-center">
                  <h2 className="text-2xl font-bold">No hemos encontrado coincidencias</h2>
                  <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                    Prueba otra categoria o una busqueda mas general como "resina epoxi", "pavimentos decorativos" o "encimeras de epoxi".
                  </p>
                  <Button
                    className="mt-6 bg-gradient-gold text-primary-foreground hover:opacity-90"
                    onClick={() => {
                      handleCategoryChange("");
                      setQuery("");
                      setSortBy("featured");
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tienda;

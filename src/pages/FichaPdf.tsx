import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import BrandedTechnicalSheet from "@/components/BrandedTechnicalSheet";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const FichaPdf = () => {
  const { slug } = useParams();
  const product = products.find((entry) => entry.slug === slug);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.print();
    }, 500);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!product) {
    return (
      <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold">Ficha no encontrada</h1>
          <Button asChild className="mt-6">
            <Link to="/tienda">Volver al catalogo</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7f5] px-4 py-8 text-slate-900 md:px-8 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto mb-6 flex max-w-6xl flex-wrap items-center justify-between gap-3 print:hidden">
        <Button asChild variant="outline">
          <Link to={`/producto/${product.slug}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al producto
          </Link>
        </Button>
        <Button type="button" className="bg-emerald-700 hover:bg-emerald-800" onClick={() => window.print()}>
          <Download className="mr-2 h-4 w-4" />
          Guardar como PDF
        </Button>
      </div>

      <div className="mx-auto max-w-6xl print:max-w-none">
        <BrandedTechnicalSheet product={product} standalone />
      </div>
    </main>
  );
};

export default FichaPdf;

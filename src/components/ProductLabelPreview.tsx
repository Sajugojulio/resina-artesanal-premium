import { Printer, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductLabelData, type Product } from "@/data/products";

const ProductLabelPreview = ({ product }: { product: Product }) => {
  const label = getProductLabelData(product);

  return (
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Etiqueta IDP implementada</p>
          <h2 className="mt-3 text-2xl font-bold">Boceto aplicado a esta ficha</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Esta vista traslada el boceto de etiqueta a una version coherente para cada referencia del catalogo. Mantiene la estructura de lote, kilos y fecha, y ya se apoya en la identidad verde que quiere el cliente.
          </p>
        </div>
        <Button type="button" variant="outline" className="border-emerald-400/40 text-emerald-200 hover:bg-emerald-500/10" onClick={() => window.print()}>
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-400/30 bg-white text-slate-900 shadow-2xl shadow-emerald-950/20">
        <div className="flex items-center justify-between bg-emerald-700 px-6 py-4 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">IDP Productos</p>
            <h3 className="mt-2 text-2xl font-black tracking-[0.08em]">{label.commercialName}</h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10">
            <Tag className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-5 px-6 py-6">
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">{label.componentLabel}</p>
              <p className="mt-2 text-base font-semibold leading-snug">{label.componentValue}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{label.systemLabel}</p>
              <p className="mt-2 text-base font-semibold leading-snug">{label.systemValue}</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{label.manufacturerLabel}</p>
            <p className="mt-2 text-base font-semibold">{label.manufacturerValue}</p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              { name: "Lote", value: "................................" },
              { name: "Kg", value: "................................" },
              { name: "Fecha de fabricacion", value: "................................" },
            ].map((field) => (
              <div key={field.name} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{field.name}</p>
                <p className="mt-4 text-sm text-slate-500">{field.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-4">
            <p className="text-sm font-bold text-emerald-800">{label.companyName}</p>
            {label.companyAddress.map((line) => (
              <p key={line} className="mt-1 text-sm text-slate-600">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLabelPreview;

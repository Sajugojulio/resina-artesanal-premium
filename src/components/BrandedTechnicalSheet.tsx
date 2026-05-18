import { Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicalSheets from "@/data/technicalSheets.generated.json";
import { getProductLabelData, type Product } from "@/data/products";

interface SheetBlockParagraph {
  type: "paragraph";
  text: string;
}

interface SheetBlockTable {
  type: "table";
  rows: string[][];
}

interface SheetSection {
  title: string;
  blocks: Array<SheetBlockParagraph | SheetBlockTable>;
}

const isBulletLike = (text: string) => {
  if (text.length > 120) {
    return false;
  }

  return !/[.:;]/.test(text) || /^[A-ZÁÉÍÓÚÑ0-9][^:]+$/.test(text);
};

const renderTable = (rows: string[][], title: string) => {
  const maxColumns = rows.reduce((max, row) => Math.max(max, row.length), 0);
  const normalizedRows = rows.map((row) => [...row, ...Array(Math.max(0, maxColumns - row.length)).fill("")]);
  const [header, ...body] = normalizedRows;
  const hasComplexHeader = header.some((cell, index) => index > 0 && cell === header[0]);
  const effectiveHeader = hasComplexHeader && body.length > 0 ? body[0] : header;
  const effectiveBody = hasComplexHeader && body.length > 0 ? body.slice(1) : body;

  return (
    <div className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white/70">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-emerald-700 text-white">
            <tr>
              {effectiveHeader.map((cell, index) => (
                <th key={`${title}-head-${index}`} className="border border-emerald-800/30 px-3 py-3 text-left font-semibold">
                  {cell || "Dato"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {effectiveBody.map((row, rowIndex) => (
              <tr key={`${title}-row-${rowIndex}`} className={rowIndex % 2 === 0 ? "bg-white" : "bg-emerald-50/45"}>
                {row.map((cell, cellIndex) => (
                  <td key={`${title}-cell-${rowIndex}-${cellIndex}`} className="border border-slate-200 px-3 py-3 align-top text-slate-700">
                    {cell || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BrandedTechnicalSheet = ({ product, standalone = false }: { product: Product; standalone?: boolean }) => {
  const label = getProductLabelData(product);
  const sections = (technicalSheets as Record<string, SheetSection[]>)[product.slug] ?? [];
  const sourceDocument = product.documents[0];
  const pdfHref = `${import.meta.env.BASE_URL}#/producto/${product.slug}/ficha-pdf`;
  const logoHref = `${import.meta.env.BASE_URL}branding/idp-logo-boceto.png`;
  const heroHighlights = [...product.benefits.slice(0, 5), ...product.applications.slice(0, 3)];

  return (
    <section id="ficha-tecnica-idp" className={standalone ? "" : "mt-20"}>
      {!standalone && (
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Ficha tecnica IDP</p>
            <h2 className="mt-3 text-3xl font-bold">Ficha fusionada con identidad visual propia</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Esta ficha ya integra la base técnica del fabricante dentro de una presentación IDP: cabecera de etiqueta, nombre comercial, línea, fabricante base y contenido técnico maquetado con el acento verde pedido por el cliente.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {sourceDocument && (
              <Button asChild variant="outline" className="border-emerald-400/30 text-emerald-200 hover:bg-emerald-500/10">
                <a href={sourceDocument.href} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Base original
                </a>
              </Button>
            )}
            <Button asChild variant="outline" className="border-emerald-400/30 text-emerald-200 hover:bg-emerald-500/10">
              <a href={pdfHref} target="_blank" rel="noreferrer">
                <Printer className="mr-2 h-4 w-4" />
                Descargar PDF
              </a>
            </Button>
          </div>
        </div>
      )}

      <div className="relative overflow-hidden rounded-[28px] border border-emerald-500/20 bg-white text-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-y-0 right-0 w-7 bg-emerald-500" />

        <div className="px-10 py-12 md:px-16 md:py-16">
          <div className="max-w-[calc(100%-2.5rem)]">
            <div className="flex justify-start">
              <img src={logoHref} alt="Logo IDP Iberica" className="h-32 w-auto object-contain md:h-36" />
            </div>

            <div className="mt-10 border-t border-slate-300" />

            <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] xl:gap-14">
              <div className="max-w-5xl">
                <p className="max-w-4xl text-5xl font-black tracking-tight text-emerald-600 [text-wrap:balance] md:text-7xl">
                  {product.name}
                </p>
                <h3 className="mt-5 max-w-4xl text-2xl font-black leading-[1.08] text-slate-900 [text-wrap:balance] md:text-[3.15rem]">
                  {product.shortDescription}
                </h3>

                <div className="mt-10 border-t border-slate-300 pt-8">
                  <ul className="max-w-4xl space-y-4 text-lg leading-[1.32] text-slate-800 md:text-[1.8rem]">
                    {heroHighlights.map((item) => (
                      <li key={item} className="pr-4 [text-wrap:balance]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="space-y-5">
                  <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 px-6 py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">{label.systemLabel}</p>
                    <p className="mt-3 text-lg font-semibold leading-snug text-slate-900 [text-wrap:balance]">{label.systemValue}</p>
                  </div>
                  <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 px-6 py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">{label.manufacturerLabel}</p>
                    <p className="mt-3 text-lg font-semibold leading-snug text-slate-900 [text-wrap:balance]">{label.manufacturerValue}</p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Distribucion y soporte tecnico</p>
                  <div className="mt-4 text-sm leading-6 text-slate-700">
                    <p className="font-bold text-slate-900">{label.companyName}</p>
                    {label.companyAddress.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-slate-300 pt-8">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { title: "Lote", value: "................................" },
                  { title: "Kg", value: "................................" },
                  { title: "Fecha de fabricacion", value: "................................" },
                ].map((field) => (
                  <div key={field.title} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{field.title}</p>
                    <p className="mt-4 text-sm text-slate-500">{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 md:px-12 md:pb-12">
          <div className="mb-8 flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-emerald-50 px-5 py-4">
            <FileText className="h-5 w-5 text-emerald-700" />
            <p className="text-sm text-slate-700">
              Ficha técnica comercializada por <span className="font-semibold text-slate-900">IDP Iberica S.L.</span> sobre base técnica del fabricante <span className="font-semibold text-slate-900">{product.manufacturer}</span>.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => {
              const paragraphBlocks = section.blocks.filter((block): block is SheetBlockParagraph => block.type === "paragraph");
              const tableBlocks = section.blocks.filter((block): block is SheetBlockTable => block.type === "table");
              const bulletish = paragraphBlocks.length > 1 && paragraphBlocks.every((block) => isBulletLike(block.text));

              return (
                <section key={section.title} className="space-y-5">
                  <div className="border-b border-emerald-900/10 pb-3">
                    <h4 className="text-xl font-bold text-emerald-900">{section.title}</h4>
                  </div>

                  {paragraphBlocks.length > 0 && !bulletish && (
                    <div className="space-y-4">
                      {paragraphBlocks.map((block, index) => (
                        <p key={`${section.title}-p-${index}`} className="leading-7 text-slate-700">
                          {block.text}
                        </p>
                      ))}
                    </div>
                  )}

                  {bulletish && (
                    <ul className="grid gap-3 md:grid-cols-2">
                      {paragraphBlocks.map((block, index) => (
                        <li key={`${section.title}-li-${index}`} className="rounded-2xl border border-emerald-900/10 bg-emerald-50/55 px-4 py-3 text-sm leading-6 text-slate-700">
                          {block.text}
                        </li>
                      ))}
                    </ul>
                  )}

                  {tableBlocks.map((block, index) => (
                    <div key={`${section.title}-table-${index}`}>{renderTable(block.rows, `${section.title}-${index}`)}</div>
                  ))}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandedTechnicalSheet;

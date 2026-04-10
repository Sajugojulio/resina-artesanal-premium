import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { useToast } from "@/hooks/use-toast";

const whatsappNumber = "34900000000";
const contactEmail = "info@idpproductos.com";

const contactInfo = [
  { icon: Mail, label: "Email", value: contactEmail },
  { icon: Phone, label: "Telefono", value: "+34 900 000 000" },
  { icon: MapPin, label: "Cobertura", value: "Asesoramiento y envio en toda Espana" },
  { icon: Clock, label: "Horario", value: "Lunes a viernes · 09:00 a 18:00" },
];

const Contacto = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { cart, buildQuoteMessage, cartSubtotal, clearCart } = useShop();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const selectedProduct = useMemo(() => {
    const productSlug = searchParams.get("product");
    return productSlug ? products.find((product) => product.slug === productSlug) : undefined;
  }, [searchParams]);

  useEffect(() => {
    const source = searchParams.get("source");

    if (selectedProduct) {
      setForm((current) => ({
        ...current,
        subject: current.subject || `Presupuesto para ${selectedProduct.name}`,
        message:
          current.message ||
          `Hola, me gustaria recibir informacion y presupuesto para ${selectedProduct.name}. Mi proyecto esta relacionado con ${selectedProduct.applications[0].toLowerCase()}.`,
      }));
      return;
    }

    if (source === "cart" && cart.length > 0) {
      setForm((current) => ({
        ...current,
        subject: current.subject || "Solicitud de presupuesto para mi seleccion",
        message: current.message || buildQuoteMessage(),
      }));
    }
  }, [buildQuoteMessage, cart.length, searchParams, selectedProduct]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Telefono: ${form.phone || "No indicado"}`,
      "",
      form.message,
    ].join("\n");

    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );

    toast({
      title: "Solicitud preparada",
      description: "Hemos abierto tu gestor de correo con el mensaje listo para enviar.",
    });
  };

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(form.message || buildQuoteMessage())}`;

  return (
    <Layout>
      <section className="border-b border-border bg-gradient-dark py-16">
        <div className="container text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contacto</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Hablemos de tu proyecto</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Te ayudamos a elegir la solucion mas adecuada en resina epoxi, pavimentos decorativos y revestimientos profesionales.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Informacion de contacto</h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-gradient-card p-6">
                <p className="text-sm font-semibold text-primary">Asesoramiento tecnico</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Si estas comparando sistemas o no tienes claro el acabado, te ayudamos a definir una solucion viable segun soporte, uso y estetica.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                    <a href={`mailto:${contactEmail}`}>Escribir por email</a>
                  </Button>
                  <Button asChild className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {(selectedProduct || cart.length > 0) && (
                <div className="rounded-lg border border-border bg-secondary/30 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Contexto preparado</p>
                  {selectedProduct ? (
                    <>
                      <h3 className="mt-2 text-lg font-semibold">{selectedProduct.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Hemos precargado la consulta para que pidas informacion sobre este producto concreto.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-2 text-lg font-semibold">Seleccion de productos activa</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Tienes {cart.length} referencias guardadas con un subtotal estimado de {cartSubtotal.toFixed(2)} €.
                      </p>
                      <Button variant="ghost" className="mt-3 px-0 text-primary hover:bg-transparent" onClick={clearCart}>
                        Vaciar seleccion
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-xl border border-border bg-gradient-card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Nombre *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder="Tu nombre"
                      className="border-border bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Email *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      placeholder="tu@email.com"
                      className="border-border bg-secondary/50"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Telefono</label>
                    <Input
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      placeholder="+34 600 000 000"
                      className="border-border bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Asunto *</label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(event) => setForm({ ...form, subject: event.target.value })}
                      placeholder="Presupuesto, consulta tecnica, producto..."
                      className="border-border bg-secondary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Mensaje *</label>
                  <Textarea
                    required
                    rows={7}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Cuentanos que superficie quieres tratar, el acabado que buscas y cualquier duda tecnica."
                    className="border-border bg-secondary/50"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button type="submit" size="lg" className="bg-gradient-gold px-12 font-semibold text-primary-foreground hover:opacity-90">
                    Preparar email
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10">
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      Enviar por WhatsApp
                    </a>
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-xs text-muted-foreground">
                Este formulario prepara el mensaje en tu cliente de correo o WhatsApp para que puedas enviarlo al instante.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-xl border border-border bg-gradient-dark p-8 text-center">
            <h2 className="text-2xl font-bold">Tambien podemos orientarte por aplicaciones</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Si aun no sabes que producto elegir, revisa nuestras soluciones por uso y despues vuelve aqui con mas contexto.
            </p>
            <Button asChild className="mt-6 bg-gradient-gold text-primary-foreground hover:opacity-90">
              <Link to="/soluciones">Ver soluciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;

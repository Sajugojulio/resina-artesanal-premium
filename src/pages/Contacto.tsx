import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@idpproductos.com" },
  { icon: Phone, label: "Teléfono", value: "+34 900 000 000" },
  { icon: MapPin, label: "Ubicación", value: "España" },
  { icon: Clock, label: "Horario", value: "Lun - Vie: 9:00 - 18:00" },
];

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo lo antes posible." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-dark border-b border-border">
        <div className="container text-center">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Contacto</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold">Hablemos de tu proyecto</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Te ayudamos a elegir la solución de revestimiento perfecta. Solicita asesoramiento personalizado sin compromiso.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold mb-6">Información de contacto</h2>
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-10 p-6 rounded-lg bg-gradient-card border border-border">
                <h3 className="text-sm font-semibold text-primary mb-2">¿Necesitas asesoramiento técnico?</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestro equipo de expertos en revestimientos epóxicos y pavimentos decorativos está disponible para resolver todas tus dudas.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Nombre *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Teléfono</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Asunto *</label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Presupuesto, consulta técnica..."
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Mensaje *</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntanos sobre tu proyecto, qué solución necesitas, superficie a tratar..."
                    rows={6}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 w-full sm:w-auto px-12">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;

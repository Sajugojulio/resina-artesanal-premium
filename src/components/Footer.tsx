import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold font-display text-gradient-gold">IDP</span>
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Productos</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tu socio ideal en revestimientos epóxicos, pavimentos decorativos y soluciones de resina epoxi de máxima calidad.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-sans">Productos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tienda?cat=resina-epoxi" className="hover:text-foreground transition-colors">Resina Epoxi</Link></li>
            <li><Link to="/tienda?cat=revestimientos-epoxicos" className="hover:text-foreground transition-colors">Revestimientos Epóxicos</Link></li>
            <li><Link to="/tienda?cat=pavimentos-decorativos" className="hover:text-foreground transition-colors">Pavimentos Decorativos</Link></li>
            <li><Link to="/tienda?cat=revestimientos-poliuretano" className="hover:text-foreground transition-colors">Poliuretano</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-sans">Empresa</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/nosotros" className="hover:text-foreground transition-colors">Sobre nosotros</Link></li>
            <li><Link to="/soluciones" className="hover:text-foreground transition-colors">Soluciones</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-sans">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>info@idpproductos.com</li>
            <li>+34 900 000 000</li>
            <li>Lun - Vie: 9:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 IDP Productos. Todos los derechos reservados.</span>
        <div className="flex gap-6">
          <span className="hover:text-foreground cursor-pointer transition-colors">Política de privacidad</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Términos y condiciones</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Aviso legal</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

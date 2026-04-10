import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartSheet from "./CartSheet";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Tienda", to: "/tienda" },
  { label: "Soluciones", to: "/soluciones" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gradient-gold">IDP</span>
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Productos</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <CartSheet />
          <Button asChild size="sm" className="bg-gradient-gold font-semibold text-primary-foreground hover:opacity-90">
            <Link to="/contacto">Pedir presupuesto</Link>
          </Button>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-base font-medium transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <CartSheet />
              <Button asChild className="mt-2 flex-1 bg-gradient-gold font-semibold text-primary-foreground">
                <Link to="/contacto" onClick={() => setOpen(false)}>
                  Pedir presupuesto
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

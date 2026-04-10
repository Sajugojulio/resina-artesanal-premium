import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-display text-gradient-gold">IDP</span>
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Productos</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button size="sm" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
            Pedir presupuesto
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 bg-gradient-gold text-primary-foreground font-semibold">
              Pedir presupuesto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Tienda from "./pages/Tienda";
import ProductoDetalle from "./pages/ProductoDetalle";
import Nosotros from "./pages/Nosotros";
import Soluciones from "./pages/Soluciones";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import { ShopProvider } from "./context/ShopContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ShopProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/producto/:slug" element={<ProductoDetalle />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/soluciones" element={<Soluciones />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ShopProvider>
  </QueryClientProvider>
);

export default App;

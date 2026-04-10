import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { products } from "@/data/products";
import { useShop } from "@/context/ShopContext";

const CartSheet = () => {
  const { cart, cartCount, cartSubtotal, updateQuantity, removeFromCart, clearCart } = useShop();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary">
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full border-border bg-card sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Tu selección</SheetTitle>
          <SheetDescription>
            Revisa productos, ajusta cantidades y solicita presupuesto cuando quieras.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex h-[calc(100%-7rem)] flex-col">
          {cart.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-border px-6 text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Todavía no has añadido productos</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Guarda aquí tus resinas, pavimentos y acabados favoritos para preparar una consulta o pedido.
              </p>
              <Button asChild className="mt-6 bg-gradient-gold text-primary-foreground hover:opacity-90">
                <Link to="/tienda">Ir a la tienda</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 overflow-y-auto pr-2">
                {cart.map((item) => {
                  const product = products.find((entry) => entry.id === item.productId);
                  if (!product) {
                    return null;
                  }

                  return (
                    <div key={item.productId} className="rounded-lg border border-border bg-secondary/30 p-4">
                      <div className="flex gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-20 w-20 rounded-md object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs uppercase tracking-[0.2em] text-primary">{product.category}</p>
                          <Link to={`/producto/${product.slug}`} className="mt-1 block font-semibold hover:text-primary">
                            {product.name}
                          </Link>
                          <p className="mt-2 text-sm text-muted-foreground">{product.price.toFixed(2)} €</p>
                          <div className="mt-3 flex items-center justify-between gap-3">
                            <div className="flex items-center rounded-md border border-border">
                              <button
                                type="button"
                                className="px-3 py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="min-w-10 text-center text-sm font-medium">{item.quantity}</span>
                              <button
                                type="button"
                                className="px-3 py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <button
                              type="button"
                              className="text-muted-foreground transition-colors hover:text-destructive"
                              onClick={() => removeFromCart(item.productId)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal estimado</span>
                  <span className="text-lg font-bold text-gradient-gold">{cartSubtotal.toFixed(2)} €</span>
                </div>
                <p className="mb-4 text-xs text-muted-foreground">
                  El carrito funciona como lista de selección para preparar presupuesto o consulta técnica.
                </p>
                <div className="flex gap-3">
                  <Button asChild className="flex-1 bg-gradient-gold text-primary-foreground hover:opacity-90">
                    <Link to="/contacto?source=cart">Solicitar presupuesto</Link>
                  </Button>
                  <Button variant="outline" className="border-border" onClick={clearCart}>
                    Vaciar
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;

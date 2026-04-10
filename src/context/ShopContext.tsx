import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products } from "@/data/products";

export interface CartItem {
  productId: string;
  quantity: number;
}

interface ShopContextValue {
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  buildQuoteMessage: () => string;
}

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

const STORAGE_KEY = "idp-productos-cart";

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId: string, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...current, { productId, quantity }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((current) => current.filter((item) => item.productId !== productId));
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const cartSubtotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const product = products.find((entry) => entry.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
      }, 0),
    [cart],
  );

  const buildQuoteMessage = () => {
    if (cart.length === 0) {
      return "Hola, me gustaría recibir asesoramiento sobre soluciones de resina epoxi para mi proyecto.";
    }

    const lines = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId);
        if (!product) {
          return null;
        }

        return `- ${product.name} x${item.quantity}`;
      })
      .filter(Boolean);

    return `Hola, me gustaría solicitar presupuesto y asesoramiento para los siguientes productos:\n${lines.join("\n")}\n\nTambién agradecería recomendaciones sobre el sistema más adecuado para mi proyecto.`;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        buildQuoteMessage,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used within ShopProvider");
  }

  return context;
};

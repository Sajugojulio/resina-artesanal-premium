import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useShop();

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-gradient-card transition-all duration-500 hover:border-primary/30 hover:glow-gold">
      <Link to={`/producto/${product.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-primary">{product.category}</span>
        <Link to={`/producto/${product.slug}`} className="mt-2 block">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gradient-gold">{product.price.toFixed(2)} €</span>
          <Link
            to={`/producto/${product.slug}`}
            className="flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100"
          >
            Ver más <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-4 flex gap-3">
          <Button
            className="flex-1 bg-gradient-gold text-primary-foreground hover:opacity-90"
            onClick={() => addToCart(product.id)}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Añadir
          </Button>
          <Button asChild variant="outline" className="border-border">
            <Link to={`/producto/${product.slug}`}>Ficha</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

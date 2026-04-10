import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/producto/${product.slug}`}
    className="group bg-gradient-card rounded-lg border border-border hover:border-primary/30 overflow-hidden transition-all duration-500 hover:glow-gold"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <span className="text-xs font-medium tracking-wider uppercase text-primary">{product.category}</span>
      <h3 className="mt-2 text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-bold text-gradient-gold">{product.price.toFixed(2)} €</span>
        <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Ver más <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  </Link>
);

export default ProductCard;

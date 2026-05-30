import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/shop/${product.id}`}
      className="group relative block overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-brand/50 hover:shadow-glow"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[-6deg]"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-brand text-brand-foreground rounded">
            {product.badge}
          </span>
        )}
        <button
          aria-label="Adicionar ao carrinho"
          onClick={(e) => { e.preventDefault(); }}
          className="absolute bottom-3 right-3 w-10 h-10 grid place-items-center rounded-full bg-foreground text-background translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand hover:text-brand-foreground"
        >
          <Plus className="w-5 h-5" />
        </button>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 font-display text-lg tracking-wide leading-tight">{product.name}</h3>
        {product.colorway && (
          <p className="mt-0.5 text-xs text-muted-foreground">{product.colorway}</p>
        )}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-xl text-foreground">R$ {product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">R$ {product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

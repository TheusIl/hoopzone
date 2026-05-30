import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, ShoppingBag, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const [size, setSize] = useState<number | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    document.title = product ? `${product.name} — HOOPZONE` : "Produto não encontrado — HOOPZONE";
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20 text-center">
        <h1 className="font-display text-5xl mb-4">Produto não encontrado</h1>
        <Link to="/shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand text-brand-foreground font-bold uppercase tracking-widest text-sm">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  const gallery = [product.image, product.image, product.image, product.image];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 lg:py-12">
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-foreground">Loja</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground truncate">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-[100px_1fr_1fr] gap-6 lg:gap-10">
        <div className="hidden lg:flex flex-col gap-3">
          {gallery.map((g, i) => (
            <button key={i} onClick={() => setImgIdx(i)} className={`aspect-square rounded-lg overflow-hidden border-2 ${imgIdx === i ? "border-brand" : "border-border"}`}>
              <img src={g} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
          <img src={gallery[imgIdx]} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-brand text-brand-foreground rounded">{product.badge}</span>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-brand font-bold mb-2">{product.category}</p>
          <h1 className="font-display text-5xl lg:text-6xl tracking-tight leading-none">{product.name}</h1>
          {product.colorway && <p className="mt-2 text-sm text-muted-foreground">Colorway: {product.colorway}</p>}

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl">R$ {product.price}</span>
            {product.originalPrice && <span className="text-muted-foreground line-through">R$ {product.originalPrice}</span>}
          </div>
          <p className="text-xs text-muted-foreground mt-1">ou 10x de R$ {(product.price / 10).toFixed(2)} sem juros</p>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-widest">Tamanho</h3>
              <button className="text-xs text-muted-foreground hover:text-foreground underline">Guia de tamanhos</button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {[38, 39, 40, 41, 42, 43, 44, 45].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`py-3 rounded-md border text-sm font-medium transition-all ${size === s ? "border-brand bg-brand text-brand-foreground" : "border-border hover:border-foreground"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-md bg-brand text-brand-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-glow transition-colors shadow-glow">
              <ShoppingBag className="w-4 h-4" /> Adicionar ao carrinho
            </button>
            <button aria-label="Favoritar" className="w-14 grid place-items-center rounded-md border border-border hover:border-brand hover:text-brand transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 space-y-3 text-sm">
            <p className="text-muted-foreground leading-relaxed">
              Performance e estilo para dentro e fora da quadra. Cabedal premium, sistema de amortecimento responsivo e construção feita para durar.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border">
            {[{ Icon: Truck, label: "Frete grátis", sub: "acima de R$ 499" }, { Icon: RotateCcw, label: "30 dias", sub: "para troca" }, { Icon: Shield, label: "Garantia", sub: "oficial" }].map((b) => (
              <div key={b.label} className="text-center">
                <b.Icon className="w-5 h-5 mx-auto text-brand mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest">{b.label}</p>
                <p className="text-[10px] text-muted-foreground">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-display text-4xl tracking-tight mb-8">Você também vai curtir</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}

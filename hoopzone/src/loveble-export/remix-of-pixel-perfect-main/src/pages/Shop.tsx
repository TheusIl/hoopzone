import { useEffect, useState, useMemo } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/data";

export default function Shop() {
  const [cat, setCat] = useState<string>("Todos");
  const [sort, setSort] = useState<"new" | "low" | "high">("new");
  const [openFilters, setOpenFilters] = useState(false);

  useEffect(() => {
    document.title = "Loja — HOOPZONE";
  }, []);

  const list = useMemo(() => {
    const f = cat === "Todos" ? products : products.filter((p) => p.category === cat);
    if (sort === "low") return [...f].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...f].sort((a, b) => b.price - a.price);
    return f;
  }, [cat, sort]);

  return (
    <div>
      <header className="relative border-b border-border bg-hero grain overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <p className="text-xs uppercase tracking-widest text-brand font-bold mb-3">Catálogo</p>
          <h1 className="font-display text-6xl lg:text-8xl tracking-tight">Loja</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">Tênis, jerseys, moletons e acessórios — direto da quadra para o asfalto.</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-16 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className={`${openFilters ? "fixed inset-0 z-40 bg-background p-6 overflow-auto" : "hidden"} lg:block lg:static lg:p-0`}>
          {openFilters && (
            <button onClick={() => setOpenFilters(false)} className="lg:hidden mb-4 flex items-center gap-2 text-sm"><X className="w-4 h-4" /> Fechar</button>
          )}
          <div className="space-y-8">
            <FilterGroup title="Categorias">
              <FilterItem label="Todos" active={cat === "Todos"} onClick={() => setCat("Todos")} count={products.length} />
              {categories.map((c) => (
                <FilterItem key={c} label={c} active={cat === c} onClick={() => setCat(c)} count={products.filter((p) => p.category === c).length} />
              ))}
            </FilterGroup>
            <FilterGroup title="Ordenar">
              <FilterItem label="Novos" active={sort === "new"} onClick={() => setSort("new")} />
              <FilterItem label="Menor preço" active={sort === "low"} onClick={() => setSort("low")} />
              <FilterItem label="Maior preço" active={sort === "high"} onClick={() => setSort("high")} />
            </FilterGroup>
            <FilterGroup title="Tamanho">
              <div className="grid grid-cols-4 gap-2">
                {[38, 39, 40, 41, 42, 43, 44, 45].map((s) => (
                  <button key={s} className="py-2 rounded-md border border-border text-sm hover:border-brand hover:text-brand transition-colors">{s}</button>
                ))}
              </div>
            </FilterGroup>
            <FilterGroup title="Cor">
              <div className="flex flex-wrap gap-2">
                {["#e11d2e", "#000", "#fff", "#1a1a1a", "#ff4d6d", "#3b82f6"].map((c) => (
                  <button key={c} aria-label={c} className="w-8 h-8 rounded-full border-2 border-border hover:border-brand transition-colors" style={{ background: c }} />
                ))}
              </div>
            </FilterGroup>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground"><span className="text-foreground font-bold">{list.length}</span> produtos</p>
            <button onClick={() => setOpenFilters(true)} className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm">
              <SlidersHorizontal className="w-4 h-4" /> Filtros
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {list.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-lg tracking-wider mb-3">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterItem({ label, active, onClick, count }: { label: string; active?: boolean; onClick: () => void; count?: number }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${active ? "bg-brand text-brand-foreground" : "hover:bg-secondary text-muted-foreground hover:text-foreground"}`}>
      <span>{label}</span>
      {count !== undefined && <span className="text-xs opacity-70">{count}</span>}
    </button>
  );
}

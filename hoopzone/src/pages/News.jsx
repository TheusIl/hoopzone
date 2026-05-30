import { useEffect } from "react";
import playerImg from "@/assets/player-1.jpg";
import courtBg from "@/assets/court-bg.jpg";

const newsList = [
  { id: 1, tag: "NBA", time: "há 2h", title: "Bulls vencem clássico na prorrogação e voltam ao top 4 do Leste", excerpt: "Jogo dramático com decisão nos segundos finais." },
  { id: 2, tag: "Drop", time: "há 5h", title: "Air Zone 1 'Bred' chega em edição limitada — só 500 pares", excerpt: "O drop mais aguardado do ano finalmente tem data." },
  { id: 3, tag: "Highlights", time: "há 8h", title: "Top 10 enterradas da semana — quem ficou em #1?", excerpt: "Os melhores momentos votados pelos fãs." },
  { id: 4, tag: "Análise", time: "há 1d", title: "MVP Race: novo líder assume após semana histórica", excerpt: "Análise estatística de quem está dominando a temporada." },
  { id: 5, tag: "Cultura", time: "há 1d", title: "Streetwear basquete: como o estilo dos jogadores virou cultura", excerpt: "Do tunnel walk para as ruas." },
  { id: 6, tag: "Trade", time: "há 2d", title: "Movimentações sacudiram a deadline — confira o resumo", excerpt: "Quem ganhou e quem perdeu nas trocas." },
];

export default function News() {
  const [feature, ...rest] = newsList;

  useEffect(() => {
    document.title = "Notícias — HOOPZONE";
  }, []);

  return (
    <div>
      <header className="relative border-b border-border bg-hero grain overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <p className="text-xs uppercase tracking-widest text-brand font-bold mb-3">Atualizado em tempo real</p>
          <h1 className="font-display text-6xl lg:text-8xl tracking-tight">Notícias</h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-16">
        <article className="group relative overflow-hidden rounded-2xl border border-border min-h-[460px] mb-10">
          <img src={playerImg} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 max-w-3xl">
            <span className="inline-block px-2.5 py-1 rounded-full bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest mb-4">{feature.tag} · {feature.time}</span>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight leading-tight">{feature.title}</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">{feature.excerpt}</p>
          </div>
        </article>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {rest.map((n) => (
            <a key={n.id} href="#" className="group rounded-xl border border-border bg-card overflow-hidden hover:border-brand/40 transition-all">
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${courtBg})` }} />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-3">
                  <span className="text-brand font-bold">{n.tag}</span>
                  <span className="text-muted-foreground">{n.time}</span>
                </div>
                <h3 className="font-display text-xl tracking-wide leading-snug group-hover:text-brand transition-colors">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{n.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

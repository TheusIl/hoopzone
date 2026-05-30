import { useEffect, useState } from "react";
import { Play, Flame } from "lucide-react";
import { GameCard } from "@/components/GameCard";
import { games } from "@/lib/data";
import courtBg from "@/assets/court-bg.jpg";

type Tab = "live" | "upcoming" | "final";

export default function Games() {
  const [tab, setTab] = useState<Tab>("live");
  const list = games.filter((g) => g.status === tab);
  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "live", label: "Ao vivo", count: games.filter((g) => g.status === "live").length },
    { id: "upcoming", label: "Próximos", count: games.filter((g) => g.status === "upcoming").length },
    { id: "final", label: "Encerrados", count: games.filter((g) => g.status === "final").length },
  ];

  useEffect(() => {
    document.title = "Jogos — HOOPZONE";
  }, []);

  return (
    <div>
      <header
        className="relative border-b border-border overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, oklch(0.13 0.01 25 / 0.85), oklch(0.13 0.01 25 / 0.95)), url(${courtBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <p className="text-xs uppercase tracking-widest text-brand font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse-glow" /> NBA · ao vivo agora
          </p>
          <h1 className="font-display text-6xl lg:text-8xl tracking-tight">Jogos</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">Acompanhe placares em tempo real, próximas partidas e melhores momentos.</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${tab === t.id ? "bg-brand text-brand-foreground shadow-glow" : "border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {t.label} <span className="opacity-60 ml-1">{t.count}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {list.map((g) => <GameCard key={g.id} game={g} />)}
        </div>

        <section className="mt-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand font-bold mb-2 flex items-center gap-2">
                <Flame className="w-3 h-3" /> Highlights
              </p>
              <h2 className="font-display text-5xl tracking-tight">Melhores momentos</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              { title: "Enterrada do ano: CHI sobe na cabeça da defesa", duration: "0:42", views: "1.2M" },
              { title: "Buzzer beater de 4 metros para vencer no estouro", duration: "0:28", views: "892K" },
              { title: "Crossover assassino — toda a galera no chão", duration: "0:35", views: "640K" },
            ].map((h, i) => (
              <a key={i} href="#" className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${courtBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-14 h-14 rounded-full bg-brand grid place-items-center shadow-glow transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 text-brand-foreground fill-current" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg tracking-wide leading-snug">{h.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{h.views} views · {h.duration}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

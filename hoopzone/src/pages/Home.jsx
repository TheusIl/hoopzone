import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Play, Zap, ShoppingBag, Calendar, Newspaper } from "lucide-react";
import { useEffect } from "react";
import heroImg from "@/assets/hero-dunk.jpg";
import courtBg from "@/assets/court-bg.jpg";
import playerImg from "@/assets/player-1.jpg";
import { ProductCard } from "@/components/ProductCard";
import { GameCard } from "@/components/GameCard";
import { products, games } from "@/lib/data";

export default function Home() {
  useEffect(() => {
    document.title = "HOOPZONE — O coração do basketball";
  }, []);

  return (
    <div className="relative">
      <Hero />
      <Ticker />
      <Highlights />
      <FeaturedProducts />
      <LiveGames />
      <NewsSection />
      <CTABanner />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-hero grain">
      <img
        src={heroImg}
        alt="Jogador de basquete enterrando"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-24 lg:pt-32 pb-20 min-h-[92vh] flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6">
            <Flame className="w-3 h-3" /> Drop 23 / Coleção Bred
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tight">
            O coração<br />do <span className="text-brand">basketball</span><br />
            <span className="text-stroke">em um só lugar.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            Drops exclusivos de tênis e jerseys, jogos ao vivo da NBA e a cultura urbana do basquete — direto na sua tela.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 px-6 py-4 rounded-md bg-brand text-brand-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-glow transition-all shadow-glow"
            >
              <ShoppingBag className="w-4 h-4" /> Comprar agora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-md border border-border bg-background/60 backdrop-blur font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all"
            >
              <Play className="w-4 h-4" /> Ver jogos
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-8 bottom-8 hidden lg:flex flex-col items-end gap-2 text-xs text-muted-foreground uppercase tracking-widest">
        <span className="text-brand font-bold">● Live now</span>
        <span>CHI 87 — 82 BOS · Q3 04:21</span>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["NEW DROP", "AIR ZONE 1 BRED", "FRETE GRÁTIS ACIMA DE R$ 499", "JOGOS AO VIVO", "EDIÇÃO LIMITADA", "23 / CULTURE", "STREETWEAR BASQUETE"];
  return (
    <div className="border-y border-border bg-card/40 overflow-hidden">
      <div className="flex animate-marquee py-4 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl tracking-widest mx-8 flex items-center gap-8">
            {t} <span className="text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Highlights() {
  const items = [
    { icon: Zap, label: "Jogos ao vivo", desc: "Acompanhe em tempo real", to: "/games" },
    { icon: ShoppingBag, label: "Novos tênis", desc: "Drops semanais", to: "/shop" },
    { icon: Flame, label: "Jerseys populares", desc: "Times oficiais NBA", to: "/shop" },
    { icon: Calendar, label: "Próximas partidas", desc: "Calendário completo", to: "/games" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <Link
            key={it.label}
            to={it.to}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300"
            style={{ animation: `fade-up 0.6s ${i * 0.08}s both` }}
          >
            <it.icon className="w-7 h-7 text-brand mb-6" />
            <h3 className="font-display text-2xl tracking-wide">{it.label}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand font-bold mb-2">Em destaque</p>
          <h2 className="font-display text-5xl lg:text-6xl tracking-tight">Drops da semana</h2>
        </div>
        <Link to="/shop" className="hidden sm:inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-brand transition-colors">
          Ver tudo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

function LiveGames() {
  return (
    <section
      className="relative py-16 lg:py-24 border-y border-border overflow-hidden"
      style={{ backgroundImage: `linear-gradient(to bottom, oklch(0.13 0.01 25 / 0.92), oklch(0.13 0.01 25 / 0.92)), url(${courtBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse-glow" /> Ao vivo agora
            </p>
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight">Jogos rolando</h2>
          </div>
          <Link to="/games" className="hidden sm:inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-brand transition-colors">
            Todos os jogos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {games.slice(0, 3).map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <article className="group relative overflow-hidden rounded-2xl border border-border min-h-[420px]">
          <img src={playerImg} alt="Highlight" width={1024} height={1280} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-widest mb-4">
              <Newspaper className="w-3 h-3" /> Em alta
            </span>
            <h3 className="font-display text-3xl lg:text-5xl tracking-tight leading-tight">
              Top 10 enterradas da semana — quem ficou em #1?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl">Os melhores momentos da semana, votados pelos fãs.</p>
          </div>
        </article>

        <div className="flex flex-col gap-4">
          {[
            { tag: "NBA", time: "há 2h", title: "Bulls vencem clássico na prorrogação e voltam ao top 4 do Leste." },
            { tag: "Drop", time: "há 5h", title: "Air Zone 1 'Bred' chega em edição limitada — só 500 pares." },
            { tag: "Highlights", time: "há 8h", title: "MVP Race: novo líder assume após semana histórica." },
          ].map((n) => (
            <a key={n.title} href="#" className="group p-6 rounded-xl border border-border bg-card hover:border-brand/40 transition-all">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-3">
                <span className="text-brand font-bold">{n.tag}</span>
                <span className="text-muted-foreground">{n.time}</span>
              </div>
              <h4 className="font-display text-xl tracking-wide leading-snug group-hover:text-brand transition-colors">{n.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-brand/30 bg-brand-gradient p-10 lg:p-16 shadow-glow">
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display text-4xl lg:text-6xl tracking-tight text-brand-foreground">
            Entre no clube.<br />Acesse drops antes de todo mundo.
          </h2>
          <p className="mt-3 text-brand-foreground/80">Receba notificações de lançamento, jogos e ofertas exclusivas.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
            <input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-3 rounded-md bg-background/20 border border-brand-foreground/30 text-brand-foreground placeholder:text-brand-foreground/60 backdrop-blur focus:outline-none focus:border-brand-foreground" />
            <button className="px-6 py-3 rounded-md bg-background text-foreground font-bold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">Inscrever</button>
          </form>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-background/10 blur-3xl" />
        <div className="absolute right-10 top-10 font-display text-[10rem] leading-none text-brand-foreground/10 select-none">23</div>
      </div>
    </section>
  );
}

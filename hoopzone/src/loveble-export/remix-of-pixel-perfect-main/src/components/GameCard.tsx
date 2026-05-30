import type { Game } from "@/lib/data";
import { Play } from "lucide-react";

export function GameCard({ game }: { game: Game }) {
  const isLive = game.status === "live";
  const isFinal = game.status === "final";

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{game.league}</span>
        {isLive && (
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand/15 text-brand text-[10px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-glow" />
            ao vivo
          </span>
        )}
        {isFinal && (
          <span className="px-2 py-0.5 rounded-full bg-secondary text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Final</span>
        )}
        {game.status === "upcoming" && (
          <span className="px-2 py-0.5 rounded-full bg-secondary text-foreground text-[10px] font-bold uppercase tracking-widest">{game.time}</span>
        )}
      </div>

      <div className="space-y-3">
        <TeamRow abbr={game.awayAbbr} name={game.awayTeam} score={game.awayScore} highlight={isFinal && (game.awayScore ?? 0) > (game.homeScore ?? 0)} />
        <div className="h-px bg-border" />
        <TeamRow abbr={game.homeAbbr} name={game.homeTeam} score={game.homeScore} highlight={isFinal && (game.homeScore ?? 0) > (game.awayScore ?? 0)} />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{isLive ? game.time : game.status === "upcoming" ? "Próximo jogo" : "Encerrado"}</span>
        {isLive ? (
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand text-brand-foreground text-xs font-bold uppercase tracking-widest hover:bg-brand-glow transition-colors">
            <Play className="w-3 h-3 fill-current" /> Assistir
          </button>
        ) : (
          <button className="px-3 py-1.5 rounded-md border border-border text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors">
            Detalhes
          </button>
        )}
      </div>
    </div>
  );
}

function TeamRow({ abbr, name, score, highlight }: { abbr: string; name: string; score?: number; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-md grid place-items-center font-display text-sm tracking-wider ${highlight ? "bg-brand text-brand-foreground" : "bg-secondary"}`}>
          {abbr}
        </div>
        <span className={`text-sm font-medium ${highlight ? "text-foreground" : "text-muted-foreground"}`}>{name}</span>
      </div>
      {score !== undefined && (
        <span className={`font-display text-3xl tabular-nums ${highlight ? "text-foreground" : "text-muted-foreground"}`}>{score}</span>
      )}
    </div>
  );
}

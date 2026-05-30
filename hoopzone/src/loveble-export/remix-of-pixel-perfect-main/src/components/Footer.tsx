import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Twitch } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-md bg-brand-gradient grid place-items-center shadow-glow">
              <span className="font-display text-xl text-brand-foreground leading-none">H</span>
            </div>
            <span className="font-display text-2xl tracking-wider">HOOPZONE</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            O coração do basketball — drops, jogos ao vivo e cultura urbana num só lugar.
          </p>
        </div>

        {[
          { title: "Loja", items: ["Tênis", "Jerseys", "Moletons", "Shorts", "Acessórios"] },
          { title: "Hoopzone", items: ["Jogos ao vivo", "Notícias", "Highlights", "Times", "Estatísticas"] },
          { title: "Suporte", items: ["Contato", "Trocas", "Envio", "FAQ", "Termos"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-lg tracking-wider mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-brand transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 HOOPZONE. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            {[Instagram, Twitter, Youtube, Twitch].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-md border border-border hover:bg-brand hover:border-brand hover:text-brand-foreground transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="font-display text-[18vw] leading-none tracking-tighter text-stroke select-none text-center overflow-hidden pb-4">
        HOOPZONE
      </div>
    </footer>
  );
}

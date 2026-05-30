import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Loja" },
  { to: "/games", label: "Jogos" },
  { to: "/news", label: "Notícias" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-md bg-brand-gradient grid place-items-center shadow-glow">
            <span className="font-display text-xl text-brand-foreground leading-none">H</span>
          </div>
          <span className="font-display text-2xl tracking-wider">HOOPZONE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium uppercase tracking-widest transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button className="hidden sm:grid w-10 h-10 place-items-center rounded-md hover:bg-secondary transition-colors" aria-label="Buscar">
            <Search className="w-4 h-4" />
          </button>
          <Link to="/login" className="hidden sm:block px-4 py-2 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
            Login
          </Link>
          <button className="relative w-10 h-10 grid place-items-center rounded-md hover:bg-secondary transition-colors" aria-label="Carrinho">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 grid place-items-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">3</span>
          </button>
          <button onClick={() => setOpen(true)} className="lg:hidden w-10 h-10 grid place-items-center rounded-md hover:bg-secondary" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="h-16 px-4 flex items-center justify-between border-b border-border">
              <span className="font-display text-2xl tracking-wider">HOOPZONE</span>
              <button onClick={() => setOpen(false)} className="w-10 h-10 grid place-items-center rounded-md hover:bg-secondary">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-6 flex flex-col gap-2">
              {[...links, { to: "/login", label: "Login" } as const].map((l) => (
                <Link key={l.to} to={l.to} className="py-4 text-3xl font-display tracking-wider border-b border-border">
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import courtBg from "@/assets/court-bg.jpg";

export default function Login() {
  const [mode, setMode] = useState("login");

  useEffect(() => {
    document.title = "Entrar — HOOPZONE";
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img src={courtBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 grain" />
        <div className="relative h-full p-12 flex flex-col justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-brand-gradient grid place-items-center shadow-glow">
              <span className="font-display text-xl text-brand-foreground leading-none">H</span>
            </div>
            <span className="font-display text-2xl tracking-wider">HOOPZONE</span>
          </Link>
          <div>
            <h2 className="font-display text-6xl tracking-tight leading-none">
              Bem-vindo<br />ao <span className="text-brand">clube.</span>
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">Drops exclusivos, jogos ao vivo e a cultura do basquete — tudo num só lugar.</p>
          </div>
        </div>
      </div>

      <div className="relative grid place-items-center p-6 lg:p-12 bg-background">
        <div className="w-full max-w-md">
          <div className="flex gap-1 p-1 rounded-lg border border-border bg-card mb-8">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`relative flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-colors ${mode === m ? "text-brand-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {mode === m && <motion.span layoutId="auth-tab" className="absolute inset-0 bg-brand rounded-md shadow-glow" />}
                <span className="relative">{m === "login" ? "Entrar" : "Cadastrar"}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h1 className="font-display text-4xl tracking-wide mb-2">
                {mode === "login" ? "Entre na quadra" : "Crie sua conta"}
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                {mode === "login" ? "Acesse pedidos, drops e jogos favoritos." : "Drops antecipados e ofertas exclusivas."}
              </p>

              <form className="space-y-3">
                {mode === "signup" && <Field icon={User} type="text" placeholder="Nome completo" />}
                <Field icon={Mail} type="email" placeholder="seu@email.com" />
                <Field icon={Lock} type="password" placeholder="Senha" />
                {mode === "login" && (
                  <div className="flex justify-end">
                    <a href="#" className="text-xs text-muted-foreground hover:text-brand">Esqueceu a senha?</a>
                  </div>
                )}
                <button type="submit" className="w-full mt-2 py-3.5 rounded-md bg-brand text-brand-foreground font-bold uppercase tracking-widest text-sm hover:bg-brand-glow transition-colors shadow-glow flex items-center justify-center gap-2 group">
                  {mode === "login" ? "Entrar" : "Criar conta"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">ou continue com</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <SocialButton label="Google" icon="G" />
                <SocialButton label="Apple" icon="" />
              </div>

              <p className="mt-8 text-xs text-center text-muted-foreground">
                Ao continuar você aceita os <a href="#" className="text-foreground underline">Termos</a> e a <a href="#" className="text-foreground underline">Política de Privacidade</a>.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, ...props }) {
  return (
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-brand transition-colors" />
      <input
        {...props}
        className="w-full pl-11 pr-4 py-3.5 rounded-md bg-card border border-border focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm placeholder:text-muted-foreground"
      />
    </div>
  );
}

function SocialButton({ label, icon }) {
  return (
    <button className="flex items-center justify-center gap-2 py-3 rounded-md border border-border bg-card text-sm font-medium hover:border-foreground transition-colors">
      <span className="font-display text-base">{icon}</span> {label}
    </button>
  );
}

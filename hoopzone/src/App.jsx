import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductPage from "@/pages/Product";
import Games from "@/pages/Games";
import News from "@/pages/News";
import Login from "@/pages/Login";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[10rem] leading-none text-brand">404</h1>
        <h2 className="mt-2 font-display text-3xl tracking-wider">Fora da quadra</h2>
        <p className="mt-2 text-sm text-muted-foreground">Essa página não existe ou foi removida do roster.</p>
        <Link to="/" className="inline-flex mt-6 items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-bold uppercase tracking-widest text-brand-foreground hover:bg-brand-glow transition-colors">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
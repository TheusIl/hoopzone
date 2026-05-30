import sneaker1 from "@/assets/sneaker-1.jpg";
import sneaker2 from "@/assets/sneaker-2.jpg";
import sneaker3 from "@/assets/sneaker-3.jpg";
import jersey1 from "@/assets/jersey-1.jpg";
import hoodie1 from "@/assets/hoodie-1.jpg";

export const products = [
  { id: "air-zone-1", name: "Air Zone 1 'Bred'", category: "Tênis", price: 1299, originalPrice: 1599, image: sneaker1, badge: "Drop Novo", colorway: "Vermelho / Preto" },
  { id: "court-king", name: "Court King Hi", category: "Tênis", price: 1099, image: sneaker2, colorway: "Branco / Vermelho" },
  { id: "midnight-low", name: "Midnight Low Glow", category: "Tênis", price: 999, originalPrice: 1199, image: sneaker3, badge: "-17%", colorway: "Preto / Neon" },
  { id: "jersey-23", name: "Jersey Classic 23", category: "Jerseys", price: 459, image: jersey1, colorway: "Vermelho" },
  { id: "hoop-hoodie", name: "Hoop Culture Hoodie", category: "Moletons", price: 549, image: hoodie1, colorway: "Preto" },
  { id: "air-zone-2", name: "Air Zone 1 'Court'", category: "Tênis", price: 1199, image: sneaker2, badge: "Top Vendas", colorway: "Branco" },
  { id: "jersey-city", name: "City Edition Jersey", category: "Jerseys", price: 489, image: jersey1, colorway: "Vermelho" },
  { id: "blackout-hoodie", name: "Blackout Logo Hoodie", category: "Moletons", price: 499, originalPrice: 599, image: hoodie1, badge: "-16%", colorway: "Preto" },
];

export const categories = ["Tênis", "Jerseys", "Moletons", "Shorts", "Acessórios"];

export const games = [
  { id: "g1", status: "live", homeTeam: "Chicago Bulls", awayTeam: "Boston Celtics", homeAbbr: "CHI", awayAbbr: "BOS", homeScore: 87, awayScore: 82, time: "Q3 04:21", league: "NBA" },
  { id: "g2", status: "live", homeTeam: "LA Lakers", awayTeam: "Miami Heat", homeAbbr: "LAL", awayAbbr: "MIA", homeScore: 64, awayScore: 71, time: "Q3 09:12", league: "NBA" },
  { id: "g3", status: "upcoming", homeTeam: "Golden State", awayTeam: "Denver Nuggets", homeAbbr: "GSW", awayAbbr: "DEN", time: "Hoje 22:30", league: "NBA" },
  { id: "g4", status: "upcoming", homeTeam: "New York Knicks", awayTeam: "Philadelphia 76ers", homeAbbr: "NYK", awayAbbr: "PHI", time: "Amanhã 20:00", league: "NBA" },
  { id: "g5", status: "final", homeTeam: "Phoenix Suns", awayTeam: "Dallas Mavericks", homeAbbr: "PHX", awayAbbr: "DAL", homeScore: 112, awayScore: 109, time: "Final", league: "NBA" },
  { id: "g6", status: "final", homeTeam: "Brooklyn Nets", awayTeam: "Toronto Raptors", homeAbbr: "BKN", awayAbbr: "TOR", homeScore: 98, awayScore: 104, time: "Final", league: "NBA" },
];

export const news = [
  { id: "n1", title: "Bulls vencem clássico na prorrogação e voltam ao top 4", tag: "NBA", time: "há 2h", image: "/api/news-1" },
  { id: "n2", title: "Lançamento: Air Zone 1 'Bred' chega em edição limitada", tag: "Drop", time: "há 5h" },
  { id: "n3", title: "Top 10 enterradas da semana — quem ficou em #1?", tag: "Highlights", time: "há 8h" },
];

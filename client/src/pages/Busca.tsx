/* ============================================================
   1IDEIA — Busca.tsx
   Design: NeoFuturo Ultra Dark High-Tech
   Funcionalidade: Explorar ideias com filtros e busca
   ============================================================ */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Zap, Globe, Lock, Shield, TrendingUp, Eye, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonCursor from "@/components/NeonCursor";
import { Link } from "wouter";

const todasIdeias = [
  { id: 1, titulo: "Tampa anti-vazamento para detergente", categoria: "Incremental", setor: "Limpeza", empresa: "Ypê", curtidas: 1247, views: 4520, autor: "Carlos M.", tempo: "2h", protegida: false, cor: "#FFD700" },
  { id: 2, titulo: "App de carona solidária para zonas rurais", categoria: "Inovadora", setor: "Mobilidade", empresa: "Novo Mercado", curtidas: 892, views: 3100, autor: "Ana P.", tempo: "5h", protegida: true, cor: "#b000ff" },
  { id: 3, titulo: "Embalagem biodegradável para café", categoria: "Incremental", setor: "Alimentação", empresa: "Pilão", curtidas: 2103, views: 7800, autor: "Rafael S.", tempo: "1h", protegida: false, cor: "#FFD700" },
  { id: 4, titulo: "Sistema de irrigação por sensor de umidade low-cost", categoria: "Inovadora", setor: "Agronegócio", empresa: "Novo Mercado", curtidas: 3456, views: 12300, autor: "Maria L.", tempo: "30min", protegida: true, cor: "#b000ff" },
  { id: 5, titulo: "Botão de emergência discreto em apps de banco", categoria: "Coletiva", setor: "Fintech", empresa: "Nubank", curtidas: 5678, views: 21000, autor: "João F.", tempo: "15min", protegida: false, cor: "#00f0ff" },
  { id: 6, titulo: "Embalagem de remédio com dosagem por QR Code", categoria: "Incremental", setor: "Saúde", empresa: "EMS", curtidas: 987, views: 3400, autor: "Lucia T.", tempo: "3h", protegida: false, cor: "#FFD700" },
  { id: 7, titulo: "Plataforma de microcrédito via WhatsApp", categoria: "Inovadora", setor: "Fintech", empresa: "Novo Mercado", curtidas: 4321, views: 15600, autor: "Pedro A.", tempo: "1d", protegida: true, cor: "#b000ff" },
  { id: 8, titulo: "Lixeira inteligente com sensor de peso", categoria: "Coletiva", setor: "Sustentabilidade", empresa: "Prefeitura", curtidas: 2890, views: 9800, autor: "Sandra R.", tempo: "6h", protegida: false, cor: "#00f0ff" },
  { id: 9, titulo: "Tênis com solado que gera energia ao caminhar", categoria: "Inovadora", setor: "Moda", empresa: "Novo Mercado", curtidas: 7654, views: 28900, autor: "Bruno K.", tempo: "2d", protegida: true, cor: "#b000ff" },
  { id: 10, titulo: "Cardápio digital com IA para restaurantes pequenos", categoria: "Incremental", setor: "Alimentação", empresa: "iFood", curtidas: 1543, views: 5600, autor: "Carla M.", tempo: "4h", protegida: false, cor: "#FFD700" },
  { id: 11, titulo: "Aplicativo de troca de habilidades sem dinheiro", categoria: "Coletiva", setor: "Educação", empresa: "Novo Mercado", curtidas: 3210, views: 11200, autor: "Thiago B.", tempo: "8h", protegida: false, cor: "#00f0ff" },
  { id: 12, titulo: "Sensor de qualidade do ar em tempo real para escolas", categoria: "Inovadora", setor: "Saúde", empresa: "Novo Mercado", curtidas: 2345, views: 8700, autor: "Fernanda C.", tempo: "12h", protegida: true, cor: "#b000ff" },
];

const categorias = ["Todas", "Coletiva", "Incremental", "Inovadora"];
const setores = ["Todos", "Agronegócio", "Alimentação", "Educação", "Fintech", "Limpeza", "Moda", "Mobilidade", "Saúde", "Sustentabilidade"];

const categoriaConfig = {
  "Coletiva": { icon: <Globe size={12} />, cor: "#00f0ff", label: "OPEN" },
  "Incremental": { icon: <Lock size={12} />, cor: "#FFD700", label: "B2B" },
  "Inovadora": { icon: <Shield size={12} />, cor: "#b000ff", label: "DEEP TECH" },
};

export default function Busca() {
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const [setorFiltro, setSetorFiltro] = useState("Todos");
  const [ordenacao, setOrdenacao] = useState<"curtidas" | "views" | "recente">("curtidas");
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const ideiasFiltered = useMemo(() => {
    let result = todasIdeias;
    if (busca) result = result.filter(i => i.titulo.toLowerCase().includes(busca.toLowerCase()) || i.setor.toLowerCase().includes(busca.toLowerCase()));
    if (categoriaFiltro !== "Todas") result = result.filter(i => i.categoria === categoriaFiltro);
    if (setorFiltro !== "Todos") result = result.filter(i => i.setor === setorFiltro);
    if (ordenacao === "curtidas") result = [...result].sort((a, b) => b.curtidas - a.curtidas);
    if (ordenacao === "views") result = [...result].sort((a, b) => b.views - a.views);
    return result;
  }, [busca, categoriaFiltro, setorFiltro, ordenacao]);

  const toggleLike = (id: number) => {
    setLikedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen">
      <NeonCursor />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <span
              className="text-xs text-neon mb-2 block"
              style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
            >
              EXPLORAR IDEIAS
            </span>
            <h1
              className="text-3xl md:text-4xl font-black mb-2"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              FEED DE <span className="gradient-text">INOVAÇÃO</span>
            </h1>
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {todasIdeias.length} ideias publicadas · {ideiasFiltered.length} resultados
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder="Buscar ideias, setores, empresas..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  background: "rgba(0, 240, 255, 0.03)",
                }}
                onFocus={e => (e.target as HTMLElement).style.borderColor = "rgba(0, 240, 255, 0.5)"}
                onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(0, 240, 255, 0.2)"}
              />
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-3 items-center">
              <Filter size={14} className="text-muted-foreground" />

              {/* Categoria */}
              <div className="flex gap-2 flex-wrap">
                {categorias.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoriaFiltro(cat)}
                    className="tag-badge transition-all"
                    style={{
                      padding: "6px 12px",
                      background: categoriaFiltro === cat ? "rgba(0, 240, 255, 0.2)" : "transparent",
                      border: `1px solid ${categoriaFiltro === cat ? "rgba(0, 240, 255, 0.6)" : "rgba(255,255,255,0.1)"}`,
                      color: categoriaFiltro === cat ? "#00f0ff" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="w-px h-4" style={{ background: "rgba(255,255,255,0.1)" }} />

              {/* Ordenação */}
              <div className="flex gap-2">
                {[
                  { key: "curtidas", label: "Mais Curtidas" },
                  { key: "views", label: "Mais Vistas" },
                  { key: "recente", label: "Recentes" },
                ].map(ord => (
                  <button
                    key={ord.key}
                    onClick={() => setOrdenacao(ord.key as typeof ordenacao)}
                    className="tag-badge transition-all"
                    style={{
                      padding: "6px 12px",
                      background: ordenacao === ord.key ? "rgba(255, 215, 0, 0.15)" : "transparent",
                      border: `1px solid ${ordenacao === ord.key ? "rgba(255, 215, 0, 0.5)" : "rgba(255,255,255,0.1)"}`,
                      color: ordenacao === ord.key ? "#FFD700" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {ord.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Setor */}
            <div className="flex gap-2 flex-wrap">
              {setores.map(setor => (
                <button
                  key={setor}
                  onClick={() => setSetorFiltro(setor)}
                  className="text-xs transition-all px-3 py-1 rounded"
                  style={{
                    background: setorFiltro === setor ? "rgba(176, 0, 255, 0.2)" : "transparent",
                    border: `1px solid ${setorFiltro === setor ? "rgba(176, 0, 255, 0.5)" : "rgba(255,255,255,0.08)"}`,
                    color: setorFiltro === setor ? "#b000ff" : "rgba(255,255,255,0.4)",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {setor}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid de Ideias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ideiasFiltered.map((ideia, i) => {
              const config = categoriaConfig[ideia.categoria as keyof typeof categoriaConfig];
              const isLiked = likedIds.includes(ideia.id);

              return (
                <motion.div
                  key={ideia.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative rounded-xl p-5 group"
                  style={{
                    background: "rgba(10, 10, 15, 0.9)",
                    border: `1px solid ${ideia.cor}20`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${ideia.cor}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${ideia.cor}10`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${ideia.cor}20`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Top line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${ideia.cor}60, transparent)` }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="tag-badge flex items-center gap-1"
                      style={{
                        background: `${config.cor}15`,
                        border: `1px solid ${config.cor}40`,
                        color: config.cor,
                      }}
                    >
                      {config.icon}
                      {config.label}
                    </span>

                    {ideia.protegida && (
                      <span
                        className="tag-badge flex items-center gap-1"
                        style={{
                          background: "rgba(176, 0, 255, 0.1)",
                          border: "1px solid rgba(176, 0, 255, 0.3)",
                          color: "#b000ff",
                        }}
                      >
                        <Shield size={10} />
                        PROTEGIDA
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-bold mb-2 leading-snug text-foreground"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {ideia.titulo}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {ideia.setor}
                    </span>
                    {ideia.empresa !== "Novo Mercado" && (
                      <span
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Space Mono', monospace" }}
                      >
                        → {ideia.empresa}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: `${ideia.cor}20`, color: ideia.cor, fontSize: "0.6rem" }}
                      >
                        {ideia.autor.charAt(0)}
                      </div>
                      <div>
                        <div
                          className="text-xs text-foreground"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {ideia.autor}
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {ideia.tempo}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="flex items-center gap-1 text-xs text-muted-foreground"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        <Eye size={11} />
                        {ideia.views.toLocaleString()}
                      </span>
                      <button
                        onClick={() => toggleLike(ideia.id)}
                        className="flex items-center gap-1 text-xs transition-all hover:scale-110"
                        style={{ color: isLiked ? ideia.cor : "rgba(255,255,255,0.4)" }}
                      >
                        <Zap size={12} fill={isLiked ? ideia.cor : "none"} />
                        {(ideia.curtidas + (isLiked ? 1 : 0)).toLocaleString()}
                      </button>
                    </div>
                  </div>

                  {/* Locked overlay for protected ideas */}
                  {ideia.protegida && (
                    <div
                      className="absolute inset-0 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "rgba(10, 10, 15, 0.85)" }}
                    >
                      <div className="text-center">
                        <Lock size={24} className="mx-auto mb-2" style={{ color: "#b000ff" }} />
                        <p
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          Requer tokens para acessar
                        </p>
                        <Link href="/cadastro">
                          <button
                            className="mt-3 text-xs px-4 py-2 rounded"
                            style={{
                              background: "rgba(176, 0, 255, 0.2)",
                              border: "1px solid rgba(176, 0, 255, 0.5)",
                              color: "#b000ff",
                              fontFamily: "'Orbitron', sans-serif",
                            }}
                          >
                            COMPRAR TOKENS
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {ideiasFiltered.length === 0 && (
            <div className="text-center py-20">
              <Search size={40} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
                Nenhuma ideia encontrada para "{busca}"
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

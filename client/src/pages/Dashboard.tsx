/* ============================================================
   1IDEIA — Dashboard.tsx
   Design: NeoFuturo Ultra Dark High-Tech
   Funcionalidade: Painel do usuário com métricas, ideias e ranking
   ============================================================ */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap, TrendingUp, Eye, Star, Plus, Shield, Globe, Lock,
  Award, Coins, Brain, BarChart3, ArrowUp, Clock, CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonCursor from "@/components/NeonCursor";
import { Link } from "wouter";
import { toast } from "sonner";

const minhasIdeias = [
  { id: 1, titulo: "Tampa anti-vazamento para detergente", categoria: "Incremental", status: "Em Análise", curtidas: 1247, views: 4520, cor: "#FFD700", data: "12/01/2024" },
  { id: 2, titulo: "App de microcrédito via WhatsApp", categoria: "Inovadora", status: "Protegida", curtidas: 892, views: 3100, cor: "#b000ff", data: "08/01/2024" },
  { id: 3, titulo: "Botão de emergência em apps bancários", categoria: "Coletiva", status: "Publicada", curtidas: 5678, views: 21000, cor: "#00f0ff", data: "03/01/2024" },
];

const atividades = [
  { tipo: "curtida", texto: "Empresa Ypê curtiu sua ideia", tempo: "há 2h", cor: "#FFD700" },
  { tipo: "view", texto: "Investidor visualizou 'Tampa anti-vazamento'", tempo: "há 4h", cor: "#00f0ff" },
  { tipo: "protecao", texto: "Timestamp gerado para 'App de microcrédito'", tempo: "há 1d", cor: "#b000ff" },
  { tipo: "ranking", texto: "Você subiu para #4 no ranking mensal", tempo: "há 2d", cor: "#FFD700" },
  { tipo: "curtida", texto: "312 novos engajamentos esta semana", tempo: "há 3d", cor: "#00f0ff" },
];

const statusConfig = {
  "Em Análise": { cor: "#FFD700", bg: "rgba(255, 215, 0, 0.1)" },
  "Protegida": { cor: "#b000ff", bg: "rgba(176, 0, 255, 0.1)" },
  "Publicada": { cor: "#00f0ff", bg: "rgba(0, 240, 255, 0.1)" },
};

const categoriaIcon = {
  "Coletiva": <Globe size={12} />,
  "Incremental": <Lock size={12} />,
  "Inovadora": <Shield size={12} />,
};

export default function Dashboard() {
  const [abaAtiva, setAbaAtiva] = useState<"ideias" | "atividade" | "tokens">("ideias");

  const handleNovaIdeia = () => {
    toast.info("Abrindo o Agente 1Ideia... Funcionalidade completa em breve!");
  };

  return (
    <div className="min-h-screen">
      <NeonCursor />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container">
          {/* Header do Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4"
          >
            <div>
              <span
                className="text-xs text-neon mb-2 block"
                style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
              >
                PAINEL DO INOVADOR
              </span>
              <h1
                className="text-3xl font-black"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                BEM-VINDO, <span className="gradient-text">INOVADOR</span>
              </h1>
            </div>

            <button
              onClick={handleNovaIdeia}
              className="btn-neon px-6 py-3 rounded-lg text-sm flex items-center gap-2"
            >
              <Plus size={16} />
              TENHO 1 IDEIA
            </button>
          </motion.div>

          {/* Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Ideias Publicadas", value: "3", icon: <Zap size={18} />, cor: "#00f0ff", sub: "de 3 gratuitas" },
              { label: "Total de Curtidas", value: "7.817", icon: <Star size={18} />, cor: "#FFD700", sub: "+312 esta semana" },
              { label: "Visualizações", value: "28.6K", icon: <Eye size={18} />, cor: "#b000ff", sub: "+1.2K hoje" },
              { label: "Posição no Ranking", value: "#4", icon: <Award size={18} />, cor: "#FFD700", sub: "Inovador do Mês" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(10, 10, 15, 0.9)",
                  border: `1px solid ${metric.cor}20`,
                }}
              >
                <div
                  className="p-2 rounded-lg inline-flex mb-3"
                  style={{ background: `${metric.cor}15`, color: metric.cor }}
                >
                  {metric.icon}
                </div>
                <div
                  className="text-2xl font-black mb-1"
                  style={{ fontFamily: "'Orbitron', sans-serif", color: metric.cor }}
                >
                  {metric.value}
                </div>
                <div
                  className="text-xs text-foreground mb-1"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {metric.label}
                </div>
                <div
                  className="text-xs text-muted-foreground"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {metric.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progresso de Tokens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl p-5 mb-8"
            style={{
              background: "rgba(10, 10, 15, 0.9)",
              border: "1px solid rgba(255, 215, 0, 0.2)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Coins size={16} className="text-gold" />
                <span
                  className="text-sm font-bold text-gold"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  TOKENS DISPONÍVEIS
                </span>
              </div>
              <span
                className="text-xl font-black text-gold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                150 TKN
              </span>
            </div>
            <div className="progress-neon h-2">
              <div className="progress-neon-fill" style={{ width: "60%" }} />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
                150 / 250 tokens usados
              </span>
              <button
                onClick={() => toast.info("Compra de tokens em breve!")}
                className="text-xs text-gold hover:underline"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                + Comprar tokens
              </button>
            </div>
          </motion.div>

          {/* Abas */}
          <div className="flex gap-1 mb-6 p-1 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
            {[
              { key: "ideias", label: "Minhas Ideias", icon: <Zap size={14} /> },
              { key: "atividade", label: "Atividade", icon: <TrendingUp size={14} /> },
              { key: "tokens", label: "Tokens", icon: <Coins size={14} /> },
            ].map(aba => (
              <button
                key={aba.key}
                onClick={() => setAbaAtiva(aba.key as typeof abaAtiva)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs transition-all"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background: abaAtiva === aba.key ? "rgba(0, 240, 255, 0.1)" : "transparent",
                  color: abaAtiva === aba.key ? "#00f0ff" : "rgba(255,255,255,0.4)",
                  border: abaAtiva === aba.key ? "1px solid rgba(0, 240, 255, 0.3)" : "1px solid transparent",
                }}
              >
                {aba.icon}
                {aba.label}
              </button>
            ))}
          </div>

          {/* Conteúdo das Abas */}
          {abaAtiva === "ideias" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {minhasIdeias.map((ideia, i) => {
                const statusCfg = statusConfig[ideia.status as keyof typeof statusConfig];
                return (
                  <motion.div
                    key={ideia.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl p-5"
                    style={{
                      background: "rgba(10, 10, 15, 0.9)",
                      border: `1px solid ${ideia.cor}20`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-lg mt-0.5"
                          style={{ background: `${ideia.cor}15`, color: ideia.cor }}
                        >
                          {categoriaIcon[ideia.categoria as keyof typeof categoriaIcon]}
                        </div>
                        <div>
                          <h3
                            className="text-sm font-bold text-foreground mb-1"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                          >
                            {ideia.titulo}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="tag-badge"
                              style={{
                                background: `${ideia.cor}15`,
                                border: `1px solid ${ideia.cor}40`,
                                color: ideia.cor,
                              }}
                            >
                              {ideia.categoria}
                            </span>
                            <span
                              className="tag-badge"
                              style={{
                                background: statusCfg.bg,
                                border: `1px solid ${statusCfg.cor}40`,
                                color: statusCfg.cor,
                              }}
                            >
                              {ideia.status}
                            </span>
                            <span
                              className="text-xs text-muted-foreground"
                              style={{ fontFamily: "'Space Mono', monospace" }}
                            >
                              {ideia.data}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div
                            className="text-sm font-black"
                            style={{ fontFamily: "'Orbitron', sans-serif", color: ideia.cor }}
                          >
                            {ideia.curtidas.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
                            curtidas
                          </div>
                        </div>
                        <div className="text-center">
                          <div
                            className="text-sm font-black"
                            style={{ fontFamily: "'Orbitron', sans-serif", color: "#00f0ff" }}
                          >
                            {ideia.views.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
                            views
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Botão nova ideia */}
              <button
                onClick={handleNovaIdeia}
                className="w-full py-4 rounded-xl border-2 border-dashed text-sm transition-all hover:scale-[1.01]"
                style={{
                  borderColor: "rgba(0, 240, 255, 0.2)",
                  color: "rgba(0, 240, 255, 0.5)",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 240, 255, 0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#00f0ff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 240, 255, 0.2)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(0, 240, 255, 0.5)";
                }}
              >
                + PUBLICAR NOVA IDEIA
              </button>
            </motion.div>
          )}

          {abaAtiva === "atividade" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {atividades.map((ativ, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    background: "rgba(10, 10, 15, 0.8)",
                    border: `1px solid ${ativ.cor}15`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${ativ.cor}15`, color: ativ.cor }}
                  >
                    {ativ.tipo === "curtida" && <Star size={14} />}
                    {ativ.tipo === "view" && <Eye size={14} />}
                    {ativ.tipo === "protecao" && <Shield size={14} />}
                    {ativ.tipo === "ranking" && <Award size={14} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
                      {ativ.texto}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {ativ.tempo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {abaAtiva === "tokens" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {[
                { titulo: "Pacote Básico", tokens: 50, preco: "R$ 29,90", cor: "#00f0ff", desc: "Ideal para começar" },
                { titulo: "Pacote Pro", tokens: 200, preco: "R$ 89,90", cor: "#FFD700", desc: "Mais popular", destaque: true },
                { titulo: "Pacote Enterprise", tokens: 1000, preco: "R$ 299,90", cor: "#b000ff", desc: "Para empresas" },
              ].map((pacote, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 relative"
                  style={{
                    background: "rgba(10, 10, 15, 0.9)",
                    border: `1px solid ${pacote.cor}${pacote.destaque ? "60" : "30"}`,
                    boxShadow: pacote.destaque ? `0 0 30px ${pacote.cor}20` : "none",
                  }}
                >
                  {pacote.destaque && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${pacote.cor}, #b000ff)`,
                        color: "#0a0a0f",
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      MAIS POPULAR
                    </div>
                  )}
                  <h3
                    className="text-lg font-black mb-1"
                    style={{ fontFamily: "'Orbitron', sans-serif", color: pacote.cor }}
                  >
                    {pacote.titulo}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                    {pacote.desc}
                  </p>
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ fontFamily: "'Orbitron', sans-serif", color: pacote.cor }}
                  >
                    {pacote.tokens}
                  </div>
                  <div className="text-xs text-muted-foreground mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                    tokens
                  </div>
                  <div
                    className="text-xl font-bold mb-5"
                    style={{ fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.8)" }}
                  >
                    {pacote.preco}
                  </div>
                  <button
                    onClick={() => toast.info("Sistema de pagamento em breve!")}
                    className="w-full py-3 rounded-lg text-xs font-bold transition-all hover:scale-105"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: "0.1em",
                      background: pacote.destaque
                        ? `linear-gradient(135deg, ${pacote.cor}, #b000ff)`
                        : `${pacote.cor}15`,
                      border: `1px solid ${pacote.cor}50`,
                      color: pacote.destaque ? "#0a0a0f" : pacote.cor,
                    }}
                  >
                    COMPRAR TOKENS
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

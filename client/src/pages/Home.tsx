/* ============================================================
   1IDEIA — Home.tsx
   Design: NeoFuturo Ultra Dark High-Tech
   Seções: Hero, Pilares, Tipos de Ideia, Agente IA, Monetização, CTA
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap, Lightbulb, TrendingUp, Building2, Shield, Star,
  ChevronRight, Users, Brain, Lock, Globe, Award, ArrowRight,
  Cpu, Database, BarChart3, Coins, Sparkles, MessageSquare
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonCursor from "@/components/NeonCursor";

/* ---- Dados das Ideias Coletivas (Carrossel) ---- */
const ideiasColetivas = [
  {
    id: 1,
    titulo: "Tampa anti-vazamento para detergente",
    categoria: "Design Incremental",
    empresa: "Ypê",
    curtidas: 1247,
    autor: "Carlos M.",
    tempo: "há 2h",
    cor: "#00f0ff",
  },
  {
    id: 2,
    titulo: "App de carona solidária para zonas rurais",
    categoria: "Inovação Disruptiva",
    empresa: "Novo Mercado",
    curtidas: 892,
    autor: "Ana P.",
    tempo: "há 5h",
    cor: "#b000ff",
  },
  {
    id: 3,
    titulo: "Embalagem biodegradável para café",
    categoria: "Design Incremental",
    empresa: "Pilão",
    curtidas: 2103,
    autor: "Rafael S.",
    tempo: "há 1h",
    cor: "#FFD700",
  },
  {
    id: 4,
    titulo: "Sistema de irrigação por sensor de umidade low-cost",
    categoria: "Inovação Disruptiva",
    empresa: "Agronegócio",
    curtidas: 3456,
    autor: "Maria L.",
    tempo: "há 30min",
    cor: "#00f0ff",
  },
  {
    id: 5,
    titulo: "Botão de emergência discreto em apps de banco",
    categoria: "Ideia Coletiva",
    empresa: "Fintech",
    curtidas: 5678,
    autor: "João F.",
    tempo: "há 15min",
    cor: "#b000ff",
  },
];

/* ---- Ranking de Inovadores ---- */
const ranking = [
  { pos: 1, nome: "Maria Luiza S.", pontos: 12450, ideias: 23, avatar: "ML" },
  { pos: 2, nome: "Carlos Eduardo M.", pontos: 9870, ideias: 18, avatar: "CE" },
  { pos: 3, nome: "Ana Paula R.", pontos: 8230, ideias: 15, avatar: "AP" },
  { pos: 4, nome: "Rafael Torres", pontos: 6540, ideias: 12, avatar: "RT" },
  { pos: 5, nome: "Fernanda Costa", pontos: 5120, ideias: 9, avatar: "FC" },
];

/* ---- Fluxo do Agente de IA ---- */
const aiFlow = [
  {
    step: 1,
    pergunta: "Qual é o problema ou situação chata que você quer resolver? O que hoje não funciona bem?",
    label: "O Problema",
    icon: "🎯",
  },
  {
    step: 2,
    pergunta: "Onde esse problema acontece? É em um produto existente ou uma situação nova sem solução?",
    label: "O Contexto",
    icon: "🗺️",
  },
  {
    step: 3,
    pergunta: "Como você resolve isso? Explique do seu jeito, como se contasse para um amigo.",
    label: "A Solução",
    icon: "💡",
  },
  {
    step: 4,
    pergunta: "Deixa eu ver se entendi: você sugere que... [IA refina tecnicamente a ideia]",
    label: "Refino Técnico",
    icon: "🤖",
  },
  {
    step: 5,
    pergunta: "Por que sua ideia é melhor que o que existe hoje? Economiza dinheiro, é mais rápida ou polui menos?",
    label: "O Diferencial",
    icon: "⚡",
  },
  {
    step: 6,
    pergunta: "Você tem algum desenho ou foto? Se não tiver, posso ajudar a descrever visualmente.",
    label: "Evidência Visual",
    icon: "📸",
  },
];

/* ---- Componente: Particle Background ---- */
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: i % 3 === 0 ? "#00f0ff" : i % 3 === 1 ? "#b000ff" : "#FFD700",
            opacity: Math.random() * 0.6 + 0.2,
            animation: `particle-float ${Math.random() * 4 + 3}s ease-in-out ${Math.random() * 3}s infinite`,
            boxShadow: `0 0 6px currentColor`,
          }}
        />
      ))}
    </div>
  );
}

/* ---- Componente: Card de Tipo de Ideia ---- */
function IdeiaTypeCard({
  icon,
  titulo,
  subtitulo,
  descricao,
  cor,
  badge,
  delay,
}: {
  icon: React.ReactNode;
  titulo: string;
  subtitulo: string;
  descricao: string;
  cor: string;
  badge: string;
  delay: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 15, y: -x * 15 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease",
      }}
      className="relative rounded-lg p-6 cursor-pointer group"
    >
      {/* Card Background */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(135deg, rgba(10,10,15,0.95), rgba(10,10,15,0.8))`,
          border: `1px solid ${cor}40`,
          boxShadow: `0 0 20px ${cor}15, inset 0 0 20px ${cor}05`,
        }}
      />

      {/* Hover Glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${cor}15, transparent 70%)`,
        }}
      />

      {/* Corner Accents */}
      <div
        className="absolute top-0 left-0 w-4 h-4"
        style={{
          borderTop: `2px solid ${cor}`,
          borderLeft: `2px solid ${cor}`,
          borderRadius: "4px 0 0 0",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4"
        style={{
          borderBottom: `2px solid ${cor}`,
          borderRight: `2px solid ${cor}`,
          borderRadius: "0 0 4px 0",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-lg"
            style={{ background: `${cor}15`, border: `1px solid ${cor}30` }}
          >
            {icon}
          </div>
          <span
            className="tag-badge"
            style={{
              background: `${cor}15`,
              border: `1px solid ${cor}40`,
              color: cor,
            }}
          >
            {badge}
          </span>
        </div>

        <h3
          className="text-lg font-bold mb-1"
          style={{ fontFamily: "'Orbitron', sans-serif", color: cor }}
        >
          {titulo}
        </h3>
        <p
          className="text-xs mb-3"
          style={{ color: `${cor}80`, fontFamily: "'Space Mono', monospace" }}
        >
          {subtitulo}
        </p>
        <p
          className="text-sm text-muted-foreground leading-relaxed"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {descricao}
        </p>
      </div>
    </motion.div>
  );
}

/* ---- Componente: Card de Perfil (Inovador/Investidor/Empresa) ---- */
function PerfilCard({
  icon,
  titulo,
  subtitulo,
  descricao,
  beneficios,
  cor,
  delay,
}: {
  icon: React.ReactNode;
  titulo: string;
  subtitulo: string;
  descricao: string;
  beneficios: string[];
  cor: string;
  delay: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 12, y: -x * 12 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease",
      }}
      className="relative rounded-xl p-8 group"
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "rgba(10, 10, 15, 0.9)",
          border: `1px solid ${cor}30`,
          boxShadow: `0 0 30px ${cor}10`,
        }}
      />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, ${cor}12, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
          style={{
            background: `linear-gradient(135deg, ${cor}20, ${cor}05)`,
            border: `1px solid ${cor}40`,
            boxShadow: `0 0 20px ${cor}20`,
          }}
        >
          {icon}
        </div>

        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: "'Orbitron', sans-serif", color: cor }}
        >
          {titulo}
        </h3>
        <p
          className="text-sm text-muted-foreground mb-5 leading-relaxed"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {descricao}
        </p>

        <ul className="space-y-2">
          {beneficios.map((b, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-xs"
              style={{ fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.7)" }}
            >
              <ChevronRight size={12} style={{ color: cor, flexShrink: 0 }} />
              {b}
            </li>
          ))}
        </ul>

        <Link href="/cadastro">
          <button
            className="mt-6 w-full py-2 rounded text-xs font-bold transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: "0.1em",
              background: `linear-gradient(135deg, ${cor}20, ${cor}05)`,
              border: `1px solid ${cor}50`,
              color: cor,
              boxShadow: `0 0 15px ${cor}10`,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.boxShadow = `0 0 25px ${cor}40`;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.boxShadow = `0 0 15px ${cor}10`;
            }}
          >
            CADASTRAR →
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

/* ---- Componente: Card de Ideia Coletiva ---- */
function IdeiaCard({ ideia }: { ideia: (typeof ideiasColetivas)[0] }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(ideia.curtidas);

  return (
    <div
      className="flex-shrink-0 w-72 rounded-lg p-4 relative"
      style={{
        background: "rgba(10, 10, 15, 0.9)",
        border: `1px solid ${ideia.cor}30`,
        boxShadow: `0 0 15px ${ideia.cor}10`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
        style={{ background: `linear-gradient(90deg, transparent, ${ideia.cor}, transparent)` }}
      />

      <div className="flex items-start justify-between mb-3">
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
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {ideia.tempo}
        </span>
      </div>

      <h4
        className="text-sm font-bold mb-2 text-foreground leading-snug"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {ideia.titulo}
      </h4>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: `${ideia.cor}20`, color: ideia.cor, fontSize: "0.6rem" }}
          >
            {ideia.autor.charAt(0)}
          </div>
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {ideia.autor}
          </span>
        </div>

        <button
          onClick={() => {
            setLiked(!liked);
            setLikes(liked ? likes - 1 : likes + 1);
          }}
          className="flex items-center gap-1 text-xs transition-all hover:scale-110"
          style={{ color: liked ? ideia.cor : "rgba(255,255,255,0.4)" }}
        >
          <Zap size={12} fill={liked ? ideia.cor : "none"} />
          {likes.toLocaleString()}
        </button>
      </div>
    </div>
  );
}

/* ---- Componente: Agente IA Demo ---- */
function AgenteDemoSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<{ role: "ai" | "user"; text: string }[]>([
    { role: "ai", text: aiFlow[0].pergunta },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user" as const, text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      const nextStep = currentStep + 1;
      if (nextStep < aiFlow.length) {
        setMessages([
          ...newMessages,
          { role: "ai", text: aiFlow[nextStep].pergunta },
        ]);
        setCurrentStep(nextStep);
      } else {
        setMessages([
          ...newMessages,
          {
            role: "ai",
            text: "✅ Perfeito! Sua ideia foi estruturada com sucesso. Gerando seu **Card de Inovação** com Timestamp de Proteção...",
          },
        ]);
      }
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left: Steps */}
      <div>
        <div className="space-y-3">
          {aiFlow.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                i <= currentStep ? "opacity-100" : "opacity-40"
              }`}
              style={{
                background: i === currentStep ? "rgba(0, 240, 255, 0.08)" : "transparent",
                border: i === currentStep ? "1px solid rgba(0, 240, 255, 0.3)" : "1px solid transparent",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                style={{
                  background: i <= currentStep ? "rgba(0, 240, 255, 0.2)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${i <= currentStep ? "rgba(0, 240, 255, 0.5)" : "rgba(255,255,255,0.1)"}`,
                  color: i <= currentStep ? "#00f0ff" : "rgba(255,255,255,0.3)",
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: "0.7rem",
                }}
              >
                {i < currentStep ? "✓" : step.step}
              </div>
              <div>
                <div
                  className="text-xs font-bold"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: i <= currentStep ? "#00f0ff" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {step.icon} {step.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Chat Interface */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "rgba(10, 10, 15, 0.95)",
          border: "1px solid rgba(0, 240, 255, 0.2)",
          boxShadow: "0 0 40px rgba(0, 240, 255, 0.1)",
        }}
      >
        {/* Chat Header */}
        <div
          className="px-4 py-3 flex items-center gap-3"
          style={{
            background: "rgba(0, 240, 255, 0.05)",
            borderBottom: "1px solid rgba(0, 240, 255, 0.15)",
          }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #00f0ff, #b000ff)" }}
          >
            <Brain size={16} style={{ color: "#0a0a0f" }} />
          </div>
          <div>
            <div
              className="text-xs font-bold text-neon"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              AGENTE 1IDEIA
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "neonPulse 2s infinite" }} />
              <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
                online
              </span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={chatRef}
          className="p-4 space-y-3 overflow-y-auto"
          style={{ height: "280px" }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-3 text-xs leading-relaxed ${
                  msg.role === "ai" ? "chat-bubble-ai" : "chat-bubble-user"
                }`}
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="chat-bubble-ai p-3">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "#00f0ff",
                        animation: `blink 1s step-end ${i * 0.3}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div
          className="p-3 flex gap-2"
          style={{ borderTop: "1px solid rgba(0, 240, 255, 0.15)" }}
        >
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua resposta..."
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none"
            style={{
              fontFamily: "'Space Mono', monospace",
              padding: "8px 12px",
              border: "1px solid rgba(0, 240, 255, 0.2)",
              borderRadius: "6px",
              background: "rgba(0, 240, 255, 0.03)",
            }}
          />
          <button
            onClick={handleSend}
            className="btn-neon px-3 py-2 rounded text-xs"
            disabled={!userInput.trim()}
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- PÁGINA PRINCIPAL ---- */
export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % (ideiasColetivas.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen"
     
    >
      <NeonCursor />
      <Navbar />

      {/* ============ HERO ============ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden grid-bg"
        style={{ paddingTop: "64px" }}
      >
        {/* Hero Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663522868462/bWQPLnoKodyam2oWy3F7tp/hero-bg_d16559d9.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,10,15,0.4) 0%, rgba(10,10,15,0.7) 60%, rgba(10,10,15,1) 100%)",
          }}
        />

        <ParticleField />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0, 240, 255, 0.08)",
                border: "1px solid rgba(0, 240, 255, 0.3)",
              }}
            >
              <div className="w-2 h-2 rounded-full neon-pulse" style={{ background: "#00f0ff" }} />
              <span
                className="text-xs text-neon"
                style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.15em" }}
              >
                MVP VALIDADO — ECOSSISTEMA DE INOVAÇÃO ABERTA
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="text-foreground">INOVAÇÃO</span>
              <br />
              <span className="gradient-text">NÃO PRECISA</span>
              <br />
              <span className="text-foreground">DE LABORATÓRIO</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              A ponte entre o{" "}
              <span className="text-gold">gênio anônimo</span> e o{" "}
              <span className="text-neon">capital industrial</span>. Conectamos
              inovadores, investidores e empresas em um ecossistema de inovação aberta.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/cadastro">
                <button className="btn-neon px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                  <Zap size={16} />
                  TENHO 1 IDEIA
                </button>
              </Link>
              <Link href="/busca">
                <button
                  className="px-8 py-4 rounded-lg text-sm flex items-center gap-2 transition-all hover:scale-105"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255, 215, 0, 0.4)",
                    color: "#FFD700",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "0.1em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Globe size={16} />
                  EXPLORAR IDEIAS
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { label: "Inovadores", value: "12.4K", cor: "#00f0ff" },
                { label: "Ideias Publicadas", value: "48.7K", cor: "#FFD700" },
                { label: "Empresas Parceiras", value: "340+", cor: "#b000ff" },
                { label: "Investimentos", value: "R$ 2.1M", cor: "#00f0ff" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-black"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: stat.cor,
                      textShadow: `0 0 15px ${stat.cor}60`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Space Mono', monospace" }}>
            scroll
          </span>
          <div
            className="w-0.5 h-8"
            style={{
              background: "linear-gradient(to bottom, rgba(0, 240, 255, 0.6), transparent)",
              animation: "scanline 2s linear infinite",
            }}
          />
        </div>
      </section>

      {/* ============ PILARES DO ECOSSISTEMA ============ */}
      <section className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="text-xs text-neon mb-3 block"
              style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
            >
              OS PILARES DO ECOSSISTEMA
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              TRÊS PERFIS,{" "}
              <span className="gradient-text">UM ECOSSISTEMA</span>
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              O sistema opera através de três perfis interconectados, com regras de entrada
              rigorosas para garantir a qualidade e eliminar o ruído.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PerfilCard
              icon={<Lightbulb size={28} style={{ color: "#00f0ff" }} />}
              titulo="INOVADORES"
              subtitulo="O Motor Criativo"
              descricao="Pessoas comuns que identificam falhas em produtos ou criam soluções do zero, mas carecem de network ou capital."
              beneficios={[
                "3 publicações gratuitas",
                "Integração com LinkedIn",
                "Ranking Inovador do Mês",
                "Proteção por Timestamp",
                "Validação por CPF/Documentos",
              ]}
              cor="#00f0ff"
              delay={0}
            />
            <PerfilCard
              icon={<TrendingUp size={28} style={{ color: "#FFD700" }} />}
              titulo="INVESTIDORES"
              subtitulo="O Combustível"
              descricao="Indivíduos ou fundos em busca de ativos de inovação pré-validados (MVPs e Patentes) com feed curado por IA."
              beneficios={[
                "Feed curado por IA",
                "Áreas de Interesse personalizadas",
                "Acesso a Ideias Incrementais",
                "Validação por CPF/Razão Social",
                "Tokens para desbloquear detalhes",
              ]}
              cor="#FFD700"
              delay={0.2}
            />
            <PerfilCard
              icon={<Building2 size={28} style={{ color: "#b000ff" }} />}
              titulo="EMPRESAS"
              subtitulo="O Destino"
              descricao="Marcas que buscam P&D ágil, design incremental e inteligência de mercado com Ranking de Reputação."
              beneficios={[
                "Monitoramento de menções",
                "Compra de soluções validadas",
                "Ranking de Reputação público",
                "Agente de IA Corporativo",
                "Cadastro via CNPJ",
              ]}
              cor="#b000ff"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ TIPOS DE IDEIA ============ */}
      <section className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="text-xs text-gold mb-3 block"
              style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
            >
              TAXONOMIA DA INOVAÇÃO
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              TRÊS CAMINHOS PARA{" "}
              <span className="gradient-text-gold">INOVAR</span>
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              O botão "TENHO 1 IDEIA" bifurca-se em três caminhos estratégicos,
              cada um com seu propósito e nível de proteção.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <IdeiaTypeCard
              icon={<Globe size={24} style={{ color: "#00f0ff" }} />}
              titulo="IDEIAS COLETIVAS"
              subtitulo="Open Social"
              descricao="O 'Reddit' da plataforma. Comentários públicos sobre produtos existentes. Usuários curtem, comentam e complementam. Compartilhável no LinkedIn."
              cor="#00f0ff"
              badge="OPEN"
              delay={0}
            />
            <IdeiaTypeCard
              icon={<Lock size={24} style={{ color: "#FFD700" }} />}
              titulo="IDEIAS INCREMENTAIS"
              subtitulo="B2B Direcionado"
              descricao="Proposta de melhoria específica para um produto de uma empresa. Fluxo fechado — apenas a empresa citada ou investidores com tokens podem visualizar."
              cor="#FFD700"
              badge="B2B"
              delay={0.2}
            />
            <IdeiaTypeCard
              icon={<Shield size={24} style={{ color: "#b000ff" }} />}
              titulo="IDEIAS INOVADORAS"
              subtitulo="Deep Tech / Disruptivas"
              descricao="Produtos que não existem. Critérios rigorosos. Proteção absoluta com Carimbo de Tempo digital no momento do envio, garantindo propriedade intelectual."
              cor="#b000ff"
              badge="DEEP TECH"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ CARROSSEL DE IDEIAS ============ */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <span
                className="text-xs text-neon mb-2 block"
                style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
              >
                IDEIAS EM DESTAQUE
              </span>
              <h2
                className="text-2xl font-black"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                FEED AO VIVO
              </h2>
            </div>
            <Link href="/busca">
              <button
                className="text-xs flex items-center gap-1 transition-colors hover:text-neon"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "rgba(0, 240, 255, 0.6)",
                }}
              >
                Ver todas <ArrowRight size={12} />
              </button>
            </Link>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: -carouselIndex * 296 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {ideiasColetivas.map((ideia) => (
                <IdeiaCard key={ideia.id} ideia={ideia} />
              ))}
            </motion.div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: ideiasColetivas.length - 2 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === carouselIndex ? "24px" : "8px",
                  height: "8px",
                  background: i === carouselIndex ? "#00f0ff" : "rgba(0, 240, 255, 0.2)",
                  boxShadow: i === carouselIndex ? "0 0 8px rgba(0, 240, 255, 0.6)" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ AGENTE DE IA ============ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0, 240, 255, 0.03) 0%, rgba(10,10,15,1) 50%, rgba(176, 0, 255, 0.03) 100%)",
        }}
      >
        {/* AI Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663522868462/bWQPLnoKodyam2oWy3F7tp/ai-agent-bg_dbc8a8db.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 10, 15, 0.85)" }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="text-xs text-neon mb-3 block"
              style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
            >
              INTELIGÊNCIA ARTIFICIAL
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              O AGENTE{" "}
              <span className="gradient-text">INOVE</span>
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Nosso Agente de IA atua como um consultor de engenharia em tempo real,
              filtrando o que é ruído e entregando para a empresa um projeto pronto para ser avaliado.
              Reduz o custo de triagem em 90%.
            </p>
          </motion.div>

          <AgenteDemoSection />

          {/* Card de Resultado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 p-6 rounded-xl"
            style={{
              background: "rgba(10, 10, 15, 0.9)",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={20} className="text-gold" />
              <h3
                className="text-lg font-bold text-gold"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                CARD DE INOVAÇÃO GERADO
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { label: "Título de Impacto", desc: "Sistema Anti-Desperdício para Embalagens de Líquidos", icon: "🏷️" },
                { label: "Tag de Categoria", desc: "Design Incremental / Setor: Limpeza", icon: "📂" },
                { label: "Descrição Técnica", desc: "Redigida pela IA com terminologia corporativa", icon: "📝" },
                { label: "Análise de Viabilidade", desc: "Busca automática de soluções similares", icon: "🔍" },
                { label: "Status de Proteção", desc: "Timestamp Digital Registrado ✓", icon: "🛡️" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg text-center"
                  style={{
                    background: "rgba(0, 240, 255, 0.05)",
                    border: "1px solid rgba(0, 240, 255, 0.15)",
                  }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div
                    className="text-xs font-bold text-neon mb-1"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ RANKING ============ */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Ranking */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span
                  className="text-xs text-gold mb-3 block"
                  style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
                >
                  GAMIFICAÇÃO
                </span>
                <h2
                  className="text-3xl font-black mb-6"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  INOVADOR DO{" "}
                  <span className="gradient-text-gold">MÊS</span>
                </h2>
              </motion.div>

              <div className="space-y-3">
                {ranking.map((item, i) => (
                  <motion.div
                    key={item.pos}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg"
                    style={{
                      background: item.pos === 1 ? "rgba(255, 215, 0, 0.08)" : "rgba(10, 10, 15, 0.8)",
                      border: `1px solid ${item.pos === 1 ? "rgba(255, 215, 0, 0.3)" : "rgba(255,255,255,0.05)"}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        background:
                          item.pos === 1
                            ? "linear-gradient(135deg, #FFD700, #ff8c00)"
                            : item.pos === 2
                            ? "linear-gradient(135deg, #C0C0C0, #808080)"
                            : item.pos === 3
                            ? "linear-gradient(135deg, #CD7F32, #8B4513)"
                            : "rgba(255,255,255,0.1)",
                        color: item.pos <= 3 ? "#0a0a0f" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.pos}
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: "rgba(0, 240, 255, 0.15)",
                        border: "1px solid rgba(0, 240, 255, 0.3)",
                        color: "#00f0ff",
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      {item.avatar}
                    </div>

                    <div className="flex-1">
                      <div
                        className="text-sm font-bold text-foreground"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {item.nome}
                      </div>
                      <div
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {item.ideias} ideias publicadas
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className="text-sm font-black"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          color: item.pos === 1 ? "#FFD700" : "#00f0ff",
                        }}
                      >
                        {item.pontos.toLocaleString()}
                      </div>
                      <div
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        pts
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Monetização */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span
                  className="text-xs text-neon mb-3 block"
                  style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
                >
                  MODELO DE NEGÓCIO
                </span>
                <h2
                  className="text-3xl font-black mb-6"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  COMO A{" "}
                  <span className="gradient-text">PLATAFORMA</span>
                  <br />
                  GERA RECEITA
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Coins size={20} style={{ color: "#FFD700" }} />,
                    titulo: "Economia de Tokens",
                    desc: "Investidores e Empresas compram tokens para desbloquear detalhes técnicos de ideias.",
                    cor: "#FFD700",
                  },
                  {
                    icon: <Cpu size={20} style={{ color: "#00f0ff" }} />,
                    titulo: "SaaS Corporativo",
                    desc: "Empresas pagam mensalidade pelo Agente de IA Corporativo que filtra e qualifica sugestões.",
                    cor: "#00f0ff",
                  },
                  {
                    icon: <BarChart3 size={20} style={{ color: "#b000ff" }} />,
                    titulo: "Data Intelligence",
                    desc: "Relatórios de tendências baseados nas Ideias Coletivas para inteligência de mercado.",
                    cor: "#b000ff",
                  },
                  {
                    icon: <Sparkles size={20} style={{ color: "#00f0ff" }} />,
                    titulo: "Taxa de Refino",
                    desc: "Cobrança opcional para o Inovador usar a IA generativa para estruturar sua ideia.",
                    cor: "#00f0ff",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-lg"
                    style={{
                      background: "rgba(10, 10, 15, 0.8)",
                      border: `1px solid ${item.cor}20`,
                    }}
                  >
                    <div
                      className="p-2 rounded-lg inline-flex mb-3"
                      style={{ background: `${item.cor}15` }}
                    >
                      {item.icon}
                    </div>
                    <h4
                      className="text-sm font-bold mb-1"
                      style={{ fontFamily: "'Orbitron', sans-serif", color: item.cor }}
                    >
                      {item.titulo}
                    </h4>
                    <p
                      className="text-xs text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ============ ECOSSISTEMA VISUAL ============ */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663522868462/bWQPLnoKodyam2oWy3F7tp/ecosystem-visual_a55652b5.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10, 10, 15, 0.85)" }} />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-5xl font-black mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              PRONTO PARA{" "}
              <span className="gradient-text">REVOLUCIONAR</span>
              <br />A INOVAÇÃO?
            </h2>
            <p
              className="text-muted-foreground max-w-xl mx-auto mb-10"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Junte-se ao ecossistema que conecta o gênio das ruas ao capital industrial.
              Sua próxima grande ideia pode mudar o mundo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/cadastro">
                <button className="btn-neon px-10 py-4 rounded-lg text-sm flex items-center gap-2">
                  <Zap size={18} />
                  COMEÇAR AGORA — É GRÁTIS
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

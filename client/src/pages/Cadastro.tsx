/* ============================================================
   1IDEIA — Cadastro.tsx
   Design: NeoFuturo Ultra Dark High-Tech
   Fluxo: Seleção de Perfil → Formulário → Confirmação
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb, TrendingUp, Building2, ChevronRight,
  User, Mail, Phone, FileText, Briefcase, Check, Zap, ArrowLeft
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonCursor from "@/components/NeonCursor";
import { toast } from "sonner";

type Perfil = "inovador" | "investidor" | "empresa" | null;

const perfis = [
  {
    id: "inovador" as Perfil,
    icon: <Lightbulb size={32} />,
    titulo: "INOVADOR",
    subtitulo: "O Motor Criativo",
    descricao: "Tenho ideias que podem resolver problemas reais. Quero transformar minha criatividade em valor.",
    cor: "#00f0ff",
    campos: ["CPF", "Documentos Comprobatórios", "LinkedIn (opcional)"],
    beneficios: ["3 publicações gratuitas", "Proteção por Timestamp", "Ranking Inovador do Mês"],
  },
  {
    id: "investidor" as Perfil,
    icon: <TrendingUp size={32} />,
    titulo: "INVESTIDOR",
    subtitulo: "O Combustível",
    descricao: "Busco ativos de inovação pré-validados. Quero acesso a MVPs e patentes com feed curado por IA.",
    cor: "#FFD700",
    campos: ["CPF", "Razão Social (opcional)", "Áreas de Interesse"],
    beneficios: ["Feed curado por IA", "Créditos de acesso", "Relatórios de tendências"],
  },
  {
    id: "empresa" as Perfil,
    icon: <Building2 size={32} />,
    titulo: "EMPRESA",
    subtitulo: "O Destino",
    descricao: "Busco P&D ágil e inteligência de mercado. Quero monitorar menções e comprar soluções validadas.",
    cor: "#b000ff",
    campos: ["CNPJ", "E-mail Corporativo", "Setor de Atuação"],
    beneficios: ["Agente de IA Corporativo", "Ranking de Reputação", "Compra de soluções"],
  },
];

const areasInteresse = [
  "Agronegócio", "Fintech", "Saúde", "Educação", "Logística",
  "Energia", "Varejo", "Indústria", "Tecnologia", "Sustentabilidade"
];

export default function Cadastro() {
  const [perfilSelecionado, setPerfilSelecionado] = useState<Perfil>(null);
  const [step, setStep] = useState<"selecao" | "formulario" | "sucesso">("selecao");
  const [areasSelected, setAreasSelected] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    nome: "", email: "", telefone: "", documento: "", empresa: "", setor: ""
  });

  const perfilAtual = perfis.find(p => p.id === perfilSelecionado);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    setStep("sucesso");
    toast.success("Cadastro realizado com sucesso! Bem-vindo ao ecossistema.");
  };

  const toggleArea = (area: string) => {
    setAreasSelected(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f" }}>
      <NeonCursor />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span
              className="text-xs text-neon mb-3 block"
              style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
            >
              ACESSO AO ECOSSISTEMA
            </span>
            <h1
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {step === "selecao" && <><span className="gradient-text">QUAL É</span> SEU PERFIL?</>}
              {step === "formulario" && <>SEUS <span className="gradient-text">DADOS</span></>}
              {step === "sucesso" && <>BEM-VINDO AO <span className="gradient-text">ECOSSISTEMA</span></>}
            </h1>

            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {["selecao", "formulario", "sucesso"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      background: step === s || (i === 0 && step !== "selecao") || (i <= 1 && step === "sucesso")
                        ? "linear-gradient(135deg, #00f0ff, #b000ff)"
                        : "rgba(255,255,255,0.1)",
                      color: step === s || (i === 0 && step !== "selecao") || (i <= 1 && step === "sucesso")
                        ? "#0a0a0f"
                        : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {(i === 0 && step !== "selecao") || (i <= 1 && step === "sucesso") ? "✓" : i + 1}
                  </div>
                  {i < 2 && (
                    <div
                      className="w-8 h-0.5"
                      style={{
                        background: (i === 0 && step !== "selecao") || (i <= 0 && step === "sucesso")
                          ? "rgba(0, 240, 255, 0.6)"
                          : "rgba(255,255,255,0.1)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Seleção de Perfil */}
            {step === "selecao" && (
              <motion.div
                key="selecao"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {perfis.map((perfil) => (
                    <motion.button
                      key={perfil.id}
                      onClick={() => {
                        setPerfilSelecionado(perfil.id);
                        setStep("formulario");
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative p-6 rounded-xl text-left group"
                      style={{
                        background: "rgba(10, 10, 15, 0.9)",
                        border: `1px solid ${perfil.cor}30`,
                        boxShadow: `0 0 20px ${perfil.cor}10`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${perfil.cor}60`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${perfil.cor}25`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${perfil.cor}30`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${perfil.cor}10`;
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${perfil.cor}, transparent)` }}
                      />

                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: `${perfil.cor}15`,
                          border: `1px solid ${perfil.cor}40`,
                          color: perfil.cor,
                        }}
                      >
                        {perfil.icon}
                      </div>

                      <h3
                        className="text-lg font-black mb-1"
                        style={{ fontFamily: "'Orbitron', sans-serif", color: perfil.cor }}
                      >
                        {perfil.titulo}
                      </h3>
                      <p
                        className="text-xs mb-3"
                        style={{ color: `${perfil.cor}70`, fontFamily: "'Space Mono', monospace" }}
                      >
                        {perfil.subtitulo}
                      </p>
                      <p
                        className="text-sm text-muted-foreground mb-4 leading-relaxed"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {perfil.descricao}
                      </p>

                      <ul className="space-y-1 mb-4">
                        {perfil.beneficios.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs"
                            style={{ fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.6)" }}
                          >
                            <Check size={10} style={{ color: perfil.cor }} />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div
                        className="flex items-center gap-2 text-xs font-bold"
                        style={{ fontFamily: "'Orbitron', sans-serif", color: perfil.cor }}
                      >
                        SELECIONAR <ChevronRight size={14} />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Formulário */}
            {step === "formulario" && perfilAtual && (
              <motion.div
                key="formulario"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <button
                  onClick={() => setStep("selecao")}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors mb-8"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  <ArrowLeft size={14} /> Voltar
                </button>

                <div
                  className="rounded-xl p-8"
                  style={{
                    background: "rgba(10, 10, 15, 0.9)",
                    border: `1px solid ${perfilAtual.cor}30`,
                    boxShadow: `0 0 40px ${perfilAtual.cor}10`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${perfilAtual.cor}15`,
                        border: `1px solid ${perfilAtual.cor}40`,
                        color: perfilAtual.cor,
                      }}
                    >
                      {perfilAtual.icon}
                    </div>
                    <div>
                      <h2
                        className="text-xl font-black"
                        style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                      >
                        {perfilAtual.titulo}
                      </h2>
                      <p
                        className="text-xs text-muted-foreground"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {perfilAtual.subtitulo}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Nome */}
                      <div>
                        <label
                          className="block text-xs font-bold mb-2"
                          style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                        >
                          NOME COMPLETO *
                        </label>
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={formData.nome}
                            onChange={e => setFormData({...formData, nome: e.target.value})}
                            className="w-full pl-9 pr-4 py-3 rounded-lg bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              border: `1px solid ${perfilAtual.cor}30`,
                              background: `${perfilAtual.cor}05`,
                            }}
                            placeholder="Seu nome completo"
                            onFocus={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}60`}
                            onBlur={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}30`}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-xs font-bold mb-2"
                          style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                        >
                          E-MAIL *
                        </label>
                        <div className="relative">
                          <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full pl-9 pr-4 py-3 rounded-lg bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              border: `1px solid ${perfilAtual.cor}30`,
                              background: `${perfilAtual.cor}05`,
                            }}
                            placeholder={perfilAtual.id === "empresa" ? "email@empresa.com.br" : "seu@email.com"}
                            onFocus={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}60`}
                            onBlur={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}30`}
                          />
                        </div>
                      </div>

                      {/* Telefone */}
                      <div>
                        <label
                          className="block text-xs font-bold mb-2"
                          style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                        >
                          TELEFONE
                        </label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="tel"
                            value={formData.telefone}
                            onChange={e => setFormData({...formData, telefone: e.target.value})}
                            className="w-full pl-9 pr-4 py-3 rounded-lg bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              border: `1px solid ${perfilAtual.cor}30`,
                              background: `${perfilAtual.cor}05`,
                            }}
                            placeholder="(11) 99999-9999"
                            onFocus={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}60`}
                            onBlur={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}30`}
                          />
                        </div>
                      </div>

                      {/* Documento */}
                      <div>
                        <label
                          className="block text-xs font-bold mb-2"
                          style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                        >
                          {perfilAtual.id === "empresa" ? "CNPJ *" : "CPF *"}
                        </label>
                        <div className="relative">
                          <FileText size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={formData.documento}
                            onChange={e => setFormData({...formData, documento: e.target.value})}
                            className="w-full pl-9 pr-4 py-3 rounded-lg bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                            style={{
                              fontFamily: "'Space Mono', monospace",
                              border: `1px solid ${perfilAtual.cor}30`,
                              background: `${perfilAtual.cor}05`,
                            }}
                            placeholder={perfilAtual.id === "empresa" ? "00.000.000/0001-00" : "000.000.000-00"}
                            onFocus={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}60`}
                            onBlur={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}30`}
                          />
                        </div>
                      </div>

                      {/* Empresa/Razão Social */}
                      {(perfilAtual.id === "empresa" || perfilAtual.id === "investidor") && (
                        <div className="md:col-span-2">
                          <label
                            className="block text-xs font-bold mb-2"
                            style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                          >
                            {perfilAtual.id === "empresa" ? "NOME DA EMPRESA *" : "RAZÃO SOCIAL (OPCIONAL)"}
                          </label>
                          <div className="relative">
                            <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                              type="text"
                              value={formData.empresa}
                              onChange={e => setFormData({...formData, empresa: e.target.value})}
                              className="w-full pl-9 pr-4 py-3 rounded-lg bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                              style={{
                                fontFamily: "'Space Mono', monospace",
                                border: `1px solid ${perfilAtual.cor}30`,
                                background: `${perfilAtual.cor}05`,
                              }}
                              placeholder="Nome da empresa ou razão social"
                              onFocus={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}60`}
                              onBlur={e => (e.target as HTMLElement).style.borderColor = `${perfilAtual.cor}30`}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Áreas de Interesse (Investidor) */}
                    {perfilAtual.id === "investidor" && (
                      <div>
                        <label
                          className="block text-xs font-bold mb-3"
                          style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                        >
                          ÁREAS DE INTERESSE
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {areasInteresse.map(area => (
                            <button
                              key={area}
                              type="button"
                              onClick={() => toggleArea(area)}
                              className="tag-badge transition-all"
                              style={{
                                background: areasSelected.includes(area) ? `${perfilAtual.cor}25` : "transparent",
                                border: `1px solid ${areasSelected.includes(area) ? perfilAtual.cor : `${perfilAtual.cor}30`}`,
                                color: areasSelected.includes(area) ? perfilAtual.cor : "rgba(255,255,255,0.5)",
                                padding: "6px 12px",
                              }}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Termos */}
                    <div
                      className="flex items-start gap-3 p-4 rounded-lg"
                      style={{ background: "rgba(0, 240, 255, 0.05)", border: "1px solid rgba(0, 240, 255, 0.15)" }}
                    >
                      <input type="checkbox" required id="termos" className="mt-1" />
                      <label
                        htmlFor="termos"
                        className="text-xs text-muted-foreground leading-relaxed"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Concordo com os{" "}
                        <Link href="/termos">
                          <span className="text-neon hover:underline">Termos de Uso</span>
                        </Link>{" "}
                        e a{" "}
                        <Link href="/termos">
                          <span className="text-neon hover:underline">Política de Privacidade</span>
                        </Link>
                        . Entendo que meus dados serão usados para validação jurídica da titularidade das ideias.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn-neon w-full py-4 rounded-lg text-sm flex items-center justify-center gap-2"
                    >
                      <Zap size={16} />
                      CRIAR MINHA CONTA
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Sucesso */}
            {step === "sucesso" && perfilAtual && (
              <motion.div
                key="sucesso"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 seal-stamp"
                  style={{
                    background: `linear-gradient(135deg, ${perfilAtual.cor}30, ${perfilAtual.cor}10)`,
                    border: `2px solid ${perfilAtual.cor}`,
                    boxShadow: `0 0 40px ${perfilAtual.cor}40`,
                  }}
                >
                  <Check size={40} style={{ color: perfilAtual.cor }} />
                </motion.div>

                <h2
                  className="text-3xl font-black mb-4"
                  style={{ fontFamily: "'Orbitron', sans-serif", color: perfilAtual.cor }}
                >
                  CADASTRO REALIZADO!
                </h2>
                <p
                  className="text-muted-foreground mb-2"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Bem-vindo ao ecossistema 1Ideia, {formData.nome || "Inovador"}!
                </p>
                <p
                  className="text-sm text-muted-foreground mb-8"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Verifique seu e-mail para ativar sua conta.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/">
                    <button className="btn-neon px-8 py-3 rounded-lg text-sm flex items-center gap-2">
                      <Zap size={14} />
                      IR PARA O INÍCIO
                    </button>
                  </Link>
                  <Link href="/busca">
                    <button
                      className="px-8 py-3 rounded-lg text-sm flex items-center gap-2 transition-all hover:scale-105"
                      style={{
                        border: `1px solid ${perfilAtual.cor}40`,
                        color: perfilAtual.cor,
                        fontFamily: "'Orbitron', sans-serif",
                        letterSpacing: "0.1em",
                      }}
                    >
                      EXPLORAR IDEIAS
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

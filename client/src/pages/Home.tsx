/*
   1IDEIA — Home.tsx (Refatorado)
   Design: Profissional Minimalista
   Seções: Hero, Proposta de Valor, Como Funciona, Validação, CTA
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Users, Lightbulb, TrendingUp, 
  Zap, Shield, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("inovadores");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transformamos ideias em projetos prontos para investimento
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Conectamos inovadores, investidores e empresas através de uma plataforma que valida, estrutura e monetiza ideias com inteligência artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cadastro">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-lg">
                    Cadastrar minha ideia <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/busca">
                  <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg">
                    Ver projetos validados
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Estatísticas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">12.4K</div>
                <p className="text-slate-600 text-sm">Inovadores Ativos</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">48.1K</div>
                <p className="text-slate-600 text-sm">Ideias Publicadas</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">340+</div>
                <p className="text-slate-600 text-sm">Empresas Parceiras</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-700 mb-2">R$ 2.1M</div>
                <p className="text-slate-600 text-sm">Investimentos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== COMO FUNCIONA ========== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Três passos simples para conectar inovação com oportunidades reais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Estruture sua Ideia</h3>
              <p className="text-slate-600 leading-relaxed">
                Nosso Agente IA guia você através de 6 perguntas para estruturar sua ideia de forma profissional e pronta para investidores.
              </p>
            </motion.div>

            {/* Passo 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Proteja sua Propriedade</h3>
              <p className="text-slate-600 leading-relaxed">
                Timestamp blockchain e certificação de autoria garantem que sua ideia está protegida desde o primeiro momento.
              </p>
            </motion.div>

            {/* Passo 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Monetize e Escale</h3>
              <p className="text-slate-600 leading-relaxed">
                Conecte com investidores, empresas e parceiros. Ganhe créditos e transforme sua ideia em negócio real.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PARA QUEM ========== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Para Quem é 1Ideia?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Conectamos os três pilares do ecossistema de inovação
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("inovadores")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "inovadores"
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Inovadores
            </button>
            <button
              onClick={() => setActiveTab("investidores")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "investidores"
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Investidores
            </button>
            <button
              onClick={() => setActiveTab("empresas")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "empresas"
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Empresas
            </button>
          </div>

          {/* Conteúdo Tabs */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50 p-12 rounded-lg border border-slate-200"
          >
            {activeTab === "inovadores" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Para Inovadores</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Estruture suas ideias com IA</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Proteção intelectual garantida</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Ganhe créditos e reconhecimento</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Conecte com investidores reais</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 h-64 rounded-lg flex items-center justify-center">
                  <Lightbulb className="text-blue-700" size={80} />
                </div>
              </div>
            )}

            {activeTab === "investidores" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Para Investidores</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Ideias pré-filtradas e validadas</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Due diligence facilitada</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Portfólio diversificado</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Acompanhamento em tempo real</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 h-64 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-blue-700" size={80} />
                </div>
              </div>
            )}

            {activeTab === "empresas" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Para Empresas</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Inovação aberta e escalável</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Parcerias estratégicas</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Redução de custos de P&D</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="text-blue-700 flex-shrink-0" size={20} />
                      <span className="text-slate-700">Vantagem competitiva</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 h-64 rounded-lg flex items-center justify-center">
                  <Globe className="text-blue-700" size={80} />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ========== VALIDAÇÃO / SOCIAL PROOF ========== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Confiam em 1Ideia</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Empresas, investidores e inovadores já transformam ideias em realidade
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Empresa A", "Empresa B", "Empresa C", "Empresa D"].map((empresa, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg border border-slate-200 text-center"
              >
                <div className="bg-slate-200 h-12 rounded mb-4"></div>
                <p className="text-slate-600 font-semibold">{empresa}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Pronto para transformar sua ideia?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de inovadores que já estão estruturando, protegendo e monetizando suas ideias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-6 text-lg rounded-lg font-semibold">
                  Começar Agora <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white px-8 py-6 text-lg rounded-lg font-semibold">
                Agendar Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

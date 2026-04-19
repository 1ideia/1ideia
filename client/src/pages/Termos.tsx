/* ============================================================
   1IDEIA — Termos.tsx
   Design: NeoFuturo Ultra Dark High-Tech
   ============================================================ */
import { motion } from "framer-motion";
import { Shield, FileText, Lock, Globe, Coins, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeonCursor from "@/components/NeonCursor";

const secoes = [
  {
    icon: <FileText size={20} />,
    titulo: "1. Aceitação dos Termos",
    cor: "#00f0ff",
    conteudo: `Ao acessar ou usar a plataforma 1Ideia, você concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar o serviço. Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o serviço.`,
  },
  {
    icon: <Shield size={20} />,
    titulo: "2. Propriedade Intelectual e Timestamp",
    cor: "#b000ff",
    conteudo: `A 1Ideia protege a propriedade intelectual dos Inovadores através de um sistema de Registro de Data/Hora (Timestamp Digital). No momento do envio de uma Ideia Inovadora, o sistema gera automaticamente um carimbo de tempo que serve como prova de anterioridade. Este registro não substitui o registro formal de patentes, mas constitui evidência de anterioridade reconhecida juridicamente. O Inovador mantém todos os direitos sobre sua ideia original.`,
  },
  {
    icon: <Lock size={20} />,
    titulo: "3. Privacidade e Proteção de Dados (LGPD)",
    cor: "#FFD700",
    conteudo: `Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), a 1Ideia coleta e processa dados pessoais apenas para as finalidades descritas nesta política. Os dados de CPF, RG e documentos comprobatórios são coletados exclusivamente para validação jurídica da titularidade das ideias. Não compartilhamos dados pessoais com terceiros sem consentimento explícito, exceto quando exigido por lei.`,
  },
  {
    icon: <Globe size={20} />,
    titulo: "4. Ideias Coletivas — Licença Open Social",
    cor: "#00f0ff",
    conteudo: `Ao publicar uma Ideia Coletiva, o usuário concede à plataforma uma licença não exclusiva, mundial e livre de royalties para exibir, distribuir e promover o conteúdo. O autor mantém a autoria e pode solicitar remoção a qualquer momento. Ideias Coletivas são públicas e indexáveis por mecanismos de busca. O compartilhamento no LinkedIn e outras redes sociais é incentivado e não altera os direitos do autor.`,
  },
  {
    icon: <Coins size={20} />,
    titulo: "5. Economia de Tokens",
    cor: "#b000ff",
    conteudo: `Tokens são a moeda interna da plataforma 1Ideia. Investidores e Empresas adquirem tokens para desbloquear detalhes técnicos de Ideias Incrementais e Inovadoras. Tokens não são reembolsáveis após uso. A 1Ideia reserva-se o direito de alterar o valor dos tokens com aviso prévio de 30 dias. Tokens não expiram e podem ser transferidos entre contas da mesma titularidade.`,
  },
  {
    icon: <AlertCircle size={20} />,
    titulo: "6. Responsabilidades e Limitações",
    cor: "#FFD700",
    conteudo: `A 1Ideia não se responsabiliza pela viabilidade técnica ou comercial das ideias publicadas. A plataforma atua como intermediária e não garante que empresas ou investidores adotarão as ideias apresentadas. O usuário é responsável pela veracidade das informações fornecidas. A 1Ideia reserva-se o direito de remover conteúdo que viole estes termos, leis aplicáveis ou direitos de terceiros.`,
  },
];

export default function Termos() {
  return (
    <div className="min-h-screen">
      <NeonCursor />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span
              className="text-xs text-neon mb-3 block"
              style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "0.2em" }}
            >
              DOCUMENTAÇÃO LEGAL
            </span>
            <h1
              className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              TERMOS DE <span className="gradient-text">USO</span>
            </h1>
            <div
              className="flex items-center gap-3 p-4 rounded-lg"
              style={{
                background: "rgba(0, 240, 255, 0.05)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <Shield size={16} className="text-neon flex-shrink-0" />
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Última atualização: Janeiro de 2024 · Versão 1.0 · Válido para todos os perfis da plataforma
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {secoes.map((secao, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(10, 10, 15, 0.9)",
                  border: `1px solid ${secao.cor}20`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: `${secao.cor}15`, color: secao.cor }}
                  >
                    {secao.icon}
                  </div>
                  <h2
                    className="text-base font-bold"
                    style={{ fontFamily: "'Orbitron', sans-serif", color: secao.cor }}
                  >
                    {secao.titulo}
                  </h2>
                </div>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {secao.conteudo}
                </p>
              </motion.div>
            ))}

            {/* Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(176, 0, 255, 0.05))",
                border: "1px solid rgba(0, 240, 255, 0.2)",
              }}
            >
              <h3
                className="text-lg font-bold text-neon mb-2"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                DÚVIDAS LEGAIS?
              </h3>
              <p
                className="text-sm text-muted-foreground mb-4"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Entre em contato com nossa equipe jurídica
              </p>
              <a
                href="mailto:legal@1ideia.com"
                className="text-neon text-sm hover:underline"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                legal@1ideia.com
              </a>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

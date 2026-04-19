/* NeoFuturo: Footer com links e informações da plataforma */
import { Link } from "wouter";
import { Zap, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: "rgba(0, 240, 255, 0.15)",
        background: "rgba(10, 10, 15, 0.95)",
      }}
    >
      <div className="section-divider" />
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="flex items-center gap-2 mb-4"
              style={{ fontFamily: "'Alfa Slab One', serif", fontSize: "1.8rem" }}
            >
              <span className="text-neon">1</span>
              <span className="text-foreground">IDEIA</span>
              <Zap
                size={18}
                className="text-gold"
                style={{ filter: "drop-shadow(0 0 6px rgba(255, 215, 0, 0.8))" }}
              />
            </div>
            <p
              className="text-muted-foreground text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Ecossistema de Inovação Aberta. A ponte entre o gênio anônimo e o capital industrial.
            </p>
            <p
              className="text-xs italic"
              style={{ color: "rgba(0, 240, 255, 0.6)", fontFamily: "'Space Mono', monospace" }}
            >
              "Inovação não precisa de laboratório, precisa de solução."
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border transition-all hover:border-neon hover:text-neon"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border transition-all hover:border-neon hover:text-neon"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4
              className="text-sm font-bold mb-4 text-neon"
              style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.1em" }}
            >
              PLATAFORMA
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/busca", label: "Explorar Ideias" },
                { href: "/cadastro", label: "Cadastro" },
                { href: "/dashboard", label: "Dashboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-muted-foreground hover:text-neon transition-colors"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-sm font-bold mb-4 text-gold"
              style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.1em" }}
            >
              LEGAL
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/termos", label: "Termos de Uso" },
                { href: "/termos", label: "Privacidade" },
                { href: "/termos", label: "Propriedade Intelectual" },
                { href: "/termos", label: "Política de Créditos" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>
                    <span
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            © 2024 1Ideia.com — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full neon-pulse"
              style={{ background: "#00f0ff" }}
            />
            <span
              className="text-xs"
              style={{ color: "rgba(0, 240, 255, 0.6)", fontFamily: "'Space Mono', monospace" }}
            >
              MVP VALIDADO — FASE DE DESENVOLVIMENTO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

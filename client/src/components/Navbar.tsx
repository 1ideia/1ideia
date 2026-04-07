/* NeoFuturo: Navbar com logo Alfa Slab One, links e toggle de tema */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/busca", label: "Explorar" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/termos", label: "Termos" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
      style={{ borderColor: "rgba(0, 240, 255, 0.15)" }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <span
            className="flex items-center gap-2 group"
            style={{ fontFamily: "'Alfa Slab One', serif", fontSize: "1.5rem" }}
          >
            <span
              className="text-neon"
              style={{
                textShadow: "0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4)",
              }}
            >
              1
            </span>
            <span className="text-foreground group-hover:text-neon transition-colors duration-300">
              IDEIA
            </span>
            <Zap
              size={16}
              className="text-gold"
              style={{ filter: "drop-shadow(0 0 6px rgba(255, 215, 0, 0.8))" }}
            />
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-sm transition-all duration-300 hover:text-neon ${
                  location === link.href ? "text-neon" : "text-muted-foreground"
                }`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.05em",
                  textShadow:
                    location === link.href
                      ? "0 0 10px rgba(0, 240, 255, 0.6)"
                      : "none",
                }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-neon transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(0, 240, 255, 0.05)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
            }}
            title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-gold" />
            ) : (
              <Moon size={16} className="text-neon" />
            )}
          </button>

          {/* CTA Button */}
          <Link href="/cadastro">
            <button className="hidden md:flex btn-neon px-4 py-2 rounded text-xs items-center gap-2">
              <Zap size={14} />
              ENTRAR
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-neon transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden glass border-t"
          style={{ borderColor: "rgba(0, 240, 255, 0.15)" }}
        >
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block py-2 text-sm transition-colors hover:text-neon ${
                    location === link.href ? "text-neon" : "text-muted-foreground"
                  }`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/cadastro">
              <button
                className="btn-neon w-full py-2 rounded text-xs mt-2"
                onClick={() => setMenuOpen(false)}
              >
                ENTRAR NA PLATAFORMA
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

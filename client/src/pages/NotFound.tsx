import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home } from "lucide-react";
import NeonCursor from "@/components/NeonCursor";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a0a0f" }}>
      <NeonCursor />
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-[120px] font-black leading-none mb-4"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: "linear-gradient(135deg, #00f0ff, #b000ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </div>
            <h2
              className="text-2xl font-bold text-foreground mb-3"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              PÁGINA NÃO ENCONTRADA
            </h2>
            <p
              className="text-muted-foreground mb-8"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Esta ideia ainda não existe no ecossistema.
            </p>
            <Link href="/">
              <button className="btn-neon px-8 py-3 rounded-lg text-sm flex items-center gap-2 mx-auto">
                <Home size={16} />
                VOLTAR AO INÍCIO
              </button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

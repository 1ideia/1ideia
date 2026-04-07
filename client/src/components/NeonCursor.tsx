/* NeoFuturo: Cursor personalizado com glow que ilumina o fundo escuro */
import { useEffect, useRef } from "react";

export default function NeonCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(0.8)";
        cursorRef.current.style.borderColor = "#FFD700";
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1)";
        cursorRef.current.style.borderColor = "#00f0ff";
      }
    };

    const handleMouseEnterLink = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1.8)";
        cursorRef.current.style.background = "rgba(0, 240, 255, 0.15)";
      }
    };

    const handleMouseLeaveLink = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = "scale(1)";
        cursorRef.current.style.background = "transparent";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnterLink);
      link.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }}
      />
      <div
        ref={glowRef}
        className="cursor-glow"
        style={{ position: "fixed", pointerEvents: "none", zIndex: 1 }}
      />
    </>
  );
}

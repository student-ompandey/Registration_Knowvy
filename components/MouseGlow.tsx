"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 dark:opacity-25"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 80%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </motion.div>
  );
}

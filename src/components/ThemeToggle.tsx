import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDark(false);
    else document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-lg"
      >
        {dark ? "🌙" : "☀️"}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;

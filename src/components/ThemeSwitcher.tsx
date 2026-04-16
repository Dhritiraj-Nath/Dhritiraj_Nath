import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Type } from "lucide-react";

const themes = [
  { id: "purple", name: "Purple", color: "bg-[#a855f7]" },
  { id: "blue", name: "Blue", color: "bg-[#3b82f6]" },
  { id: "green", name: "Green", color: "bg-[#22c55e]" },
  { id: "orange", name: "Orange", color: "bg-[#f97316]" },
  { id: "pink", name: "Pink", color: "bg-[#ec4899]" },
];

const fontPairs = [
  { id: "modern", name: "Modern Sans", desc: "Inter & Outfit" },
  { id: "tech", name: "Sleek Tech", desc: "Mono & Grotesk" },
  { id: "bold", name: "Futuristic", desc: "Syne & Urbanist" },
  { id: "elegant", name: "Elegant Serif", desc: "Lato & Playfair" },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("purple");
  const [activeFont, setActiveFont] = useState("modern");

  const changeTheme = (themeId: string) => {
    themes.forEach(t => document.documentElement.classList.remove(`theme-${t.id}`));
    if (themeId !== "purple") document.documentElement.classList.add(`theme-${themeId}`);
    setActiveTheme(themeId);
  };

  const changeFont = (fontId: string) => {
    fontPairs.forEach(f => document.documentElement.classList.remove(`font-${f.id}`));
    document.documentElement.classList.add(`font-${fontId}`);
    setActiveFont(fontId);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 glass p-5 rounded-2xl border border-primary/20 shadow-2xl min-w-[220px] max-h-[70vh] overflow-y-auto"
          >
            {/* Color Section */}
            <div className="mb-6">
              <p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4 px-2">
                <Palette size={12} /> Accent Color
              </p>
              <div className="flex flex-wrap gap-3 px-2">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => changeTheme(theme.id)}
                    title={theme.name}
                    className={`w-8 h-8 rounded-full ${theme.color} border-2 transition-transform hover:scale-110 ${
                      activeTheme === theme.id ? "border-white scale-110 shadow-lg" : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Font Section */}
            <div>
              <p className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4 px-2">
                <Type size={12} /> Typography
              </p>
              <div className="grid grid-cols-1 gap-2">
                {fontPairs.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => changeFont(font.id)}
                    className={`flex flex-col items-start gap-1 w-full p-3 rounded-xl transition-all ${
                      activeFont === font.id ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-primary/10 text-foreground"
                    }`}
                  >
                    <span className="text-sm font-bold">{font.name}</span>
                    <span className="text-[10px] opacity-70">{font.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => {
                changeTheme("purple");
                changeFont("modern");
              }}
              className="mt-6 w-full py-2 text-[10px] font-mono uppercase bg-muted hover:bg-muted/80 rounded-lg transition-colors"
            >
              Reset to Default
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/30 group"
      >
         {isOpen ? <X size={24} /> : <Palette size={24} />}
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;

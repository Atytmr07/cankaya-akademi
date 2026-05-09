"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "Programlar", href: "#programlar" },
  { label: "Şubelerimiz", href: "#subelerimiz" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-[#2D2E83] text-white text-xs sm:text-sm py-2 px-4 text-center tracking-wide">
        <span className="inline-flex items-center gap-4 flex-wrap justify-center">
          <span>📍 2 Şube ile Kepez&apos;de</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span>🚌 Servis İmkanımız Vardır</span>
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Brand */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <span className="text-xl sm:text-2xl font-extrabold text-[#2D2E83] tracking-tight">
                Çankaya
              </span>
              <span className="text-xl sm:text-2xl font-light text-[#E30A17]">
                Akademi
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-[#2D2E83] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#iletisim"
                className="inline-flex items-center px-5 py-2.5 bg-[#E30A17] text-white text-sm font-semibold rounded-xl hover:bg-[#c00812] transition-colors duration-200 cursor-pointer shadow-md shadow-red-200"
              >
                Ön Kayıt Formu
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#2D2E83] cursor-pointer"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="px-4 py-4 space-y-3 bg-white">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium text-slate-700 hover:text-[#2D2E83] py-2 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 bg-[#E30A17] text-white text-sm font-semibold rounded-xl hover:bg-[#c00812] transition-colors cursor-pointer"
                >
                  Ön Kayıt Formu
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

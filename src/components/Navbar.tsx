"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/cankayaakademi/";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = [
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "Programlar", href: "#programlar" },
  { label: "Şubelerimiz", href: "#subelerimiz" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

const tickers = [
  { icon: "📍", text: "2 Şube ile Kepez'de Hizmetinizdeyiz" },
  { icon: "🚌", text: "Servis İmkânımız Mevcuttur" },
  { icon: "⭐", text: "Google'da 5.0 Yıldız · Güvenilen Akademi" },
  { icon: "🎯", text: "LGS Hazırlık Kayıtları Devam Ediyor" },
  { icon: "📞", text: "Ücretsiz Danışmanlık · 0544 211 75 17" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setTickerIdx((i) => (i + 1) % tickers.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Rotating info bar ── */}
      <div className="bg-[#2D2E83] text-white text-xs sm:text-sm py-2 px-4 text-center overflow-hidden h-8 sm:h-9 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={tickerIdx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 font-medium tracking-wide"
          >
            <span>{tickers[tickerIdx].icon}</span>
            <span>{tickers[tickerIdx].text}</span>
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Main nav ── */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-[#d9dde8]/60 shadow-card-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 shrink-0">
              <span className="text-xl sm:text-2xl font-extrabold text-[#2D2E83] tracking-tight">
                Çankaya
              </span>
              <span className="text-xl sm:text-2xl font-light text-[#E30A17]">
                Akademi
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#586380] hover:text-[#2D2E83] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[#E30A17] hover:bg-[#E30A17]/8 transition-colors duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#iletisim"
                className="inline-flex items-center px-5 py-2.5 bg-[#E30A17] text-white text-sm font-bold rounded-full hover:bg-[#c00812] transition-colors duration-200 cursor-pointer shadow-card-sm"
              >
                Ön Kayıt Formu
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#586380] hover:text-[#2D2E83] cursor-pointer"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-[#d9dde8]/60"
            >
              <div className="px-4 py-4 space-y-3 bg-white">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium text-[#282e3e] hover:text-[#2D2E83] py-2 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 bg-[#E30A17] text-white text-sm font-bold rounded-full hover:bg-[#c00812] transition-colors cursor-pointer"
                >
                  Ön Kayıt Formu
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-[#d9dde8] text-[#2D2E83] text-sm font-semibold rounded-full hover:bg-[#2D2E83]/5 transition-colors cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                  @cankayaakademi
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

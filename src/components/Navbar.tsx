"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/cankayaakademi/";
const WHATSAPP_URL = "https://wa.me/905442117517";

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
  { label: "Hakkımızda", href: "#kurumsal",   id: "kurumsal"   },
  { label: "Programlar",  href: "#programlar", id: "programlar" },
  { label: "Şubelerimiz", href: "#subelerimiz",id: "subelerimiz"},
  { label: "SSS",         href: "#sss",        id: "sss"        },
  { label: "İletişim",    href: "#iletisim",   id: "iletisim"   },
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Ticker rotation
  useEffect(() => {
    const id = setInterval(
      () => setTickerIdx((i) => (i + 1) % tickers.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  const observerCallback: IntersectionObserverCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [observerCallback]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Rotating info bar ── */}
      <div className="bg-[#2D2E83] text-white text-xs sm:text-sm py-2 px-4 text-center overflow-hidden h-8 sm:h-9 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={tickerIdx}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 font-medium tracking-wide"
          >
            <span>{tickers[tickerIdx].icon}</span>
            <span>{tickers[tickerIdx].text}</span>
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Main nav ── */}
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          boxShadow: scrolled
            ? "0 4px 24px 0 rgba(45,46,131,0.10), 0 1px 0 0 rgba(217,221,232,0.5)"
            : "0 1px 0 0 rgba(217,221,232,0.4)",
        }}
        transition={{ duration: 0.25 }}
        className="backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{ height: scrolled ? 60 : 72 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-between"
          >
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 shrink-0 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-extrabold text-[#2D2E83] tracking-tight leading-none">
                  Çankaya
                </span>
                <span className="text-lg sm:text-xl font-light text-[#E30A17] leading-none">
                  Akademi
                </span>
              </div>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredLink === link.id;
                const lit = isActive || isHovered;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onHoverStart={() => setHoveredLink(link.id)}
                    onHoverEnd={() => setHoveredLink(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22 }}
                    className="relative px-3.5 py-2 text-sm font-medium rounded-lg cursor-pointer select-none"
                    style={{
                      color: lit ? "#2D2E83" : "#586380",
                    }}
                  >
                    {/* Hover/active pill background */}
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-[#2D2E83]"
                      initial={false}
                      animate={{ opacity: lit ? 0.07 : 0 }}
                      transition={{ duration: 0.18 }}
                    />

                    {/* Label */}
                    <span className="relative">{link.label}</span>

                    {/* Sliding underline — active: navy, hover: lighter */}
                    <motion.span
                      className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full"
                      style={{
                        background: isActive ? "#2D2E83" : "#2D2E83",
                        originX: 0,
                      }}
                      initial={false}
                      animate={{
                        scaleX: lit ? 1 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.45 : 0,
                      }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-[#E30A17] hover:bg-[#E30A17]/8 transition-colors duration-200 cursor-pointer"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </motion.a>

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişim"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-emerald-600 hover:bg-emerald-50 transition-colors duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>

              <div className="w-px h-5 bg-[#d9dde8] mx-1" />

              <motion.a
                href="#iletisim"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E30A17] text-white text-sm font-bold rounded-xl hover:bg-[#c00812] transition-colors duration-200 cursor-pointer shadow-sm shadow-[#E30A17]/30"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
                Ön Kayıt
                <ChevronRight className="w-3.5 h-3.5 -ml-0.5" strokeWidth={2.5} />
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-[#586380] hover:text-[#2D2E83] hover:bg-[#2D2E83]/6 transition-colors duration-200 cursor-pointer"
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[105px] bg-black/20 backdrop-blur-[2px] md:hidden"
                onClick={() => setMobileOpen(false)}
              />

              {/* Panel */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative md:hidden bg-white border-t border-[#d9dde8]/60 shadow-xl shadow-[#2D2E83]/8 z-10"
              >
                <div className="px-4 py-4 space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.18 }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-150 cursor-pointer ${
                          isActive
                            ? "bg-[#2D2E83]/8 text-[#2D2E83] font-semibold"
                            : "text-[#282e3e] hover:bg-[#2D2E83]/5 font-medium"
                        }`}
                      >
                        <span className="text-sm">{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D2E83] shrink-0" />
                        )}
                      </motion.a>
                    );
                  })}

                  <div className="pt-3 space-y-2 border-t border-[#d9dde8]/60 mt-2">
                    <motion.a
                      href="#iletisim"
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.24, duration: 0.18 }}
                      className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#E30A17] text-white text-sm font-bold rounded-xl hover:bg-[#c00812] transition-colors cursor-pointer shadow-sm shadow-[#E30A17]/30"
                    >
                      <Phone className="w-4 h-4" strokeWidth={2.5} />
                      Ön Kayıt Formu
                    </motion.a>

                    <div className="grid grid-cols-2 gap-2">
                      <motion.a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.30, duration: 0.18 }}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold rounded-xl hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </motion.a>

                      <motion.a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.34, duration: 0.18 }}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-[#d9dde8] text-[#E30A17] text-sm font-semibold rounded-xl hover:bg-[#E30A17]/5 transition-colors cursor-pointer"
                      >
                        <InstagramIcon className="w-4 h-4 shrink-0" />
                        Instagram
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

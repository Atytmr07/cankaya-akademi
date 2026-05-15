"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Target,
  Trophy,
  Brain,
  Rocket,
} from "lucide-react";

const floatingBubbles = [
  {
    icon: Target,
    label: "LGS Hazırlığı",
    iconColor: "#E30A17",
    iconBg: "bg-red-50",
    pos: "sm:-left-12 -left-2 top-12 sm:top-16",
    delay: 0,
    duration: 3.2,
  },
  {
    icon: Trophy,
    label: "Deneme Kulübü",
    iconColor: "#d97706",
    iconBg: "bg-amber-50",
    pos: "-right-2 sm:-right-10 top-20 sm:top-28",
    delay: 0.4,
    duration: 3.8,
  },
  {
    icon: Brain,
    label: "Sınav Koçluğu",
    iconColor: "#7c3aed",
    iconBg: "bg-violet-50",
    pos: "-left-2 sm:-left-10 bottom-24 sm:bottom-32",
    delay: 0.8,
    duration: 3.5,
  },
  {
    icon: BookOpen,
    label: "Etüt & Ödev",
    iconColor: "#2D2E83",
    iconBg: "bg-indigo-50",
    pos: "-right-2 sm:-right-8 bottom-10 sm:bottom-14",
    delay: 1.2,
    duration: 4,
  },
];

const chips = [
  { label: "LGS Hazırlık", cls: "bg-red-50 text-[#E30A17] ring-1 ring-red-100" },
  { label: "Etüt & Ödev", cls: "bg-indigo-50 text-[#2D2E83] ring-1 ring-indigo-100" },
  { label: "İngilizce", cls: "bg-sky-50 text-sky-700 ring-1 ring-sky-100" },
  { label: "Satranç", cls: "bg-violet-50 text-violet-700 ring-1 ring-violet-100" },
  { label: "Eğitim Koçluğu", cls: "bg-amber-50 text-amber-700 ring-1 ring-amber-100" },
  { label: "🚌 Servis İmkânı", cls: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb]">
      {/* ── Decorative blobs ─────────────────────────── */}
      <div className="absolute top-0 left-0 w-[640px] h-[640px] bg-[#2D2E83]/6 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#E30A17]/5 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* ── Dot grid pattern ─────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2D2E83 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-0">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ─── Left: Text ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#d9dde8] text-[#2D2E83] text-xs font-semibold rounded-full mb-5 tracking-wide uppercase shadow-card-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" strokeWidth={2.5} />
              Kepez / Antalya · 2 Şube
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold leading-[1.06] tracking-tight text-[#282e3e]">
              Geleceğe Güvenle
              <br />
              Hazırlanan{" "}
              <span
                style={{
                  background: "linear-gradient(130deg, #2D2E83 0%, #E30A17 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Çocuklar.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-[#586380] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Antalya Kepez&apos;de ilkokul ve ortaokul öğrencileri için akademik
              destek, LGS hazırlık ve öğrenci etkinlik merkezi.
            </p>

            {/* Program chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold ${chip.cls}`}
                >
                  {chip.label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.a
                href="#iletisim"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2D2E83] text-white font-bold rounded-full hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer shadow-card text-sm sm:text-base"
              >
                Ücretsiz Görüşme
              </motion.a>
              <motion.a
                href="#programlar"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white border-2 border-[#2D2E83] text-[#2D2E83] font-bold rounded-full hover:bg-[#2D2E83]/5 transition-all duration-200 cursor-pointer text-sm sm:text-base"
              >
                Programları Gör
              </motion.a>
            </div>

            {/* Trust stat row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="mt-9 pt-7 border-t border-[#d9dde8]/70 grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { value: "5.0 ⭐", label: "Google Puanı", col: "text-amber-500" },
                { value: "2", label: "Şube", col: "text-[#2D2E83]" },
                { value: "100+", label: "Mutlu Öğrenci", col: "text-[#E30A17]" },
              ].map((s) => (
                <div key={s.label}>
                  <p className={`text-2xl sm:text-3xl font-extrabold ${s.col}`}>{s.value}</p>
                  <p className="text-xs sm:text-sm text-[#586380] mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right: Hero photo with floating bubbles ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Floating achievement bubbles */}
            {floatingBubbles.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -9, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.6 + i * 0.12, duration: 0.35 },
                    scale: { delay: 0.6 + i * 0.12, duration: 0.35 },
                    y: {
                      delay: b.delay,
                      duration: b.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute z-10 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-card border border-[#d9dde8]/50 ${b.pos}`}
                >
                  <div className={`w-7 h-7 rounded-lg ${b.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-3.5 h-3.5" style={{ color: b.iconColor }} strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-bold text-[#282e3e] whitespace-nowrap hidden sm:block">
                    {b.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Main photo */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-sm lg:max-w-none rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-[#d9dde8]/60">
              <Image
                src="/hero.png"
                alt="Çankaya Akademi — Kepez Antalya öğrenci etkinlik merkezi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Bottom badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-lg shadow-card px-4 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E30A17]/10 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-[#E30A17]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#939bb4]">Hedefimiz</p>
                    <p className="text-xs font-bold text-[#282e3e]">Başarılı Öğrenciler</p>
                  </div>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#2D2E83] text-white rounded-lg shadow-card px-3 py-2">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" strokeWidth={2} />
                  <span className="text-xs font-bold">Deneyimli Kadro</span>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#E30A17]/8 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#2D2E83]/8 rounded-xl -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </div>

      {/* Wave → TrustBar (#ffffff) */}
      <div className="relative mt-16 sm:mt-20 pointer-events-none -mb-px">
        <svg
          viewBox="0 0 1440 60"
          className="w-full block h-[40px] sm:h-[60px]"
          style={{ fill: "#ffffff" }}
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,30 C360,62 720,2 1080,30 C1260,44 1380,30 1440,24 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

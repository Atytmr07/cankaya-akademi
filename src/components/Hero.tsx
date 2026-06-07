"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Award } from "lucide-react";

const floatingShapes = [
  { size: "w-5 h-5", shape: "rounded-full",       color: "bg-[#2D2E83]/15", top: "11%",  left:  "5%",   dur: 3.6, delay: 0,    y: 14 },
  { size: "w-3.5 h-3.5", shape: "rounded-sm rotate-12", color: "bg-[#E30A17]/18", top: "22%",  right: "8%",   dur: 4.2, delay: 0.5,  y: 10 },
  { size: "w-4 h-4",   shape: "rotate-45",        color: "bg-amber-400/22",  top: "54%",  left:  "3%",   dur: 4.8, delay: 0.9,  y: 12 },
  { size: "w-2.5 h-2.5", shape: "rounded-full",   color: "bg-violet-400/22", top: "37%",  right: "5%",   dur: 3.9, delay: 0.3,  y: 16 },
  { size: "w-4 h-4",   shape: "rounded-full",     color: "bg-[#E30A17]/12",  bottom:"28%",left:  "7%",   dur: 5.2, delay: 1.1,  y: 10 },
  { size: "w-3 h-3",   shape: "rotate-45 rounded-sm", color: "bg-[#2D2E83]/12", top: "74%",  right: "9%",   dur: 4.3, delay: 0.7,  y: 14 },
  { size: "w-6 h-6",   shape: "rounded-full",     color: "bg-sky-400/12",    top:  "7%",  right: "24%",  dur: 6.1, delay: 1.6,  y:  8 },
  { size: "w-3 h-3",   shape: "rounded-full",     color: "bg-[#2D2E83]/20",  bottom:"44%",right: "14%",  dur: 3.4, delay: 0.4,  y: 12 },
  { size: "w-2 h-2",   shape: "rounded-full",     color: "bg-[#E30A17]/20",  top: "45%",  left:  "12%",  dur: 2.9, delay: 1.3,  y: 10 },
];

const floatingEmojis = [
  { emoji: "📚", top: "6%",    left:  "1%",   size: "text-2xl", dur: 4.2, delay: 0,    y: 14, rot: 8  },
  { emoji: "⭐", top: "16%",   right: "2%",   size: "text-xl",  dur: 3.8, delay: 0.7,  y: 10, rot: -6 },
  { emoji: "🎯", top: "55%",   left:  "0.5%", size: "text-xl",  dur: 5.0, delay: 1.1,  y: 12, rot: 5  },
  { emoji: "🏆", top: "28%",   right: "1.5%", size: "text-2xl", dur: 4.6, delay: 0.3,  y: 8,  rot: -8 },
  { emoji: "✏️", bottom:"22%", left:  "2%",   size: "text-xl",  dur: 3.5, delay: 0.9,  y: 14, rot: 10 },
  { emoji: "🧩", top: "48%",   right: "2.5%", size: "text-lg",  dur: 4.8, delay: 1.4,  y: 10, rot: -5 },
  { emoji: "💡", bottom:"12%", right: "3%",   size: "text-2xl", dur: 5.3, delay: 0.5,  y: 16, rot: 7  },
  { emoji: "🌟", top: "4%",    right: "18%",  size: "text-lg",  dur: 3.3, delay: 1.8,  y: 8,  rot: -10 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #2D2E83 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#2D2E83]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#E30A17]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.size} ${s.shape} ${s.color}`}
            style={{
              top: s.top,
              bottom: s.bottom,
              left: s.left,
              right: s.right,
            }}
            animate={{ y: [0, -s.y, 0] }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {floatingEmojis.map((e, i) => (
          <motion.span
            key={i}
            className={`absolute ${e.size} select-none opacity-70`}
            style={{
              top: e.top,
              bottom: e.bottom,
              left: e.left,
              right: e.right,
            }}
            animate={{
              y: [0, -e.y, 0],
              rotate: [0, e.rot, 0, -e.rot * 0.5, 0],
            }}
            transition={{
              duration: e.dur,
              repeat: Infinity,
              delay: e.delay,
              ease: "easeInOut",
            }}
          >
            {e.emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#2D2E83]/15 text-[#2D2E83] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Kepez / Antalya · 2 Şube
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2D2E83] leading-[1.05] tracking-tight">
              Geleceğe Güvenle Hazırlanan{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Çocuklar.</span>
                <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-3 sm:h-4 bg-[#E30A17]/15 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Antalya Kepez&apos;de; ilkokul ve ortaokul öğrencileri için
              akademik destek, LGS hazırlık ve kişisel gelişim merkezi.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#iletisim"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#2D2E83] text-white font-semibold rounded-xl hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer shadow-lg shadow-[#2D2E83]/25 text-sm sm:text-base"
              >
                Eğitim Koçumuzla Görüşün
              </motion.a>
              <motion.a
                href="#subelerimiz"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white border-2 border-[#2D2E83] text-[#2D2E83] font-semibold rounded-xl hover:bg-[#2D2E83]/5 transition-colors duration-200 cursor-pointer text-sm sm:text-base"
              >
                Şubelerimizi İncele
              </motion.a>
            </div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-200/70 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
            >
              {[
                { value: "5.0", label: "Google Puanı", color: "text-[#2D2E83]" },
                { value: "2",   label: "Kepez'de Şube", color: "text-[#2D2E83]" },
                { value: "100+", label: "Mutlu Öğrenci ve Veli", color: "text-[#E30A17]" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <p className={`text-2xl sm:text-3xl font-extrabold ${item.color}`}>
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-slate-200/60">
              <Image
                src="/2026-02-09.webp"
                alt="Çankaya Akademi - Kepez Antalya şubesi dış cephe görünümü"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* LGS Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 sm:px-5 sm:py-3 cursor-default"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E30A17]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#E30A17]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-500">Hedefimiz</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Başarılı Öğrenciler</p>
                  </div>
                </div>
              </motion.div>

              {/* Top right badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#2D2E83] text-white rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-2.5 cursor-default"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" strokeWidth={2.2} />
                  <span className="text-xs sm:text-sm font-bold">Deneyimli Kadro</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative accents */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E30A17]/8 rounded-3xl -z-10 hidden lg:block"
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-[#2D2E83]/8 rounded-2xl -z-10 hidden lg:block"
              animate={{ rotate: [0, -3, 0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

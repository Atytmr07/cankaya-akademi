"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Award } from "lucide-react";

const floatingEmojis = [
  { emoji: "📚", top: "8%",    left:  "3%",   size: "text-2xl", dur: 4.2, delay: 0,    yAmt: 14, rot: 8   },
  { emoji: "🎯", top: "50%",   left:  "2%",   size: "text-xl",  dur: 5.0, delay: 1.1,  yAmt: 12, rot: 5   },
  { emoji: "✏️", bottom:"24%", left:  "4%",   size: "text-xl",  dur: 3.5, delay: 0.9,  yAmt: 14, rot: 10  },
  { emoji: "💡", bottom:"12%", left:  "6%",   size: "text-2xl", dur: 5.3, delay: 0.5,  yAmt: 16, rot: 7   },
  { emoji: "⭐", top: "22%",   right: "5%",   size: "text-xl",  dur: 3.8, delay: 0.7,  yAmt: 10, rot: -6  },
];

const stats = [
  { value: "5.0 ⭐", label: "Google Puanı"         },
  { value: "2",      label: "Kepez'de Şube"        },
  { value: "100+",   label: "Mutlu Öğrenci & Veli" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#2D2E83]">

      <div className="relative flex flex-col lg:flex-row lg:min-h-[92vh]">

        {/* ── LEFT: Navy content ─────────────────────────────────────── */}
        <div className="relative order-2 lg:order-1 lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 pt-10 pb-16 lg:py-24">

          {/* Dot texture */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Blobs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 w-96 h-60 bg-[#E30A17]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Floating emojis — desktop only */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden="true">
            {floatingEmojis.map((e, i) => (
              <motion.span
                key={i}
                className={`absolute ${e.size} select-none opacity-50`}
                style={{ top: e.top, bottom: e.bottom, left: e.left, right: e.right }}
                animate={{ y: [0, -e.yAmt, 0], rotate: [0, e.rot, 0, -e.rot * 0.5, 0] }}
                transition={{ duration: e.dur, repeat: Infinity, delay: e.delay, ease: "easeInOut" }}
              >
                {e.emoji}
              </motion.span>
            ))}
          </div>

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center self-start gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full mb-6 tracking-wide uppercase backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
            Kepez / Antalya · 2 Şube
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
          >
            Geleceğe Güvenle{" "}
            <br className="hidden sm:block" />
            Hazırlanan{" "}
            <span className="text-[#E30A17]">Çocuklar.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-lg"
          >
            Kepez ve Masadağı&apos;nda ilkokul &amp; ortaokul için{" "}
            <strong className="font-bold text-white/85">etüt merkezi</strong>,{" "}
            <strong className="font-bold text-white/85">LGS hazırlık kursu</strong>{" "}
            ve birebir eğitim koçluğu. 2 şube · Servis imkânı.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#iletisim"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#2D2E83] font-bold rounded-xl hover:bg-slate-100 transition-colors duration-200 cursor-pointer shadow-lg text-sm sm:text-base"
            >
              Eğitim Koçumuzla Görüşün
            </motion.a>
            <motion.a
              href="#subelerimiz"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border-2 border-white/35 text-white font-semibold rounded-xl hover:border-white/65 hover:bg-white/5 transition-all duration-200 cursor-pointer text-sm sm:text-base"
            >
              Şubelerimizi İncele
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Photo ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 lg:order-2 lg:flex-1 relative h-64 sm:h-80 lg:h-auto hero-photo-clip"
        >
          <Image
            src="/2026-02-09.webp"
            alt="Çankaya Akademi — Kepez, Antalya"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />

          {/* Left blend — merges photo into navy on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2E83]/70 via-[#2D2E83]/20 to-transparent hidden lg:block" />

          {/* Bottom fade on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2D2E83] lg:hidden" />

          {/* LGS Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-10 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 sm:px-5 sm:py-3 cursor-default"
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

          {/* Deneyimli Kadro Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 bg-white text-[#2D2E83] rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-2.5 cursor-default"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" strokeWidth={2.2} />
              <span className="text-xs sm:text-sm font-bold">Deneyimli Kadro</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom wave → TrustBar (bg-white) ─────────────────────── */}
      <div className="pointer-events-none -mb-px">
        <svg
          viewBox="0 0 1440 60"
          className="w-full block h-[40px] sm:h-[60px]"
          style={{ fill: "#ffffff" }}
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,30 C360,60 720,8 1080,36 C1260,50 1380,26 1440,18 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

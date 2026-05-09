"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #2D2E83 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#2D2E83]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#E30A17]/5 rounded-full blur-3xl pointer-events-none" />

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
              <a
                href="#iletisim"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#2D2E83] text-white font-semibold rounded-xl hover:bg-[#1e1f5c] transition-all duration-200 cursor-pointer shadow-lg shadow-[#2D2E83]/25 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Eğitim Koçumuzla Görüşün
              </a>
              <a
                href="#subelerimiz"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white border-2 border-[#2D2E83] text-[#2D2E83] font-semibold rounded-xl hover:bg-[#2D2E83]/5 transition-all duration-200 cursor-pointer text-sm sm:text-base"
              >
                Şubelerimizi İncele
              </a>
            </div>

            {/* Trust signals row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-200/70 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#2D2E83]">
                  5.0
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Google Puanı
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#2D2E83]">
                  2
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Kepez&apos;de Şube
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#E30A17]">
                  100+
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Mutlu Öğrenci ve Veli
                </p>
              </div>
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
              {/* Gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* LGS Badge - bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-4 py-2.5 sm:px-5 sm:py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E30A17]/10 flex items-center justify-center">
                    <Award
                      className="w-5 h-5 text-[#E30A17]"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-500">
                      Hedefimiz
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Başarılı Öğrenciler
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating top right badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#2D2E83] text-white rounded-2xl shadow-xl px-3 py-2 sm:px-4 sm:py-2.5"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" strokeWidth={2.2} />
                  <span className="text-xs sm:text-sm font-bold">
                    Deneyimli Kadro
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative side accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E30A17]/8 rounded-3xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#2D2E83]/8 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </div>

      {/* Bottom curved separator */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-auto fill-slate-50"
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

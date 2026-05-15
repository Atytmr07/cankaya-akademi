"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Star, Heart } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "100+",
    label: "Mutlu Öğrenci",
    sublabel: "Akademimizden geçen",
    color: "#98e3ff",
    textColor: "#0ea5e9",
  },
  {
    icon: MapPin,
    value: "2",
    label: "Şube",
    sublabel: "Kepez genelinde",
    color: "#eeaaff",
    textColor: "#a855f7",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Google Puanı",
    sublabel: "Veli memnuniyeti",
    color: "#ffc38c",
    textColor: "#d97706",
  },
  {
    icon: Heart,
    value: "%100",
    label: "Velilerin Tavsiyesi",
    sublabel: "Bize duyulan güven",
    color: "#fca5a5",
    textColor: "#E30A17",
  },
];

export default function Stats() {
  return (
    <section className="pt-0 pb-0 bg-[#2D2E83] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E30A17]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Rakamlarla{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #98e3ff 0%, #eeaaff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Çankaya Akademi
            </span>
          </h2>
          <p className="mt-3 text-white/60 text-base sm:text-lg">
            Her yıl büyüyen, güvenen bir akademi ailesi
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className="relative bg-white/8 backdrop-blur-sm border border-white/12 rounded-lg p-6 sm:p-8 text-center overflow-hidden group"
            >
              {/* Colored glow behind the number */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-300"
                style={{ background: stat.color }}
              />

              {/* Icon container */}
              <div
                className="relative w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4"
                style={{ background: stat.color + "22" }}
              >
                <stat.icon
                  className="w-6 h-6"
                  style={{ color: stat.color }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Value */}
              <p
                className="relative text-4xl sm:text-5xl font-extrabold tracking-tight"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>

              {/* Label */}
              <p className="mt-2 text-sm font-bold text-white/90">{stat.label}</p>
              <p className="text-[11px] text-white/45 mt-0.5">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave → Branches (#f6f7fb) */}
      <div className="pointer-events-none -mb-px">
        <svg viewBox="0 0 1440 60" className="w-full block h-[44px] sm:h-[64px]" style={{ fill: "#f6f7fb" }} preserveAspectRatio="none">
          <path d="M0,60 L0,30 C480,60 960,6 1440,34 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

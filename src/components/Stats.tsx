"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Star, Heart } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    icon: GraduationCap,
    value: "100+",
    label: "Mutlu Öğrenci",
    sublabel: "Akademimizden geçen",
    color: "#98e3ff",
  },
  {
    icon: MapPin,
    value: "2",
    label: "Şube",
    sublabel: "Kepez genelinde",
    color: "#eeaaff",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Google Puanı",
    sublabel: "Veli memnuniyeti",
    color: "#ffc38c",
  },
  {
    icon: Heart,
    value: "%100",
    label: "Velilerin Tavsiyesi",
    sublabel: "Bize duyulan güven",
    color: "#fca5a5",
  },
];

function parseValue(raw: string) {
  if (raw.startsWith("%")) {
    return { prefix: "%", num: parseFloat(raw.slice(1)), suffix: "", decimals: 0 };
  }
  const suffix = raw.endsWith("+") ? "+" : "";
  const numStr = suffix ? raw.slice(0, -1) : raw;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix: "", num: parseFloat(numStr), suffix, decimals };
}

function AnimatedValue({ raw, inView }: { raw: string; inView: boolean }) {
  const { prefix, num, suffix, decimals } = parseValue(raw);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    let raf: number;
    let startTime = 0;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(eased * num);
      if (p < 1) raf = requestAnimationFrame(animate);
      else setCurrent(num);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, num]);

  const display = decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current));
  return <>{prefix}{display}{suffix}</>;
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 20 } }}
      whileTap={{ scale: 0.97 }}
      className="relative bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-6 sm:p-8 text-center overflow-hidden group cursor-default"
    >
      {/* Colored glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: stat.color }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4"
        style={{ background: stat.color + "22" }}
      >
        <Icon className="w-6 h-6" style={{ color: stat.color }} strokeWidth={1.8} />
      </div>

      {/* Animated number */}
      <p
        className="relative text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums"
        style={{ color: stat.color }}
      >
        <AnimatedValue raw={stat.value} inView={inView} />
      </p>

      <p className="mt-2 text-sm font-bold text-white/90">{stat.label}</p>
      <p className="text-[11px] text-white/45 mt-0.5">{stat.sublabel}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="pt-0 pb-0 bg-[#2D2E83] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E30A17]/15 rounded-full blur-3xl pointer-events-none" />

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
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* Wave → Branches */}
      <div className="pointer-events-none -mb-px">
        <svg
          viewBox="0 0 1440 60"
          className="w-full block h-[44px] sm:h-[64px]"
          style={{ fill: "#f6f7fb" }}
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,30 C480,60 960,6 1440,34 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

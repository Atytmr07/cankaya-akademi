"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Star, Heart } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "100+",
    label: "Mutlu Öğrenci",
    sublabel: "Akademimizden geçen",
  },
  {
    icon: MapPin,
    value: "2",
    label: "Şube",
    sublabel: "Kepez genelinde",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Google Puanı",
    sublabel: "Veli memnuniyeti",
  },
  {
    icon: Heart,
    value: "%100",
    label: "Velilerin Tavsiyesi",
    sublabel: "Bize duyulan güven",
  },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-[#2D2E83] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#E30A17]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Rakamlarla Çankaya Akademi
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 text-center hover:bg-white/8 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-bold text-white/90">
                {stat.label}
              </p>
              <p className="text-xs text-white/50 mt-0.5">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

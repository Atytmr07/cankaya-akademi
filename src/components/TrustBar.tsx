"use client";

import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import { GraduationCap, Bus, Brain, MapPin, type LucideIcon } from "lucide-react";
import { useRef } from "react";

type Feature = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  accent: string;
  bg: string;
  iconBg: string;
  strip: string;
  badge: string;
  badgeCls: string;
};

const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Deneyimli Kadro",
    description: "Alanında uzman, pedagojik formasyonlu eğitimciler",
    accent: "#2D2E83",
    bg: "from-[#2D2E83]/8 to-[#2D2E83]/4",
    iconBg: "bg-[#2D2E83]/10",
    strip: "bg-[#2D2E83]",
    badge: "Uzman Ekip",
    badgeCls: "bg-[#2D2E83]/10 text-[#2D2E83]",
  },
  {
    icon: Bus,
    title: "Güvenli Ulaşım",
    subtitle: "Servis Hizmeti",
    description: "Kapıdan kapıya güvenli servis imkânı",
    accent: "#0ea5e9",
    bg: "from-sky-50 to-cyan-50/60",
    iconBg: "bg-sky-100",
    strip: "bg-sky-400",
    badge: "Servis Hizmeti",
    badgeCls: "bg-sky-100 text-sky-700",
  },
  {
    icon: Brain,
    title: "Sınav Kaygısı",
    subtitle: "Terapisi",
    description: "Uzman desteğiyle sınav kaygısını yönetme",
    accent: "#7c3aed",
    bg: "from-violet-50 to-purple-50/60",
    iconBg: "bg-violet-100",
    strip: "bg-violet-400",
    badge: "Psikolojik Destek",
    badgeCls: "bg-violet-100 text-violet-700",
  },
  {
    icon: MapPin,
    title: "2 Farklı Şube",
    description: "Kepez'de iki ayrı lokasyonla kolay erişim",
    accent: "#d97706",
    bg: "from-amber-50 to-orange-50/60",
    iconBg: "bg-amber-100",
    strip: "bg-amber-400",
    badge: "Kepez'de",
    badgeCls: "bg-amber-100 text-amber-700",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function TiltCard({ feature }: { feature: Feature }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 300, damping: 30 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative bg-gradient-to-br ${feature.bg} rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-default`}
    >
      {/* Top accent strip */}
      <div className={`h-1 w-full ${feature.strip}`} />

      <div className="p-6 sm:p-7">
        {/* Icon */}
        <div
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: feature.accent }}
            strokeWidth={1.8}
          />
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-[#282e3e]">
          {feature.title}
        </h3>
        {feature.subtitle && (
          <p className="text-sm font-semibold" style={{ color: feature.accent }}>
            {feature.subtitle}
          </p>
        )}
        <p className="mt-2 text-sm text-[#586380] leading-relaxed">
          {feature.description}
        </p>

        <span
          className={`inline-block mt-4 px-2.5 py-1 text-[11px] font-bold rounded-full ${feature.badgeCls}`}
        >
          {feature.badge}
        </span>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  return (
    <section className="pt-16 sm:pt-20 pb-0 bg-white" id="kurumsal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/8 text-[#2D2E83] text-xs font-semibold rounded-full mb-3 tracking-wide uppercase">
            Neden Çankaya Akademi?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#282e3e] tracking-tight">
            Fark Yaratan 4 Özelliğimiz
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ perspective: "1200px" }}
        >
          {features.map((f) => (
            <TiltCard key={f.title} feature={f} />
          ))}
        </motion.div>
      </div>

      {/* Wave → Programs */}
      <div className="pointer-events-none mt-10 sm:mt-14 -mb-px">
        <svg
          viewBox="0 0 1440 60"
          className="w-full block h-[40px] sm:h-[60px]"
          style={{ fill: "#f6f7fb" }}
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,28 C480,58 960,4 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

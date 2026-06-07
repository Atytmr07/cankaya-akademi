"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  PencilLine,
  Target,
  Users,
  Brain,
  GraduationCap,
  Sparkles,
  Globe,
  Trophy,
  Heart,
  type LucideIcon,
} from "lucide-react";

type ActivityItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
};

const items: ActivityItem[] = [
  {
    title: "Ödev Takibi",
    description: "Okul ödevlerinin uzman gözetiminde eksiksiz tamamlanması.",
    icon: PencilLine,
    gradient: "from-[#2D2E83] via-[#3a3bb0] to-[#4f50c7]",
    iconBg: "bg-white/20",
  },
  {
    title: "LGS Hazırlığı",
    description: "Sistematik konu anlatımı, soru çözümü ve deneme analizi.",
    icon: Target,
    gradient: "from-[#E30A17] via-[#ef3b46] to-[#f56a72]",
    iconBg: "bg-white/20",
  },
  {
    title: "Etüt Saatleri",
    description: "Sessiz, odaklanma dostu verimli çalışma ortamı.",
    icon: BookOpenCheck,
    gradient: "from-amber-400 via-amber-500 to-orange-500",
    iconBg: "bg-white/25",
  },
  {
    title: "Birebir Koçluk",
    description: "Her öğrenciye özel hedef ve kişisel gelişim planı.",
    icon: Users,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    iconBg: "bg-white/25",
  },
  {
    title: "Akıl Oyunları",
    description: "Satranç ve zeka oyunlarıyla stratejik düşünme.",
    icon: Brain,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    iconBg: "bg-white/25",
  },
  {
    title: "İngilizce",
    description: "Oyun temelli, yaş grubuna uygun dil öğrenimi.",
    icon: Globe,
    gradient: "from-sky-400 via-cyan-400 to-teal-400",
    iconBg: "bg-white/20",
  },
  {
    title: "Bursluluk Sınavı",
    description: "İOKBS ve özel burs sınavlarına hazırlık programı.",
    icon: Trophy,
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    iconBg: "bg-white/20",
  },
  {
    title: "Eğitim Koçluğu",
    description: "Çalışma planı, hedef belirleme ve motivasyon desteği.",
    icon: GraduationCap,
    gradient: "from-slate-600 via-slate-700 to-slate-800",
    iconBg: "bg-white/20",
  },
  {
    title: "Yaratıcı Öğrenme",
    description: "Oyun temelli, etkileşimli ve eğlenceli ders ortamı.",
    icon: Sparkles,
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    iconBg: "bg-white/25",
  },
  {
    title: "Veli Takibi",
    description: "Düzenli raporlar ve birebir gelişim görüşmeleri.",
    icon: Heart,
    gradient: "from-rose-500 via-red-400 to-orange-400",
    iconBg: "bg-white/20",
  },
];

function ActivityCard({ item }: { item: ActivityItem }) {
  const Icon = item.icon;
  return (
    <div className="w-[200px] sm:w-[215px] shrink-0 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 mx-2.5">
      {/* Gradient top */}
      <div
        className={`h-[100px] bg-gradient-to-br ${item.gradient} relative flex items-center justify-center overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div
          className={`w-12 h-12 rounded-xl ${item.iconBg} backdrop-blur-sm flex items-center justify-center relative z-10`}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
      {/* Content */}
      <div className="px-4 py-3.5">
        <h3 className="text-sm font-bold text-[#282e3e] leading-tight">{item.title}</h3>
        <p className="text-[11px] text-[#586380] mt-1 leading-snug line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ reversed = false, speed = 32 }: { reversed?: boolean; speed?: number }) {
  const [paused, setPaused] = useState(false);
  const row = reversed ? [...items].reverse() : items;
  const doubled = [...row, ...row];

  return (
    <div
      className="overflow-hidden py-1.5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex"
        style={{
          animation: `${reversed ? "marquee-right" : "marquee-left"} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          animationFillMode: "both",
          willChange: "transform",
          ...(reversed && { transform: "translateX(-50%)" }),
        }}
      >
        {doubled.map((item, i) => (
          <ActivityCard key={`${item.title}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="pt-20 sm:pt-28 pb-0 bg-white" id="galeri">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/10 text-[#2D2E83] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Akademi Hayatı
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282e3e] tracking-tight">
            Neler{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #2D2E83 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Yapıyoruz?
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#586380] max-w-2xl mx-auto">
            Ödevden koçluğa, etütten atölyeye — öğrencilerimize sunduğumuz
            tüm imkânlar.
          </p>
        </motion.div>
      </div>

      {/* Full-width marquee rows */}
      <div className="space-y-3 mt-2">
        <MarqueeRow speed={36} />
        <MarqueeRow reversed speed={28} />
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-[#586380] mb-5">
            Akademiyi yerinde görmek ister misiniz?
          </p>
          <motion.a
            href="#subelerimiz"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2D2E83] text-white font-semibold rounded-full hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer text-sm shadow-card-sm"
          >
            Şubelerimizi İncele
          </motion.a>
        </motion.div>
      </div>

      {/* Wave → Testimonials */}
      <div className="pointer-events-none mt-12 sm:mt-16 -mb-px">
        <svg
          viewBox="0 0 1440 60"
          className="w-full block h-[40px] sm:h-[60px]"
          style={{ fill: "#f6f7fb" }}
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,32 C360,60 720,6 1080,36 C1260,50 1380,34 1440,28 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

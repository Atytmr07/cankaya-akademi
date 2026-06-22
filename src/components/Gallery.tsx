"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  tag: string;
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
};

const items: ActivityItem[] = [
  {
    title: "Ödev Takibi",
    description: "Okul ödevlerinin uzman gözetiminde eksiksiz tamamlanması.",
    tag: "Her Gün",
    icon: PencilLine,
    gradient: "from-[#2D2E83] via-[#3a3bb0] to-[#4f50c7]",
    iconBg: "bg-white/20",
  },
  {
    title: "LGS Hazırlığı",
    description: "Sistematik konu anlatımı, soru çözümü ve deneme analizi.",
    tag: "8. Sınıf",
    icon: Target,
    gradient: "from-[#E30A17] via-[#ef3b46] to-[#f56a72]",
    iconBg: "bg-white/20",
  },
  {
    title: "Etüt Saatleri",
    description: "Sessiz, odaklanma dostu verimli çalışma ortamı.",
    tag: "Tüm Sınıflar",
    icon: BookOpenCheck,
    gradient: "from-amber-400 via-amber-500 to-orange-500",
    iconBg: "bg-white/25",
  },
  {
    title: "Birebir Koçluk",
    description: "Her öğrenciye özel hedef ve kişisel gelişim planı.",
    tag: "Kişiye Özel",
    icon: Users,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    iconBg: "bg-white/25",
  },
  {
    title: "Akıl Oyunları",
    description: "Satranç ve zeka oyunlarıyla stratejik düşünme.",
    tag: "Satranç",
    icon: Brain,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    iconBg: "bg-white/25",
  },
  {
    title: "İngilizce",
    description: "Oyun temelli, yaş grubuna uygun dil öğrenimi.",
    tag: "Yabancı Dil",
    icon: Globe,
    gradient: "from-sky-400 via-cyan-400 to-teal-400",
    iconBg: "bg-white/20",
  },
  {
    title: "Bursluluk Sınavı",
    description: "İOKBS ve özel burs sınavlarına hazırlık programı.",
    tag: "İOKBS",
    icon: Trophy,
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    iconBg: "bg-white/20",
  },
  {
    title: "Eğitim Koçluğu",
    description: "Çalışma planı, hedef belirleme ve motivasyon desteği.",
    tag: "Planlama",
    icon: GraduationCap,
    gradient: "from-slate-600 via-slate-700 to-slate-800",
    iconBg: "bg-white/20",
  },
  {
    title: "Yaratıcı Öğrenme",
    description: "Oyun temelli, etkileşimli ve eğlenceli ders ortamı.",
    tag: "Atölye",
    icon: Sparkles,
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    iconBg: "bg-white/25",
  },
  {
    title: "Veli Takibi",
    description: "Düzenli raporlar ve birebir gelişim görüşmeleri.",
    tag: "Şeffaf",
    icon: Heart,
    gradient: "from-rose-500 via-red-400 to-orange-400",
    iconBg: "bg-white/20",
  },
];

function ActivityCard({
  item,
  rotateDir,
}: {
  item: ActivityItem;
  rotateDir: 1 | -1;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.06, rotate: rotateDir * 1.2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="group w-[210px] sm:w-[225px] shrink-0 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-card cursor-default mx-3 relative"
    >
      {/* Gradient top area */}
      <div
        className={`h-[118px] bg-gradient-to-br ${item.gradient} relative flex items-center justify-center overflow-hidden`}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Decorative corner sparkle */}
        <div className="absolute top-3 right-3 w-5 h-5 bg-white/15 rounded-full flex items-center justify-center">
          <span className="text-white text-[9px] select-none">✦</span>
        </div>

        {/* Tag pill */}
        <div className="absolute bottom-2.5 left-3 bg-black/20 backdrop-blur-sm rounded-full px-2 py-0.5">
          <span className="text-white/90 text-[10px] font-semibold tracking-wide">
            {item.tag}
          </span>
        </div>

        {/* Icon with individual hover */}
        <motion.div
          whileHover={{ scale: 1.18, rotate: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className={`w-14 h-14 rounded-2xl ${item.iconBg} backdrop-blur-sm flex items-center justify-center relative z-10`}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-4 pt-3.5 pb-4 relative">
        {/* Colored bottom reveal line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
        />
        <h3 className="text-sm font-bold text-[#282e3e] leading-tight">
          {item.title}
        </h3>
        <p className="text-[11px] text-[#586380] mt-1 leading-snug line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

function MarqueeRow({
  reversed = false,
  speed = 32,
  mobileSpeed,
}: {
  reversed?: boolean;
  speed?: number;
  mobileSpeed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const isMobile = useIsMobile();
  const effectiveSpeed = isMobile && mobileSpeed ? mobileSpeed : speed;
  const row = reversed ? [...items].reverse() : items;
  const doubled = [...row, ...row];

  return (
    <div
      className="overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex"
        style={{
          animation: `${reversed ? "marquee-right" : "marquee-left"} ${effectiveSpeed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          animationFillMode: "both",
          willChange: "transform",
          ...(reversed && { transform: "translateX(-50%)" }),
        }}
      >
        {doubled.map((item, i) => (
          <ActivityCard
            key={`${item.title}-${i}`}
            item={item}
            rotateDir={i % 2 === 0 ? 1 : -1}
          />
        ))}
      </div>
    </div>
  );
}

// ── Photo strip ────────────────────────────────────────────────────────────

const photoSlides = [
  { src: "/gallery/ai-sinif-ortami.png",   label: "Etüt Salonu"        },
  { src: "/gallery/ai-lgs-ogrenci.png",    label: "LGS Hazırlık"       },
  { src: "/gallery/ai-birebir-kocluk.png", label: "Birebir Koçluk"     },
  { src: "/gallery/etut-saatleri.png",     label: "Etüt Saatleri"      },
  { src: "/gallery/ai-satranc.png",        label: "Satranç Atölyesi"   },
  { src: "/gallery/lgs-hazirligi.png",     label: "LGS Çalışması"      },
  { src: "/gallery/ai-etut-cocuk.png",     label: "Odaklanma Anı"      },
  { src: "/gallery/ai-atolye.png",         label: "Yaratıcı Atölye"    },
  { src: "/gallery/birebir-kocluk.png",    label: "Koçluk Seansı"      },
  { src: "/gallery/satranc-zeka.png",      label: "Akıl Oyunları"      },
];

function PhotoCard({ src, label }: { src: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className="relative shrink-0 w-[200px] sm:w-[230px] h-[145px] sm:h-[165px] mx-3 rounded-2xl overflow-hidden shadow-card cursor-default group"
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="230px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      {/* Label */}
      <span className="absolute bottom-3 left-3 text-white text-[11px] font-semibold tracking-wide drop-shadow-sm">
        {label}
      </span>
    </motion.div>
  );
}

function PhotoMarquee() {
  const [paused, setPaused] = useState(false);
  const isMobile = useIsMobile();
  const speed = isMobile ? 20 : 45;
  const doubled = [...photoSlides, ...photoSlides];

  return (
    <div
      className="overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex"
        style={{
          animation: `marquee-left ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          animationFillMode: "both",
          willChange: "transform",
        }}
      >
        {doubled.map((p, i) => (
          <PhotoCard key={`${p.src}-${i}`} src={p.src} label={p.label} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      className="pt-20 sm:pt-28 pb-0 bg-white relative overflow-hidden"
      id="galeri"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2D2E83 1.5px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Section header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Marquee rows with edge fade masks */}
      <div className="relative mt-2">
        {/* Left edge mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-14 sm:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, white 0%, transparent 100%)",
          }}
        />
        {/* Right edge mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-14 sm:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white 0%, transparent 100%)",
          }}
        />

        <div className="space-y-3">
          <MarqueeRow speed={38} mobileSpeed={20} />
          <MarqueeRow reversed speed={30} mobileSpeed={16} />
        </div>
      </div>

      {/* ── Photo strip ── */}
      <div className="relative mt-14">
        {/* Section label */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg">📸</span>
            <span className="text-sm font-semibold text-[#586380] tracking-wide">
              Akademimizden Kareler
            </span>
            <div className="flex-1 h-px bg-[#d9dde8]/70" />
          </motion.div>
        </div>

        {/* Edge masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
        />

        <PhotoMarquee />
      </div>

      {/* CTA */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

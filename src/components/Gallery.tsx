"use client";

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
  type LucideIcon,
} from "lucide-react";

type GalleryItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
  iconColor: string;
  span?: "wide" | "tall";
  src?: string;
};

const items: GalleryItem[] = [
  {
    title: "Ödev Yapan Öğrenciler",
    description: "Birebir gözetimde, okul ödevleri zamanında ve eksiksiz.",
    icon: PencilLine,
    gradient: "from-[#2D2E83] via-[#3a3bb0] to-[#4f50c7]",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    span: "wide",
    src: "/gallery/odev-yapan.png",
  },
  {
    title: "LGS Hazırlığı",
    description: "Konu tekrarı, soru çözümü ve düzenli denemeler.",
    icon: Target,
    gradient: "from-[#E30A17] via-[#ef3b46] to-[#f56a72]",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    src: "/gallery/lgs-hazirligi.png",
  },
  {
    title: "Etüt Saatleri",
    description: "Sessiz, odaklanma dostu çalışma ortamı.",
    icon: BookOpenCheck,
    gradient: "from-amber-400 via-amber-500 to-orange-500",
    iconBg: "bg-white/25",
    iconColor: "text-white",
    src: "/gallery/etut-saatleri.png",
  },
  {
    title: "Birebir Koçluk",
    description: "Her öğrenciye özel hedef ve gelişim planı.",
    icon: Users,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    iconBg: "bg-white/25",
    iconColor: "text-white",
    src: "/gallery/birebir-kocluk.png",
  },
  {
    title: "Şubemiz",
    description: "Çankaya Akademi · Kepez / Antalya",
    icon: GraduationCap,
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    src: "/2026-02-09.webp",
  },
  {
    title: "Akıl & Zeka Oyunları",
    description: "Stratejik düşünme ve problem çözme atölyeleri.",
    icon: Brain,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    iconBg: "bg-white/25",
    iconColor: "text-white",
    src: "/gallery/satranc-zeka.png",
  },
  {
    title: "Yaratıcı Öğrenme",
    description: "Oyun temelli ve etkileşimli ders ortamı.",
    icon: Sparkles,
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    iconBg: "bg-white/25",
    iconColor: "text-white",
    src: "/gallery/yaratici-ogrenme.png",
  },
];

export default function Gallery() {
  return (
    <section className="pt-20 sm:pt-28 pb-0 bg-white" id="galeri">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/10 text-[#2D2E83] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282e3e] tracking-tight">
            Akademi Yaşamından{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #2D2E83 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kareler
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#586380] max-w-2xl mx-auto">
            Ödevden koçluğa, etütten atölyeye — öğrencilerimizin gün boyu
            akademiyle iç içe anları.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[170px] lg:auto-rows-[190px] gap-3 sm:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            const colSpan = item.span === "wide" ? "sm:col-span-2" : "";
            const rowSpan = item.span === "tall" ? "row-span-2" : "";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${colSpan} ${rowSpan}`}
              >
                {item.src ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  </>
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    />
                    {/* Decorative shapes */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div
                      className="absolute inset-0 opacity-[0.08] pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </>
                )}

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-4 sm:p-5">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.iconBg} backdrop-blur-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${item.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-extrabold text-sm sm:text-base lg:text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-[11px] sm:text-xs mt-1 leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-600 mb-5">
            Akademiyi yerinde görmek ister misiniz?
          </p>
          <a
            href="#subelerimiz"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2D2E83] text-white font-semibold rounded-full hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer text-sm shadow-card-sm"
          >
            Şubelerimizi İncele
          </a>
        </motion.div>
      </div>

      {/* Wave → Testimonials (#f6f7fb) */}
      <div className="pointer-events-none mt-12 sm:mt-16 -mb-px">
        <svg viewBox="0 0 1440 60" className="w-full block h-[40px] sm:h-[60px]" style={{ fill: "#f6f7fb" }} preserveAspectRatio="none">
          <path d="M0,60 L0,32 C360,60 720,6 1080,36 C1260,50 1380,34 1440,28 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

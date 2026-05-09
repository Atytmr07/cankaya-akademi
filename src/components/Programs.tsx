"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Globe,
  Puzzle,
  Target,
  Users,
  Lightbulb,
  BookOpenCheck,
  ClipboardList,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

type Program = {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  features: Feature[];
  accentBg: string;
  accentText: string;
  accentBgSoft: string;
  cardBg: string;
  cardBorder: string;
  cornerBg: string;
  badgeIcon: LucideIcon;
  showLgsBadge?: boolean;
};

const programs: Program[] = [
  {
    id: "ilkokul",
    badge: "1-4. Sınıf",
    badgeIcon: BookOpen,
    title: "İlkokul Etkinlik Merkezi",
    description:
      "Eğlenerek öğrenme prensipleriyle temel akademik becerileri güçlendiriyoruz.",
    longDescription:
      "Çocukların yaş gruplarına uygun, oyun temelli ve etkileşimli yöntemlerle hem akademik hem sosyal becerilerini geliştiriyoruz. Birebir takip ve veli iletişimiyle her öğrencinin gelişimini yakından izliyoruz.",
    accentBg: "bg-[#2D2E83]",
    accentText: "text-[#2D2E83]",
    accentBgSoft: "bg-[#2D2E83]/8",
    cardBg: "from-blue-50 via-white to-indigo-50/50",
    cardBorder: "border-blue-100/60",
    cornerBg: "bg-[#2D2E83]/5",
    features: [
      {
        icon: BookOpen,
        label: "Ödev ve Proje Grupları",
        detail:
          "Okul ödevlerinin uzman gözetiminde tamamlanması, projelerin baştan sona desteklenmesi.",
      },
      {
        icon: Trophy,
        label: "Bursluluk Sınavlarına Hazırlık",
        detail:
          "İOKBS ve özel bursluluk sınavları için sistematik konu anlatımı, soru bankası ve deneme programı.",
      },
      {
        icon: Globe,
        label: "Yabancı Dil",
        detail:
          "Yaş grubuna uygun, oyunlarla desteklenmiş İngilizce dersleri ile dil öğrenimine erken başlangıç.",
      },
      {
        icon: Puzzle,
        label: "Satranç & Akıl Oyunları",
        detail:
          "Stratejik düşünme, odaklanma ve problem çözme becerilerini geliştiren özel atölyeler.",
      },
    ],
  },
  {
    id: "ortaokul",
    badge: "5-8. Sınıf",
    badgeIcon: Target,
    title: "Ortaokul & LGS",
    subtitle: "Sosyal Gelişim Merkezi",
    description:
      "LGS hedefli, bilimsel yöntemlerle desteklenen kapsamlı hazırlık programı.",
    longDescription:
      "Liselere Geçiş Sınavı'na bilimsel ve disiplinli bir yaklaşımla hazırlıyoruz. Birebir koçluk, düzenli denemeler ve sınav kaygısı yönetimiyle öğrencimizin tam potansiyelini ortaya çıkarıyoruz.",
    accentBg: "bg-[#E30A17]",
    accentText: "text-[#E30A17]",
    accentBgSoft: "bg-[#E30A17]/8",
    cardBg: "from-red-50 via-white to-orange-50/50",
    cardBorder: "border-red-100/60",
    cornerBg: "bg-[#E30A17]/5",
    showLgsBadge: true,
    features: [
      {
        icon: Target,
        label: "LGS Hazırlık Programı",
        detail:
          "MEB müfredatına uygun konu anlatımı, soru çözüm teknikleri ve haftalık deneme analizleri.",
      },
      {
        icon: BookOpenCheck,
        label: "Akademik Destek",
        detail:
          "Okul derslerinde geri kalmamak için birebir etüt, eksik konu tamamlama ve düzenli ödev takibi.",
      },
      {
        icon: Lightbulb,
        label: "Eğitim Koçluğu",
        detail:
          "Çalışma planlama, hedef belirleme ve motivasyon yönetimi konusunda kişiye özel rehberlik.",
      },
      {
        icon: Users,
        label: "Hızlı Okuma",
        detail:
          "Okuma hızını ve okuduğunu anlama becerisini artıran teknikler — sınav süresinin doğru kullanımı.",
      },
      {
        icon: ClipboardList,
        label: "Deneme Kulübü",
        detail:
          "Gerçek sınav koşullarında düzenli denemeler, detaylı analiz raporları ve birebir geri bildirim.",
      },
    ],
  },
];

export default function Programs() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white" id="programlar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/10 text-[#2D2E83] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Programlarımız
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2E83] tracking-tight">
            Her Yaşa Uygun Eğitim
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Karta tıklayarak programın detaylarını görebilirsiniz.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {programs.map((program, index) => {
            const isOpen = expanded === program.id;
            const BadgeIcon = program.badgeIcon;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative bg-gradient-to-br ${program.cardBg} rounded-2xl shadow-lg shadow-slate-200/60 border ${program.cardBorder} overflow-hidden transition-shadow duration-300 hover:shadow-xl`}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${program.cornerBg} rounded-bl-[80px] pointer-events-none`}
                />

                {/* LGS Badge */}
                {program.showLgsBadge && (
                  <div className="absolute top-6 right-6 bg-[#E30A17] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md shadow-red-200 z-10">
                    LGS
                  </div>
                )}

                {/* Header (always visible) */}
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : program.id)}
                  className="relative w-full text-left p-8 sm:p-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2E83]/40 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`${program.id}-content`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 ${program.accentBgSoft} rounded-xl mb-6`}
                  >
                    <BadgeIcon
                      className={`w-5 h-5 ${program.accentText}`}
                      strokeWidth={2}
                    />
                    <span className={`text-sm font-bold ${program.accentText}`}>
                      {program.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    {program.title}
                  </h3>
                  {program.subtitle && (
                    <p
                      className={`text-sm font-semibold ${program.accentText} mb-1`}
                    >
                      {program.subtitle}
                    </p>
                  )}
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Compact feature list */}
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="flex items-center gap-4"
                      >
                        <div
                          className={`w-9 h-9 rounded-xl ${program.accentBgSoft} flex items-center justify-center shrink-0`}
                        >
                          <feature.icon
                            className={`w-4 h-4 ${program.accentText}`}
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand indicator */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold ${program.accentText}`}
                    >
                      {isOpen ? "Daha az göster" : "Detayları gör"}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-9 h-9 rounded-full ${program.accentBgSoft} flex items-center justify-center`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 ${program.accentText}`}
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Detail */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${program.id}-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 sm:px-10 pb-8 sm:pb-10 space-y-5">
                        <div
                          className={`p-5 rounded-2xl bg-white border ${program.cardBorder}`}
                        >
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                            {program.longDescription}
                          </p>
                        </div>

                        <ul className="space-y-4">
                          {program.features.map((feature) => (
                            <li
                              key={feature.label}
                              className="bg-white rounded-xl p-4 border border-slate-100"
                            >
                              <div className="flex items-start gap-4">
                                <div
                                  className={`w-10 h-10 rounded-xl ${program.accentBgSoft} flex items-center justify-center shrink-0`}
                                >
                                  <feature.icon
                                    className={`w-5 h-5 ${program.accentText}`}
                                    strokeWidth={2}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                                    {feature.label}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {feature.detail}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>

                        <a
                          href="#iletisim"
                          className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 ${program.accentBg} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 cursor-pointer text-sm shadow-lg`}
                        >
                          Bu Program İçin Bilgi Al
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

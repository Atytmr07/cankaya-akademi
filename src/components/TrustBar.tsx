"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, Bus, Brain, MapPin } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Deneyimli Kadro",
    description: "Alanında uzman, pedagojik formasyonlu eğitimciler",
  },
  {
    icon: Bus,
    title: "Güvenli Ulaşım",
    subtitle: "(Servis)",
    description: "Kapıdan kapıya güvenli servis hizmeti",
  },
  {
    icon: Brain,
    title: "Sınav Kaygısı Terapisi",
    description: "Uzman desteğiyle kaygıyı yönetme becerileri",
  },
  {
    icon: MapPin,
    title: "2 Farklı Şube",
    description: "Kepez'de iki ayrı lokasyonla kolay erişim",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TrustBar() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50" id="kurumsal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-200/60 hover:shadow-xl hover:shadow-slate-200/80 transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#2D2E83]/8 flex items-center justify-center mb-5 group-hover:bg-[#2D2E83]/12 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-[#2D2E83]" strokeWidth={1.8} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              {feature.subtitle && (
                <span className="text-sm text-[#2D2E83] font-medium">
                  {feature.subtitle}
                </span>
              )}
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

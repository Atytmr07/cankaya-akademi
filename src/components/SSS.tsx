"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Hangi sınıf düzeyindeki öğrencilere hizmet veriyorsunuz?",
    answer:
      "1. sınıftan 8. sınıfa kadar tüm öğrencilere hizmet veriyoruz. İlkokul (1–4. sınıf) için oyun temelli etkinlik merkezi programımız; ortaokul (5–8. sınıf) için kapsamlı akademik destek ve LGS hazırlık programlarımız mevcuttur.",
  },
  {
    question: "Servis imkânı var mı?",
    answer:
      "Evet! Kepez ve çevre semtlere düzenli servis hizmetimiz mevcuttur. Servis güzergahı ve saatleri hakkında detaylı bilgi için 0544 211 75 17 numaralı telefonumuzdan bize ulaşabilirsiniz.",
  },
  {
    question:
      "İngilizce ve satranç kurslarına ayrıca kayıt yaptırmam gerekiyor mu?",
    answer:
      "Hayır. İngilizce ve satranç kurslarımız programlarımızın entegre bir parçasıdır. Kayıt sırasında hangi kurslara dahil olmak istediğinizi belirtmeniz yeterlidir; uzmanlarımız size en uygun programı birlikte oluşturur.",
  },
  {
    question: "LGS hazırlık programı nasıl işliyor?",
    answer:
      "Programa başlarken öğrencinin mevcut seviyesi belirlenir ve kişisel bir çalışma planı hazırlanır. Haftalık deneme sınavları, konu anlatımı, soru çözüm teknikleri ve birebir eğitim koçluğu seanslarından oluşan kapsamlı bir süreç uygulanır. Düzenli gelişim raporlarıyla her aşamada bilgilendirilirsiniz.",
  },
  {
    question:
      "Ücretler ve ödeme seçenekleri hakkında bilgi alabilir miyim?",
    answer:
      "Ücretler; seçilen programa, ders saatine ve kurs içeriğine göre değişmektedir. Güncel fiyat bilgisi ve esnek ödeme seçenekleri için 0544 211 75 17 numaralı hattı arayabilir ya da sayfamızdaki ön kayıt formunu doldurabilirsiniz.",
  },
  {
    question:
      "Veli olarak çocuğumun gelişimini nasıl takip edebilirim?",
    answer:
      "Düzenli veli görüşmeleri, periyodik gelişim raporları ve anlık iletişim kanallarımız aracılığıyla çocuğunuzun akademik ve sosyal gelişimini yakından takip edebilirsiniz. Şeffaf iletişim bizim için önceliktir.",
  },
  {
    question: "Kayıt için nasıl başvurabilirim?",
    answer:
      "Sayfamızdaki Ön Kayıt Formu'nu doldurarak veya 0544 211 75 17 numaralı telefonumuzdan bize ulaşarak kayıt sürecini başlatabilirsiniz. Danışmanlarımız en kısa sürede sizinle iletişime geçerek tüm sorularınızı yanıtlayacaktır.",
  },
];

export default function SSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#f6f7fb]" id="sss">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/8 text-[#2D2E83] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            SSS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282e3e] tracking-tight">
            Sık Sorulan{" "}
            <span
              style={{
                background:
                  "linear-gradient(130deg, #2D2E83 0%, #E30A17 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sorular
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#586380] max-w-xl mx-auto">
            Merak ettiklerinizi yanıtlamaya çalıştık. Başka sorunuz varsa
            bize ulaşmaktan çekinmeyin.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-[#d9dde8]/60 shadow-card-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2E83]/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#282e3e] leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#2D2E83] text-white"
                        : "bg-[#2D2E83]/8 text-[#2D2E83]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-[#d9dde8]/70 mb-4" />
                        <p className="text-sm sm:text-base text-[#586380] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[#586380] mb-5">
            Başka sorularınız mı var? Hemen yanıtlayalım.
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E30A17] text-white font-bold rounded-full hover:bg-[#c00812] transition-colors duration-200 cursor-pointer text-sm shadow-card-sm"
          >
            Bize Ulaşın
          </a>
        </motion.div>
      </div>
    </section>
  );
}

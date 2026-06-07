"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const reviews = [
  {
    text: "Oğlum 1 yıldır gidiyor ve okuldaki derslerinde gözle görülür bir gelişme var. Akademideki tüm personele ve öğretmenlerimize teşekkür ederim.",
    author: "Mustafa ÇETİN",
    initials: "MÇ",
    role: "5. Sınıf Velisi",
    avatarBg: "bg-[#2D2E83]/10",
    avatarColor: "text-[#2D2E83]",
    accentBg: "bg-[#2D2E83]",
  },
  {
    text: "Kızım LGS hazırlığında çok stres yaşıyordu. Çankaya Akademi'deki birebir koçluk desteği sayesinde sınav kaygısını yendi ve istediği okula yerleşti.",
    author: "Fatma YILMAZ",
    initials: "FY",
    role: "8. Sınıf Velisi",
    avatarBg: "bg-[#E30A17]/10",
    avatarColor: "text-[#E30A17]",
    accentBg: "bg-[#E30A17]",
  },
  {
    text: "Satranç ve akıl oyunları derslerinden sonra oğlumun konsantrasyonu inanılmaz arttı. Öğretmenler gerçekten ilgili ve şefkatli, kesinlikle tavsiye ediyorum.",
    author: "Ahmet KARA",
    initials: "AK",
    role: "3. Sınıf Velisi",
    avatarBg: "bg-emerald-100",
    avatarColor: "text-emerald-700",
    accentBg: "bg-emerald-600",
  },
  {
    text: "Servis hizmeti ve güvenli ortam bizi çok rahatlattı. Çocuğumun gelişimini düzenli olarak takip ediyorlar, her ay bilgilendirme yapıyorlar.",
    author: "Zeynep ARSLAN",
    initials: "ZA",
    role: "4. Sınıf Velisi",
    avatarBg: "bg-amber-100",
    avatarColor: "text-amber-700",
    accentBg: "bg-amber-500",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: -dir * 50, opacity: 0 }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5500);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  function next() {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
    startTimer();
  }

  function prev() {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
    startTimer();
  }

  function goTo(index: number) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startTimer();
  }

  const review = reviews[current];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#f6f7fb]">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[480px] h-[380px] bg-[#2D2E83]/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#E30A17]/4 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/8 text-[#2D2E83] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Velilerimiz Ne Diyor?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282e3e] tracking-tight">
            Güven Veren{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #2D2E83 0%, #E30A17 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sonuçlar
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-[#d9dde8]/60">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-xl ${review.accentBg} flex items-center justify-center shadow-card-sm shrink-0`}>
                      <Quote className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 text-amber-400" fill="currentColor" strokeWidth={0} />
                      ))}
                      <span className="ml-1.5 text-sm font-bold text-[#282e3e]">5.0</span>
                    </div>
                  </div>

                  {/* Text */}
                  <blockquote className="text-lg sm:text-xl text-[#282e3e]/85 leading-relaxed font-medium italic mb-8">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full ${review.avatarBg} flex items-center justify-center shrink-0`}>
                        <span className={`text-base font-extrabold ${review.avatarColor}`}>
                          {review.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-[#282e3e]">{review.author}</p>
                        <p className="text-sm text-[#586380]">{review.role}</p>
                      </div>
                    </div>

                    {/* Google badge */}
                    <div className="flex items-center gap-2.5 bg-[#f6f7fb] rounded-xl px-4 py-2.5 border border-[#d9dde8]/60">
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <div>
                        <p className="text-[11px] font-bold text-[#282e3e]">Google&apos;da</p>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-extrabold text-[#282e3e]">5.0</span>
                          <Star className="w-3 h-3 text-amber-400" fill="currentColor" strokeWidth={0} />
                          <span className="text-[11px] text-[#586380]">Puan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow buttons */}
            <button
              type="button"
              onClick={prev}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-[#d9dde8]/60 flex items-center justify-center text-[#586380] hover:text-[#2D2E83] hover:border-[#2D2E83]/30 transition-colors duration-200 cursor-pointer z-10"
              aria-label="Önceki yorum"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-card border border-[#d9dde8]/60 flex items-center justify-center text-[#586380] hover:text-[#2D2E83] hover:border-[#2D2E83]/30 transition-colors duration-200 cursor-pointer z-10"
              aria-label="Sonraki yorum"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === current
                    ? "w-6 h-2.5 bg-[#2D2E83]"
                    : "w-2.5 h-2.5 bg-[#2D2E83]/25 hover:bg-[#2D2E83]/50"
                }`}
                aria-label={`${i + 1}. yoruma git`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 text-[#586380] text-sm"
        >
          Siz de ailemizin bir parçası olun —{" "}
          <a href="#iletisim" className="font-semibold text-[#2D2E83] hover:underline cursor-pointer">
            Ücretsiz görüşme için tıklayın
          </a>
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Oğlum 1 yıldır gidiyor ve okuldaki derslerinde gözle görülür bir gelişme var. Akademideki tüm personele ve öğretmenlerimize teşekkür ederim.",
    author: "Mustafa ÇETİN",
    initials: "MÇ",
    role: "Veli",
    color: "bg-[#2D2E83]/10 text-[#2D2E83]",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#f6f7fb]">
      {/* Soft gradient blobs */}
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

        {/* Testimonial card */}
        {reviews.map((review, i) => (
          <motion.div
            key={review.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-white rounded-lg p-8 sm:p-12 shadow-card border border-[#d9dde8]/60">
              {/* Header row: icon + stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#2D2E83] flex items-center justify-center shadow-card-sm shrink-0">
                  <Quote className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4.5 h-4.5 text-amber-400" fill="currentColor" strokeWidth={0} />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-[#282e3e]">5.0</span>
                </div>
              </div>

              {/* Review text */}
              <blockquote className="text-lg sm:text-xl text-[#282e3e]/85 leading-relaxed font-medium italic mb-8">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D2E83]/10 flex items-center justify-center shrink-0">
                    <span className="text-base font-extrabold text-[#2D2E83]">
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#282e3e]">{review.author}</p>
                    <p className="text-sm text-[#586380]">{review.role}</p>
                  </div>
                </div>

                {/* Google badge */}
                <div className="flex items-center gap-2.5 bg-[#f6f7fb] rounded-lg px-4 py-2.5 border border-[#d9dde8]/60">
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
        ))}

        {/* CTA nudge */}
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

      {/* Testimonials → Contact: same bg (#f6f7fb), seamless — no wave needed */}
    </section>
  );
}

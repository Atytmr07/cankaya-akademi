"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play } from "lucide-react";

const videos = [
  "/cankayaakademi_1770656879_3828869379526529895_52179034032.mp4",
  "/cankayaakademi_1770657382_3828873500522486382_52179034032.mp4",
  "/cankayaakademi_1771347776_3834665319755741423_52179034032.mp4",
  "/cankayaakademi_1772593498_3845114964860257884_52179034032.mp4",
  "/cankayaakademi_1772716204_3846142480991704396_52179034032.mp4",
  "/cankayaakademi_1774561293_3861622136914084526_52179034032.mp4",
  "/cankayaakademi_1776929406_3881487229759799992_52179034032.mp4",
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mutedStates, setMutedStates] = useState<boolean[]>(
    videos.map(() => true)
  );
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  function updateScrollButtons() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card?.offsetWidth ?? 280;
    const gap = 20;
    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  function togglePlay(index: number) {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      videoRefs.current.forEach((v, i) => {
        if (i !== index && v && !v.paused) v.pause();
      });
      void video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  }

  function toggleMute(e: React.MouseEvent, index: number) {
    e.stopPropagation();
    setMutedStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }

  return (
    <section className="py-20 sm:py-28 bg-white" id="galeri">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2E83] tracking-tight">
            Akademiden Kareler
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Öğrencilerimizin akademi yaşamından anlar.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg shadow-slate-200/80 border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#2D2E83] hover:border-[#2D2E83]/20 transition-all duration-200 cursor-pointer disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg shadow-slate-200/80 border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#2D2E83] hover:border-[#2D2E83]/20 transition-all duration-200 cursor-pointer disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((src, index) => (
              <div
                key={src}
                data-card
                className="snap-center shrink-0 w-[240px] sm:w-[280px] lg:w-[300px]"
              >
                <button
                  type="button"
                  onClick={() => togglePlay(index)}
                  className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg shadow-slate-300/40 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  aria-label={playingIndex === index ? "Videoyu durdur" : "Videoyu oynat"}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={src}
                    muted={mutedStates[index]}
                    playsInline
                    loop
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                    onPlay={() => setPlayingIndex(index)}
                    onPause={() =>
                      setPlayingIndex((prev) => (prev === index ? null : prev))
                    }
                  />

                  {/* Play overlay (only when not playing) */}
                  {playingIndex !== index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-200">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                        <Play
                          className="w-6 h-6 sm:w-7 sm:h-7 text-[#2D2E83] ml-1"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </div>
                    </div>
                  )}

                  {/* Mute Toggle */}
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => toggleMute(e, index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleMute(e as unknown as React.MouseEvent, index);
                      }
                    }}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200 cursor-pointer"
                    aria-label={mutedStates[index] ? "Sesi aç" : "Sesi kapat"}
                  >
                    {mutedStates[index] ? (
                      <VolumeX className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Volume2 className="w-4 h-4" strokeWidth={2} />
                    )}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

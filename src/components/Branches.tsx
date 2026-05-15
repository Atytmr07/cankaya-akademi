"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Branch = {
  name: string;
  tag: string;
  address: string;
  phone: string;
  hours: string;
  mapsUrl: string;
  embedUrl: string;
  photos: string[];
  isTemplate?: boolean;
};

const branches: Branch[] = [
  {
    name: "Çankaya Akademi · Ana Şube",
    tag: "Öğrenci Etkinlik Merkezi",
    address:
      "Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin 14-B, Kepez / Antalya",
    phone: "0544 211 75 17",
    hours: "Pzt - Cmt · 09:00 - 19:00",
    mapsUrl: "https://maps.app.goo.gl/?q=%C3%87ankaya+Akademi+Kepez",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.081883201575!2d30.677956599999998!3d36.93621050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f036ee37241%3A0xa3ee53a28e795753!2s%C3%87ankaya%20Akademi!5e0!3m2!1str!2str!4v1778192075388!5m2!1str!2str",
    photos: [
      "/2026-02-09.webp",
      "/gallery/etut-saatleri.png",
      "/gallery/lgs-hazirligi.png",
      "/gallery/birebir-kocluk.png",
      "/gallery/odev-yapan.png",
    ],
  },
  {
    name: "Çankaya Akademi · 2. Şube",
    tag: "Etüt & Sosyal Gelişim Merkezi",
    address: "Adres yakında güncellenecektir · Kepez / Antalya",
    phone: "0544 211 75 17",
    hours: "Pzt - Cmt · 09:00 - 19:00",
    mapsUrl: "#",
    embedUrl: "",
    photos: [],
    isTemplate: true,
  },
];

export default function Branches() {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  function openBranch(branch: Branch) {
    if (branch.photos.length === 0) return;
    setActiveBranch(branch);
    setPhotoIndex(0);
  }

  function closeBranch() {
    setActiveBranch(null);
  }

  function nextPhoto() {
    if (!activeBranch) return;
    setPhotoIndex((i) => (i + 1) % activeBranch.photos.length);
  }

  function prevPhoto() {
    if (!activeBranch) return;
    setPhotoIndex((i) =>
      i === 0 ? activeBranch.photos.length - 1 : i - 1,
    );
  }

  useEffect(() => {
    if (!activeBranch) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBranch();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };

  }, [activeBranch]);

  return (
    <section className="pt-20 sm:pt-28 pb-0 bg-[#f6f7fb]" id="subelerimiz">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2D2E83]/8 text-[#2D2E83] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Şubelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282e3e] tracking-tight">
            Kepez&apos;de{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #2D2E83 0%, #0ea5e9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              İki Şubemiz
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#586380] max-w-2xl mx-auto">
            Şubelerimize tıklayarak fotoğrafları inceleyin, eğitim
            danışmanlarımızla tanışın.
          </p>
        </motion.div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => {
            const canOpen = branch.photos.length > 0;
            const cardClickable = canOpen
              ? "cursor-pointer hover:shadow-xl hover:-translate-y-0.5"
              : "";

            return (
              <motion.article
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openBranch(branch)}
                className={`group bg-white rounded-lg overflow-hidden shadow-card transition-all duration-300 border border-[#d9dde8]/60 flex flex-col ${cardClickable}`}
              >
                {/* Map / Image */}
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                  {branch.embedUrl ? (
                    <iframe
                      src={branch.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name} konum haritası`}
                      className="absolute inset-0 pointer-events-none"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
                      <div className="text-center px-6">
                        <div className="w-14 h-14 mx-auto rounded-lg bg-[#2D2E83]/10 flex items-center justify-center mb-3">
                          <MapPin
                            className="w-7 h-7 text-[#2D2E83]/60"
                            strokeWidth={1.5}
                          />
                        </div>
                        <p className="text-sm font-medium text-slate-400">
                          Konum bilgisi yakında
                        </p>
                      </div>
                    </div>
                  )}

                  {branch.isTemplate && (
                    <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full uppercase tracking-wider border border-amber-200">
                      Yakında Açılıyor
                    </span>
                  )}

                  {canOpen && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#2D2E83] text-[11px] font-bold rounded-full shadow-md group-hover:bg-[#2D2E83] group-hover:text-white transition-colors duration-200">
                      <Images className="w-3.5 h-3.5" strokeWidth={2.2} />
                      {branch.photos.length} Fotoğraf
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-[#E30A17] uppercase tracking-wider mb-2">
                    {branch.tag}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5">
                    {branch.name}
                  </h3>

                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="w-5 h-5 text-[#2D2E83] mt-0.5 shrink-0"
                        strokeWidth={1.8}
                      />
                      <span className="text-sm text-slate-600 leading-relaxed">
                        {branch.address}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone
                        className="w-5 h-5 text-[#2D2E83] shrink-0"
                        strokeWidth={1.8}
                      />
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-semibold text-slate-700 hover:text-[#2D2E83] transition-colors cursor-pointer"
                      >
                        {branch.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock
                        className="w-5 h-5 text-[#2D2E83] shrink-0"
                        strokeWidth={1.8}
                      />
                      <span className="text-sm text-slate-600">
                        {branch.hours}
                      </span>
                    </li>
                  </ul>

                  {/* Action */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {canOpen ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openBranch(branch);
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#2D2E83] text-white font-semibold rounded-full hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer text-sm shadow-card-sm"
                      >
                        <Images className="w-4 h-4" strokeWidth={2} />
                        Fotoğrafları Gör
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 text-slate-400 font-semibold rounded-full text-sm cursor-not-allowed"
                      >
                        Detaylar Yakında
                      </button>
                    )}

                    {!branch.isTemplate && (
                      <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border-2 border-[#2D2E83] text-[#2D2E83] font-semibold rounded-full hover:bg-[#2D2E83]/5 transition-colors duration-200 cursor-pointer text-sm"
                      >
                        <Navigation className="w-4 h-4" strokeWidth={2} />
                        Yol Tarifi
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Wave → Gallery (#ffffff) */}
      <div className="pointer-events-none mt-12 sm:mt-16 -mb-px">
        <svg viewBox="0 0 1440 60" className="w-full block h-[44px] sm:h-[64px]" style={{ fill: "#ffffff" }} preserveAspectRatio="none">
          <path d="M0,60 L0,40 C240,12 480,56 720,34 C960,12 1200,50 1440,30 L1440,60 Z" />
        </svg>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeBranch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeBranch}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeBranch.name} fotoğraf galerisi`}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-card flex flex-col max-h-[92vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 shrink-0">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#E30A17] uppercase tracking-wider">
                    {activeBranch.tag}
                  </p>
                  <h3 className="text-base sm:text-xl font-extrabold text-slate-900 truncate">
                    {activeBranch.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeBranch}
                  className="shrink-0 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Photo Viewer */}
              <div className="relative bg-slate-900 aspect-[16/10] sm:aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={photoIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeBranch.photos[photoIndex]}
                      alt={`${activeBranch.name} - Fotoğraf ${photoIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {activeBranch.photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPhoto}
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                      aria-label="Önceki fotoğraf"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                      aria-label="Sonraki fotoğraf"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {photoIndex + 1} / {activeBranch.photos.length}
                    </div>
                  </>
                )}
              </div>

              {/* Footer Info */}
              <div className="px-5 sm:px-7 py-4 sm:py-5 border-t border-slate-100 bg-slate-50/60 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <MapPin
                    className="w-5 h-5 text-[#2D2E83] mt-0.5 shrink-0"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {activeBranch.address}
                  </span>
                </div>
                {!activeBranch.isTemplate && (
                  <a
                    href={activeBranch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2D2E83] text-white font-semibold rounded-full hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer text-sm shadow-card-sm"
                  >
                    <Navigation className="w-4 h-4" strokeWidth={2} />
                    Yol Tarifi Al
                  </a>
                )}
              </div>

              {/* Thumbnail Strip */}
              {activeBranch.photos.length > 1 && (
                <div className="px-5 sm:px-7 py-3 border-t border-slate-100 bg-white shrink-0 overflow-x-auto">
                  <div className="flex gap-2">
                    {activeBranch.photos.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setPhotoIndex(i)}
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 cursor-pointer transition-all duration-200 ${
                          i === photoIndex
                            ? "ring-2 ring-[#2D2E83] ring-offset-2"
                            : "opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`Fotoğraf ${i + 1}'e geç`}
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

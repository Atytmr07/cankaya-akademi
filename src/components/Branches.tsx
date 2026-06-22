"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Camera,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/905442117517";

type Photo = { src: string; alt: string };

type Branch = {
  id: string;
  name: string;
  shortLabel: string;
  tag: string;
  address: string;
  phone: string;
  hours: string;
  navUrl: string;
  embedUrl: string;
  photos: Photo[];
  features: string[];
  accent: string;
  accentBg: string;
  accentFeat: string;
};

const branches: Branch[] = [
  {
    id: "ana",
    name: "Çankaya Akademi",
    shortLabel: "Ana Şube",
    tag: "Öğrenci Etkinlik Merkezi · İlkokul 1 – 4. Sınıf",
    address:
      "Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin 14-B, Kepez / Antalya",
    phone: "0544 211 75 17",
    hours: "Pzt – Cmt · 09:00 – 19:00",
    navUrl:
      "https://www.google.com/maps/dir/?api=1&destination=36.9362105,30.6779566",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.081883201575!2d30.677956599999998!3d36.93621050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f036ee37241%3A0xa3ee53a28e795753!2s%C3%87ankaya%20Akademi!5e0!3m2!1str!2str!4v1778192075388!5m2!1str!2str",
    photos: [
      { src: "/etkinlik1.jpeg", alt: "Çankaya Akademi Ana Şube — Bina Cephesi" },
      { src: "/etkinlik2.jpeg", alt: "Çankaya Akademi Ana Şube — Giriş" },
      { src: "/etkinlik3.jpeg", alt: "Çankaya Akademi Ana Şube — Dış Görünüm" },
    ],
    features: [
      "Etüt & Ödev Desteği",
      "Yabancı Dil Eğitimi",
      "Satranç & Akıl Oyunları",
      "Bursluluk Hazırlığı",
    ],
    accent: "#2D2E83",
    accentBg: "bg-[#2D2E83]",
    accentFeat: "bg-[#2D2E83]/10 text-[#2D2E83]",
  },
  {
    id: "segem",
    name: "Çankaya Akademi",
    shortLabel: "2. Şube · SEGEM",
    tag: "Sosyal Etkinlik ve Gelişim Merkezi · Ortaokul 5 – 8. Sınıf",
    address:
      "Çankaya Mah. Barış Manço Bulvarı Hill Palace Konutları B Blok No:185 / B No:15, Kepez / Antalya",
    phone: "0544 211 75 17",
    hours: "Pzt – Cmt · 09:00 – 19:00",
    navUrl:
      "https://www.google.com/maps/dir/?api=1&destination=36.93868257646899,30.677395592991456",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d357.2248083032518!2d30.677395592991456!3d36.93868257646899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1782110732230!5m2!1str!2str",
    photos: [
      { src: "/orta1.jpeg", alt: "Çankaya Akademi SEGEM — Bina Cephesi" },
      { src: "/orta2.jpeg", alt: "Çankaya Akademi SEGEM — Giriş ve Bahçe" },
    ],
    features: [
      "LGS Hazırlık Programı",
      "Sessiz Kütüphane",
      "Online Eğitim Desteği",
      "Deneme Kulübü",
    ],
    accent: "#E30A17",
    accentBg: "bg-[#E30A17]",
    accentFeat: "bg-[#E30A17]/10 text-[#E30A17]",
  },
];

type LightboxState = { branch: Branch; index: number } | null;

/* ── Per-branch card with its own photo carousel state ──────────── */
function BranchCard({
  branch,
  onOpenLightbox,
}: {
  branch: Branch;
  onOpenLightbox: (b: Branch, i: number) => void;
}) {
  const [activePhoto, setActivePhoto] = useState(0);

  function prev(e: React.MouseEvent) {
    e.stopPropagation();
    setActivePhoto((i) => (i === 0 ? branch.photos.length - 1 : i - 1));
  }
  function next(e: React.MouseEvent) {
    e.stopPropagation();
    setActivePhoto((i) => (i + 1) % branch.photos.length);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-3xl overflow-hidden shadow-card-hover border border-slate-100/80"
    >
      {/* ── Colored header band ───────────────────────────────────── */}
      <div
        className="px-7 py-5 flex items-start sm:items-center justify-between gap-4"
        style={{ backgroundColor: branch.accent }}
      >
        <div>
          <p className="text-white/65 text-[11px] font-bold uppercase tracking-widest mb-0.5">
            {branch.shortLabel}
          </p>
          <h3 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">
            {branch.name}
          </h3>
          <p className="text-white/70 text-sm mt-1 leading-snug">{branch.tag}</p>
        </div>
        <div className="shrink-0 hidden sm:flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5">
          <MapPin className="w-3.5 h-3.5 text-white/80" strokeWidth={2} />
          <span className="text-white/80 text-xs font-semibold whitespace-nowrap">
            Kepez, Antalya
          </span>
        </div>
      </div>

      {/* ── Photo + Map row ───────────────────────────────────────── */}
      <div className="grid lg:grid-cols-2">
        {/* Photo carousel */}
        <div
          className="relative h-[300px] sm:h-[380px] lg:h-[420px] overflow-hidden bg-slate-100 cursor-zoom-in"
          onClick={() => onOpenLightbox(branch, activePhoto)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhoto}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={branch.photos[activePhoto].src}
                alt={branch.photos[activePhoto].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

          {/* Photo count badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold rounded-full px-3 py-1.5 pointer-events-none">
            <Camera className="w-3.5 h-3.5" strokeWidth={2} />
            {branch.photos.length} Fotoğraf
          </div>

          {/* Nav arrows */}
          {branch.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Önceki fotoğraf"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                aria-label="Sonraki fotoğraf"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" strokeWidth={2} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                {branch.photos.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full bg-white transition-all duration-300 ${
                      i === activePhoto ? "w-5 opacity-100" : "w-1.5 opacity-50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Click hint */}
          <div className="absolute bottom-4 right-4 text-white/70 text-[10px] font-medium pointer-events-none">
            Tam ekran için tıkla ↗
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="relative h-[280px] sm:h-[340px] lg:h-[420px] bg-slate-100">
          <iframe
            src={branch.embedUrl}
            title={`${branch.name} ${branch.shortLabel} konumu`}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* ── Info + Features + Buttons ─────────────────────────────── */}
      <div className="p-6 sm:p-8">
        {/* Contact row */}
        <div className="grid sm:grid-cols-3 gap-x-6 gap-y-3 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-3">
            <MapPin
              className="w-4 h-4 text-slate-400 mt-0.5 shrink-0"
              strokeWidth={1.8}
            />
            <span className="text-sm text-slate-600 leading-relaxed">
              {branch.address}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone
              className="w-4 h-4 text-slate-400 shrink-0"
              strokeWidth={1.8}
            />
            <a
              href="tel:+905442117517"
              className="text-sm font-bold text-slate-800 hover:underline cursor-pointer"
            >
              {branch.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock
              className="w-4 h-4 text-slate-400 shrink-0"
              strokeWidth={1.8}
            />
            <span className="text-sm text-slate-600">{branch.hours}</span>
          </div>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 mb-7">
          {branch.features.map((f) => (
            <span
              key={f}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full ${branch.accentFeat}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.2} />
              {f}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={branch.navUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-bold rounded-2xl text-sm shadow-card-sm hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: branch.accent }}
          >
            <Navigation className="w-4 h-4" strokeWidth={2} />
            Yol Tarifi Al
          </a>
          <a
            href="tel:+905442117517"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 font-bold rounded-2xl text-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            style={{ borderColor: branch.accent, color: branch.accent }}
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Hemen Ara
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white font-bold rounded-2xl text-sm hover:bg-[#1fbc5a] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ────────────────────────────────────────────────── */
export default function Branches() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = useCallback((branch: Branch, index: number) => {
    setLightbox({ branch, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevPhoto = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index:
              prev.index === 0
                ? prev.branch.photos.length - 1
                : prev.index - 1,
          }
        : null,
    );
  }, []);

  const nextPhoto = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index + 1) % prev.branch.photos.length }
        : null,
    );
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, prevPhoto, nextPhoto]);

  return (
    <section className="pt-20 sm:pt-28 pb-0 bg-[#f6f7fb]" id="subelerimiz">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
                background:
                  "linear-gradient(130deg, #2D2E83 0%, #0ea5e9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              İki Şubemiz
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#586380] max-w-2xl mx-auto">
            Fotoğrafları inceleyin, konumuzu haritada görün, bizi hemen arayın
            ya da WhatsApp&apos;tan yazın.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {branches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Wave → Gallery */}
      <div className="pointer-events-none mt-12 sm:mt-16 -mb-px">
        <svg
          viewBox="0 0 1440 60"
          className="w-full block h-[44px] sm:h-[64px]"
          style={{ fill: "#ffffff" }}
          preserveAspectRatio="none"
        >
          <path d="M0,60 L0,40 C240,12 480,56 720,34 C960,12 1200,50 1440,30 L1440,60 Z" />
        </svg>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.branch.name} fotoğraf galerisi`}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 sm:px-7 py-4 shrink-0"
                style={{ backgroundColor: lightbox.branch.accent }}
              >
                <div>
                  <p className="text-white/65 text-[11px] font-bold uppercase tracking-widest">
                    {lightbox.branch.shortLabel}
                  </p>
                  <h3 className="text-white text-lg font-extrabold">
                    {lightbox.branch.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Photo */}
              <div className="relative bg-slate-900 aspect-[16/10] sm:aspect-[16/9] shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox.index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={lightbox.branch.photos[lightbox.index].src}
                      alt={lightbox.branch.photos[lightbox.index].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {lightbox.branch.photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPhoto}
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                      aria-label="Önceki"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-700" strokeWidth={2} />
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                      aria-label="Sonraki"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-700" strokeWidth={2} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {lightbox.index + 1} / {lightbox.branch.photos.length}
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 sm:px-7 py-4 bg-slate-50 border-t border-slate-100 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <MapPin
                    className="w-4 h-4 text-[#2D2E83] mt-0.5 shrink-0"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm text-slate-600">
                    {lightbox.branch.address}
                  </span>
                </div>
                <a
                  href={lightbox.branch.navUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-white font-bold rounded-full text-sm hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ backgroundColor: lightbox.branch.accent }}
                >
                  <Navigation className="w-4 h-4" strokeWidth={2} />
                  Yol Tarifi Al
                </a>
              </div>

              {/* Thumbnails */}
              {lightbox.branch.photos.length > 1 && (
                <div className="px-5 sm:px-7 py-3 bg-white border-t border-slate-100 shrink-0 overflow-x-auto">
                  <div className="flex gap-2">
                    {lightbox.branch.photos.map((photo, i) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() =>
                          setLightbox((prev) =>
                            prev ? { ...prev, index: i } : null,
                          )
                        }
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-200 ${
                          i === lightbox.index
                            ? "opacity-100"
                            : "opacity-55 hover:opacity-100"
                        }`}
                        style={
                          i === lightbox.index
                            ? {
                                outline: `2px solid ${lightbox.branch.accent}`,
                                outlineOffset: "2px",
                              }
                            : undefined
                        }
                        aria-label={`Fotoğraf ${i + 1}`}
                      >
                        <Image
                          src={photo.src}
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

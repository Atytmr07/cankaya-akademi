"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, AlertCircle } from "lucide-react";

// WhatsApp uluslararası format: 90 + 5XX XXX XX XX (boşluksuz)
const WHATSAPP_NUMBER = "905442117517";

type Status = "idle" | "success" | "error";

function buildWhatsAppUrl(data: {
  veliAdi: string;
  ogrenciSinifi: string;
  telefon: string;
}): string {
  const sinifLabel =
    data.ogrenciSinifi === "ilkokul"
      ? "İlkokul (1-4. Sınıf)"
      : "Ortaokul (5-8. Sınıf)";

  const message = [
    "Merhaba, web sitenizden ön kayıt başvurusu yapıyorum:",
    "",
    `Veli Adı: ${data.veliAdi}`,
    `Öğrenci Sınıfı: ${sinifLabel}`,
    `Telefon: ${data.telefon}`,
    "",
    "Lütfen benimle iletişime geçer misiniz? Teşekkürler.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    veliAdi: "",
    ogrenciSinifi: "",
    telefon: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (
      !formData.veliAdi.trim() ||
      !formData.ogrenciSinifi ||
      !formData.telefon.trim()
    ) {
      setStatus("error");
      setErrorMessage("Lütfen tüm alanları doldurun.");
      return;
    }

    const url = buildWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  return (
    <section
      className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50"
      id="iletisim"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#E30A17]/10 text-[#E30A17] text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
              İletişim
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2E83] leading-tight tracking-tight">
              Öğrencimizin Başarı Serüvenini Birlikte Planlayalım.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Formu doldurun, eğitim danışmanlarımız sizi en kısa sürede
              arasın. İlk görüşme tamamen ücretsizdir.
            </p>

            <div className="mt-8 flex items-center gap-4 p-4 bg-[#2D2E83]/5 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#2D2E83]/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#2D2E83]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Hemen Arayın</p>
                <a
                  href="tel:+905442117517"
                  className="text-lg font-bold text-[#2D2E83] hover:text-[#1e1f5c] transition-colors cursor-pointer"
                >
                  0544 211 75 17
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2
                      className="w-8 h-8 text-green-600"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    WhatsApp Açıldı
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Hazırlanan mesajı göndermeniz yeterli. Eğitim
                    danışmanımız sizi en kısa sürede arayacaktır.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        veliAdi: "",
                        ogrenciSinifi: "",
                        telefon: "",
                      });
                    }}
                    className="mt-6 text-sm font-semibold text-[#2D2E83] hover:underline cursor-pointer"
                  >
                    Yeni başvuru gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="veliAdi"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Veli Adı Soyadı
                    </label>
                    <input
                      type="text"
                      id="veliAdi"
                      name="veliAdi"
                      required
                      autoComplete="name"
                      maxLength={120}
                      value={formData.veliAdi}
                      onChange={(e) => {
                        setFormData({ ...formData, veliAdi: e.target.value });
                        if (status === "error") setStatus("idle");
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D2E83]/30 focus:border-[#2D2E83] transition-all duration-200"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ogrenciSinifi"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Öğrenci Sınıfı
                    </label>
                    <select
                      id="ogrenciSinifi"
                      name="ogrenciSinifi"
                      required
                      value={formData.ogrenciSinifi}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          ogrenciSinifi: e.target.value,
                        });
                        if (status === "error") setStatus("idle");
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2D2E83]/30 focus:border-[#2D2E83] transition-all duration-200 cursor-pointer appearance-none"
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="ilkokul">İlkokul (1-4. Sınıf)</option>
                      <option value="ortaokul">Ortaokul (5-8. Sınıf)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                      value={formData.telefon}
                      onChange={(e) => {
                        setFormData({ ...formData, telefon: e.target.value });
                        if (status === "error") setStatus("idle");
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D2E83]/30 focus:border-[#2D2E83] transition-all duration-200"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                      <AlertCircle
                        className="w-5 h-5 text-[#E30A17] mt-0.5 shrink-0"
                        strokeWidth={2}
                      />
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1faa52] transition-colors duration-200 cursor-pointer shadow-lg shadow-green-200/60 text-base"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp ile Gönder
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    Tıkladığınızda WhatsApp açılacak ve mesajınız hazır olarak
                    gelecektir. Sadece &quot;Gönder&quot;e basmanız yeterli.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";

type Branch = {
  name: string;
  tag: string;
  address: string;
  phone: string;
  hours: string;
  mapsUrl: string;
  embedUrl: string;
  isTemplate?: boolean;
};

const branches: Branch[] = [
  {
    name: "Çankaya Akademi · Ana Şube",
    tag: "Kişisel Gelişim Merkezi",
    address:
      "Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin 14-B, Kepez / Antalya",
    phone: "0544 211 75 17",
    hours: "Pzt - Cmt · 09:00 - 19:00",
    mapsUrl: "https://maps.app.goo.gl/?q=%C3%87ankaya+Akademi+Kepez",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.081883201575!2d30.677956599999998!3d36.93621050000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f036ee37241%3A0xa3ee53a28e795753!2s%C3%87ankaya%20Akademi!5e0!3m2!1str!2str!4v1778192075388!5m2!1str!2str",
  },
  {
    name: "Çankaya Akademi · 2. Şube",
    tag: "Etüt & Sosyal Gelişim Merkezi",
    address: "Adres yakında güncellenecektir · Kepez / Antalya",
    phone: "0544 211 75 17",
    hours: "Pzt - Cmt · 09:00 - 19:00",
    mapsUrl: "#",
    embedUrl: "",
    isTemplate: true,
  },
];

export default function Branches() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="subelerimiz">
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
            Şubelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2E83] tracking-tight">
            Kepez&apos;de İki Lokasyon
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Size en yakın şubemize uğrayın, eğitim danışmanlarımızla tanışın.
          </p>
        </motion.div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.article
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/60 hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
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
                    className="absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
                    <div className="text-center px-6">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-[#2D2E83]/10 flex items-center justify-center mb-3">
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
                {branch.isTemplate ? (
                  <button
                    type="button"
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 text-slate-400 font-semibold rounded-xl text-sm cursor-not-allowed"
                  >
                    Detaylar Yakında
                  </button>
                ) : (
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#2D2E83] text-white font-semibold rounded-xl hover:bg-[#1e1f5c] transition-colors duration-200 cursor-pointer text-sm shadow-md shadow-[#2D2E83]/20"
                  >
                    <Navigation className="w-4 h-4" strokeWidth={2} />
                    Yol Tarifi Al
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

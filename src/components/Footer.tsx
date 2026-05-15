import { MapPin, Phone, User } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/cankayaakademi/";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#2D2E83] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Çankaya
              </span>
              <span className="text-2xl font-light text-red-400">Akademi</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              İlkokul ve ortaokul öğrencileri için akademik destek, LGS
              hazırlık, İngilizce, satranç ve öğrenci etkinlik merkezi.
            </p>

            {/* Social */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-5 px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-full transition-colors duration-200 cursor-pointer group"
            >
              <InstagramIcon className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-white/90">
                @cankayaakademi
              </span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-5">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 shrink-0" strokeWidth={1.8} />
                <span className="text-sm text-white/70 leading-relaxed">
                  Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin
                  14-B, Kepez / Antalya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 shrink-0" strokeWidth={1.8} />
                <a
                  href="tel:+905442117517"
                  className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  0544 211 75 17
                </a>
              </li>
              <li className="flex items-center gap-3">
                <User className="w-5 h-5 text-red-400 shrink-0" strokeWidth={1.8} />
                <span className="text-sm text-white/70">Sevgül Şener</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-5">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Kurumsal", href: "#kurumsal" },
                { label: "Programlarımız", href: "#programlar" },
                { label: "Şubelerimiz", href: "#subelerimiz" },
                { label: "SSS", href: "#sss" },
                { label: "İletişim", href: "#iletisim" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow / Instagram */}
          <div>
            <h4 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-5">
              Bizi Takip Edin
            </h4>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Etkinliklerimizden ve duyurularımızdan haberdar olmak için
              Instagram&apos;da bizi takip edin.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#E30A17] to-[#f56a72] text-white text-sm font-bold rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer shadow-card-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram&apos;da Takip Et
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Çankaya Akademi. Tüm hakları
            saklıdır.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            @cankayaakademi
          </a>
        </div>
      </div>
    </footer>
  );
}

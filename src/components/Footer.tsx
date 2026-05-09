import { MapPin, Phone, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2E83] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
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
              hazırlık ve kişisel gelişim merkezi.
            </p>
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} Çankaya Akademi. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

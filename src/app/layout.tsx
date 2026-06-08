import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const baloo = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-family",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const BASE_URL = "https://cankayaakademi.com";

export const viewport: Viewport = {
  themeColor: "#2D2E83",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Çankaya Akademi | Kepez Antalya — Etüt, LGS Hazırlık & Eğitim Koçluğu",
    template: "%s | Çankaya Akademi",
  },

  description:
    "Antalya Kepez'de 1–8. sınıf öğrencileri için etüt merkezi, LGS hazırlık, birebir eğitim koçluğu, İngilizce ve satranç kursları. 2 şube · Servis imkânı · Google 5.0 ⭐ · ☎ 0544 211 75 17",

  keywords: [
    "Çankaya Akademi",
    "Kepez etüt merkezi",
    "Kepez akademi",
    "Kepez kurs",
    "Kepez etüt",
    "Antalya etüt merkezi",
    "Antalya LGS hazırlık",
    "Kepez özel ders",
    "Kepez eğitim koçluğu",
    "Masadağı etüt merkezi",
    "Masadağı kurs",
    "Masadağı akademi",
    "ilkokul etüt Antalya",
    "ilkokul kurs Kepez",
    "ortaokul etüt Kepez",
    "ortaokul kurs Kepez",
    "ortaokul destek merkezi Antalya",
    "LGS hazırlık Kepez",
    "LGS hazırlık Antalya",
    "ilkokul özel ders Kepez",
    "satranç kursu Antalya",
    "satranç kursu Kepez",
    "İngilizce kursu Kepez",
    "bursluluk sınavı hazırlık Antalya",
    "İOKBS hazırlık Kepez",
    "birebir koçluk Antalya",
    "sınav kaygısı Antalya",
    "ödev yardımı Kepez",
    "çalışma merkezi Kepez",
    "öğrenci etkinlik merkezi Antalya",
    "eğitim koçu Kepez Antalya",
    "servisli etüt merkezi Kepez",
    "Safran Park etüt",
    "Çankaya Mah etüt merkezi",
  ],

  authors: [{ name: "Çankaya Akademi", url: BASE_URL }],
  creator: "Çankaya Akademi",
  publisher: "Çankaya Akademi",
  category: "Eğitim",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/logo-icon.jpeg",
    shortcut: "/logo-icon.jpeg",
    apple: "/logo-icon.jpeg",
  },

  openGraph: {
    title: "Çankaya Akademi | Kepez Antalya — Etüt, LGS Hazırlık & Eğitim Koçluğu",
    description:
      "Kepez'de 1–8. sınıf için etüt, LGS hazırlık, birebir koçluk, İngilizce ve satranç. 2 şube · Servis imkânı · Google 5.0 ⭐",
    url: BASE_URL,
    siteName: "Çankaya Akademi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo-icon.jpeg",
        width: 400,
        height: 400,
        alt: "Çankaya Akademi — Kepez, Antalya",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Çankaya Akademi | Kepez Antalya — Etüt & LGS Hazırlık",
    description:
      "Kepez'de 1–8. sınıf için etüt, LGS hazırlık, birebir koçluk, İngilizce ve satranç. Google 5.0 ⭐",
    images: ["/logo-icon.jpeg"],
  },

  other: {
    // Geo meta tags — local SEO
    "geo.region": "TR-07",
    "geo.placename": "Kepez, Antalya, Türkiye",
    "geo.position": "36.9362105;30.6779566",
    ICBM: "36.9362105, 30.6779566",
    // Dublin Core
    "dc.language": "tr",
    "dc.coverage": "Kepez, Masadağı, Antalya, Türkiye",
    "dc.subject": "Etüt Merkezi, LGS Hazırlık, Eğitim Koçluğu, Kepez, Masadağı",
  },
};

// ── JSON-LD @graph ──────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. LocalBusiness + EducationalOrganization
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": `${BASE_URL}/#organization`,
      name: "Çankaya Akademi",
      alternateName: ["Cankaya Akademi", "Çankaya Etüt Merkezi", "Kepez Etüt Merkezi", "Masadağı Etüt Merkezi"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-icon.jpeg`,
        width: 400,
        height: 400,
      },
      image: `${BASE_URL}/2026-02-09.webp`,
      description:
        "Antalya Kepez'de 1–8. sınıf öğrencileri için etüt merkezi, LGS hazırlık, birebir eğitim koçluğu, İngilizce ve satranç kursları. 2 şube hizmetinizdedir.",
      telephone: "+905442117517",
      priceRange: "₺₺",
      currenciesAccepted: "TRY",
      paymentAccepted: "Nakit, Kredi Kartı",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin 14-B",
        addressLocality: "Kepez",
        addressRegion: "Antalya",
        postalCode: "07070",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.9362105,
        longitude: 30.6779566,
      },
      hasMap: "https://maps.app.goo.gl/?q=%C3%87ankaya+Akademi+Kepez",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Kepez", "@id": "https://www.wikidata.org/wiki/Q1006490" },
        { "@type": "Neighborhood", name: "Masadağı" },
        { "@type": "Neighborhood", name: "Çankaya Mahallesi" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
      sameAs: [
        "https://www.instagram.com/cankayaakademi/",
        "https://maps.app.goo.gl/?q=%C3%87ankaya+Akademi+Kepez",
      ],
      knowsAbout: [
        "LGS Hazırlık",
        "Etüt",
        "Eğitim Koçluğu",
        "Satranç",
        "İngilizce",
        "Birebir Koçluk",
        "Bursluluk Sınavı",
        "İOKBS",
      ],
      numberOfLocations: 2,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905442117517",
        contactType: "customer service",
        availableLanguage: "Turkish",
        areaServed: "TR",
      },
    },

    // 2. WebSite
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Çankaya Akademi",
      url: BASE_URL,
      inLanguage: "tr-TR",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },

    // 3. WebPage
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Çankaya Akademi | Kepez Antalya — Etüt, LGS Hazırlık & Eğitim Koçluğu",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "tr-TR",
      description:
        "Antalya Kepez'de 1–8. sınıf öğrencileri için etüt merkezi, LGS hazırlık ve eğitim koçluğu merkezi.",
    },

    // 4. FAQPage
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Hangi sınıf düzeyindeki öğrencilere hizmet veriyorsunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1. sınıftan 8. sınıfa kadar tüm öğrencilere hizmet veriyoruz. İlkokul (1–4. sınıf) için oyun temelli etkinlik merkezi programımız; ortaokul (5–8. sınıf) için kapsamlı akademik destek ve LGS hazırlık programlarımız mevcuttur.",
          },
        },
        {
          "@type": "Question",
          name: "Servis imkânı var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet! Kepez ve çevre semtlere düzenli servis hizmetimiz mevcuttur. Servis güzergahı ve saatleri hakkında detaylı bilgi için 0544 211 75 17 numaralı telefonumuzdan bize ulaşabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "İngilizce ve satranç kurslarına ayrıca kayıt yaptırmam gerekiyor mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. İngilizce ve satranç kurslarımız programlarımızın entegre bir parçasıdır. Kayıt sırasında hangi kurslara dahil olmak istediğinizi belirtmeniz yeterlidir.",
          },
        },
        {
          "@type": "Question",
          name: "LGS hazırlık programı nasıl işliyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Programa başlarken öğrencinin mevcut seviyesi belirlenir ve kişisel bir çalışma planı hazırlanır. Haftalık deneme sınavları, konu anlatımı, soru çözüm teknikleri ve birebir eğitim koçluğu seanslarından oluşan kapsamlı bir süreç uygulanır.",
          },
        },
        {
          "@type": "Question",
          name: "Ücretler ve ödeme seçenekleri hakkında bilgi alabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ücretler; seçilen programa, ders saatine ve kurs içeriğine göre değişmektedir. Güncel fiyat bilgisi ve esnek ödeme seçenekleri için 0544 211 75 17 numaralı hattı arayabilir ya da ön kayıt formunu doldurabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Veli olarak çocuğumun gelişimini nasıl takip edebilirim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Düzenli veli görüşmeleri, periyodik gelişim raporları ve anlık iletişim kanallarımız aracılığıyla çocuğunuzun akademik ve sosyal gelişimini yakından takip edebilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Kayıt için nasıl başvurabilirim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayfamızdaki Ön Kayıt Formu'nu doldurarak veya 0544 211 75 17 numaralı telefonumuzdan bize ulaşarak kayıt sürecini başlatabilirsiniz.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${baloo.variable} ${nunito.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f6f7fb]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

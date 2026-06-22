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
    default:
      "Kepez Etüt Merkezi | Çankaya Akademi — LGS Hazırlık, Kurs & Koçluk · Antalya",
    template: "%s | Çankaya Akademi Kepez",
  },

  description:
    "Kepez ve Masadağı'nda 1–8. sınıf için etüt merkezi ve kurs. LGS hazırlık, birebir koçluk, İngilizce, satranç. 2 şube · Servis var · Google 5.0 ⭐ · ☎ 0544 211 75 17",

  keywords: [
    // Marka
    "Çankaya Akademi",
    "Cankaya Akademi",
    // Kepez – etüt & kurs
    "Kepez etüt merkezi",
    "Kepez kurs",
    "Kepez kurs merkezi",
    "Kepez etüt",
    "Kepez akademi",
    "Kepez özel ders",
    "Kepez eğitim",
    "Kepez eğitim merkezi",
    "Kepez eğitim koçluğu",
    "Kepez çocuk kursu",
    "Kepez öğrenci etkinlik merkezi",
    "Kepez servisli etüt merkezi",
    // Masadağı (doğru yazım)
    "Masadağı etüt merkezi",
    "Masadağı kurs",
    "Masadağı akademi",
    "Masadağı kurs merkezi",
    "Masadağı özel ders",
    // Mazıdağı (fonetik yanlış yazım — arama trafiği)
    "Mazıdağı etüt merkezi",
    "Mazıdağı kurs",
    "Mazıdağı akademi",
    // Antalya genel
    "Antalya etüt merkezi",
    "Antalya kurs merkezi",
    "Antalya LGS hazırlık",
    "Antalya öğrenci etkinlik merkezi",
    // İlkokul
    "ilkokul etüt Kepez",
    "ilkokul kurs Kepez",
    "ilkokul etüt Antalya",
    "ilkokul özel ders Kepez",
    "1 sınıf etüt Kepez",
    "2 sınıf etüt Kepez",
    "3 sınıf etüt Kepez",
    "4 sınıf etüt Kepez",
    // Ortaokul
    "ortaokul etüt Kepez",
    "ortaokul kurs Kepez",
    "ortaokul destek merkezi Antalya",
    "ortaokul etüt Antalya",
    // LGS
    "LGS hazırlık Kepez",
    "LGS hazırlık Antalya",
    "LGS hazırlık kursu Kepez",
    "LGS hazırlık kursu Antalya",
    "8 sınıf LGS hazırlık Kepez",
    // Kurslar
    "satranç kursu Kepez",
    "satranç kursu Antalya",
    "İngilizce kursu Kepez",
    "İngilizce kursu Antalya",
    "bursluluk sınavı hazırlık Antalya",
    "İOKBS hazırlık Kepez",
    "İOKBS hazırlık Antalya",
    // Diğer
    "birebir koçluk Antalya",
    "eğitim koçu Kepez Antalya",
    "sınav kaygısı Antalya",
    "ödev yardımı Kepez",
    "çalışma merkezi Kepez",
    "Safran Park etüt",
    "Çankaya Mah etüt merkezi",
    "Hill Palace etüt",
    "Barış Manço Bulvarı kurs",
    "SEGEM Kepez",
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
    title:
      "Kepez Etüt Merkezi | Çankaya Akademi — LGS Hazırlık, Kurs & Koçluk",
    description:
      "Kepez ve Masadağı'nda 1–8. sınıf için etüt merkezi, LGS hazırlık, birebir koçluk, İngilizce ve satranç. 2 şube · Servis var · Google 5.0 ⭐",
    url: BASE_URL,
    siteName: "Çankaya Akademi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo-icon.jpeg",
        width: 400,
        height: 400,
        alt: "Çankaya Akademi — Kepez Etüt Merkezi, Antalya",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Kepez Etüt Merkezi | Çankaya Akademi — LGS Hazırlık & Kurs",
    description:
      "Kepez ve Masadağı'nda 1–8. sınıf için etüt merkezi, LGS hazırlık, birebir koçluk. Google 5.0 ⭐",
    images: ["/logo-icon.jpeg"],
  },

  other: {
    // ── Geo meta — yerel SEO için kritik ─────────────────────────
    "geo.region": "TR-07",
    "geo.placename": "Kepez, Antalya, Türkiye",
    "geo.position": "36.9362105;30.6779566",
    ICBM: "36.9362105, 30.6779566",
    // 2. şube (SEGEM) ayrı koordinatlar
    "geo.position.branch2": "36.93868257646899;30.677395592991456",
    // ── Dublin Core ───────────────────────────────────────────────
    "dc.language": "tr",
    "dc.coverage": "Kepez, Masadağı, Mazıdağı, Çankaya Mah., Antalya, Türkiye",
    "dc.subject":
      "Etüt Merkezi, Kurs, LGS Hazırlık, Eğitim Koçluğu, Kepez, Masadağı",
    "dc.type": "Service",
    // ── Diğer ────────────────────────────────────────────────────
    "business:contact_data:locality": "Kepez",
    "business:contact_data:region": "Antalya",
    "business:contact_data:country_name": "Türkiye",
    "business:contact_data:phone_number": "+90 544 211 75 17",
    "place:location:latitude": "36.9362105",
    "place:location:longitude": "30.6779566",
  },
};

// ── JSON-LD @graph ──────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    // 1. Ana şube — LocalBusiness + EducationalOrganization
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": `${BASE_URL}/#organization`,
      name: "Çankaya Akademi",
      alternateName: [
        "Cankaya Akademi",
        "Çankaya Etüt Merkezi",
        "Kepez Etüt Merkezi",
        "Masadağı Etüt Merkezi",
        "Mazıdağı Etüt Merkezi",
        "Kepez Kurs Merkezi",
        "Çankaya Akademi Kepez",
      ],
      slogan: "Geleceğe güvenle hazırlanan çocuklar",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo-icon.jpeg`,
        width: 400,
        height: 400,
      },
      image: [
        `${BASE_URL}/etkinlik1.jpeg`,
        `${BASE_URL}/etkinlik2.jpeg`,
        `${BASE_URL}/etkinlik3.jpeg`,
      ],
      description:
        "Antalya Kepez ve Masadağı'nda 1–8. sınıf öğrencileri için etüt merkezi, LGS hazırlık kursu, birebir eğitim koçluğu, İngilizce ve satranç kursları. 2 şube ile hizmetinizdeyiz.",
      telephone: "+905442117517",
      priceRange: "₺₺",
      currenciesAccepted: "TRY",
      paymentAccepted: "Nakit, Kredi Kartı",
      foundingDate: "2022",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin 14-B",
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
      hasMap:
        "https://www.google.com/maps/place/Çankaya+Akademi/@36.9362105,30.6779566,17z",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      // Hizmet verilen coğrafi alan
      areaServed: [
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 36.9362105,
            longitude: 30.6779566,
          },
          geoRadius: "10000",
        },
        { "@type": "City", name: "Kepez", "@id": "https://www.wikidata.org/wiki/Q1006490" },
        { "@type": "AdministrativeArea", name: "Antalya" },
        { "@type": "Neighborhood", name: "Masadağı" },
        { "@type": "Neighborhood", name: "Mazıdağı" },
        { "@type": "Neighborhood", name: "Çankaya Mahallesi" },
        { "@type": "Neighborhood", name: "Safran Park" },
      ],
      sameAs: [
        "https://www.instagram.com/cankayaakademi/",
        "https://www.google.com/maps/place/Çankaya+Akademi/@36.9362105,30.6779566,17z",
      ],
      // Sunulan hizmetler
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Eğitim Programları — Çankaya Akademi",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Etüt & Ödev Desteği",
              description: "Uzman gözetiminde günlük ödev takibi ve etüt programı.",
              areaServed: "Kepez, Antalya",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LGS Hazırlık Kursu",
              description: "8. sınıf öğrencileri için sistematik LGS hazırlık programı, deneme sınavları ve analiz.",
              areaServed: "Kepez, Antalya",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Birebir Eğitim Koçluğu",
              description: "Kişiye özel çalışma planı, hedef belirleme ve motivasyon desteği.",
              areaServed: "Kepez, Antalya",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bursluluk Sınavı Hazırlık (İOKBS)",
              description: "İOKBS ve özel okul burs sınavlarına hazırlık, kamp sistemi.",
              areaServed: "Kepez, Antalya",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "İngilizce Kursu",
              description: "Yaş grubuna uygun, oyun destekli İngilizce eğitimi.",
              areaServed: "Kepez, Antalya",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Satranç & Akıl Oyunları Kursu",
              description: "Stratejik düşünme ve problem çözme becerileri geliştiren satranç atölyeleri.",
              areaServed: "Kepez, Antalya",
            },
          },
        ],
      },
      knowsAbout: [
        "LGS Hazırlık","Etüt Merkezi","Kurs","Eğitim Koçluğu",
        "Satranç","İngilizce","Birebir Koçluk","Bursluluk Sınavı","İOKBS",
        "İlkokul Eğitimi","Ortaokul Eğitimi","Kepez Eğitim",
      ],
      numberOfLocations: 2,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905442117517",
        contactType: "customer service",
        availableLanguage: "Turkish",
        areaServed: "TR",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      },
    },

    // 2. SEGEM — 2. Şube (branchOf ana şube)
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": `${BASE_URL}/#branch-segem`,
      name: "Çankaya Akademi SEGEM — 2. Şube",
      alternateName: [
        "SEGEM Kepez",
        "Çankaya Akademi 2. Şube",
        "Masadağı Etüt Merkezi SEGEM",
      ],
      branchOf: { "@id": `${BASE_URL}/#organization` },
      url: BASE_URL,
      telephone: "+905442117517",
      description:
        "Kepez Masadağı'nda ortaokul öğrencileri için etüt merkezi, LGS hazırlık kursu, sessiz kütüphane ve online eğitim desteği.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Çankaya Mah. Barış Manço Bulvarı Hill Palace Konutları B Blok No:185 / B No:15",
        addressLocality: "Kepez",
        addressRegion: "Antalya",
        postalCode: "07070",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.93868257646899,
        longitude: 30.677395592991456,
      },
      hasMap:
        "https://www.google.com/maps/dir/?api=1&destination=36.93868257646899,30.677395592991456",
      image: [
        `${BASE_URL}/orta1.jpeg`,
        `${BASE_URL}/orta2.jpeg`,
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: [
        { "@type": "Neighborhood", name: "Masadağı" },
        { "@type": "Neighborhood", name: "Mazıdağı" },
        { "@type": "City", name: "Kepez" },
        { "@type": "AdministrativeArea", name: "Antalya" },
      ],
    },

    // 3. WebSite
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Çankaya Akademi — Kepez Etüt Merkezi",
      url: BASE_URL,
      inLanguage: "tr-TR",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // 4. WebPage
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Kepez Etüt Merkezi | Çankaya Akademi — LGS Hazırlık, Kurs & Koçluk · Antalya",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "tr-TR",
      description:
        "Kepez ve Masadağı'nda 1–8. sınıf için etüt merkezi, LGS hazırlık kursu, birebir koçluk, İngilizce ve satranç. Çankaya Akademi — 2 şube, servis imkânı.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: BASE_URL,
          },
        ],
      },
    },

    // 5. FAQPage — yerel arama sorgularını hedefleyen sorular
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Masadağı veya Kepez'de etüt merkezi var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet! Çankaya Akademi olarak Kepez'de iki şubemizle hizmetinizdeyiz. Ana şubemiz Safran Park'ta (Çankaya Mah. 6380 Sokak), 2. şubemiz SEGEM ise Barış Manço Bulvarı Hill Palace Konutları'nda bulunmaktadır. Her iki şubemiz de Masadağı'na yakın konumdadır.",
          },
        },
        {
          "@type": "Question",
          name: "Kepez'de LGS hazırlık kursu nerede?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Çankaya Akademi, Kepez'de LGS hazırlık kursu sunan iki şubeli bir eğitim merkezidir. 5–8. sınıf öğrencilerine yönelik kapsamlı LGS hazırlık programı; konu anlatımı, haftalık deneme sınavları, analiz raporları ve birebir koçluktan oluşur. Bilgi için ☎ 0544 211 75 17.",
          },
        },
        {
          "@type": "Question",
          name: "Çankaya Akademi'ye nasıl ulaşabilirim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ana Şube: Çankaya Mah. 6380 Sokak Safran Park Sitesi B Blok Zemin 14-B, Kepez / Antalya. SEGEM (2. Şube): Çankaya Mah. Barış Manço Bulvarı Hill Palace Konutları B Blok No:185 / B No:15, Kepez / Antalya. Her iki şubemize Google Haritalar üzerinden yol tarifi alabilirsiniz.",
          },
        },
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
            text: "Evet! Kepez ve Masadağı çevresi için düzenli servis hizmetimiz mevcuttur. Servis güzergahı ve saatleri hakkında bilgi için ☎ 0544 211 75 17 numaralı telefonumuzdan bize ulaşabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Kepez'de İngilizce ve satranç kursu var mı?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, Çankaya Akademi bünyesinde yaş grubuna uygun İngilizce kursları ve satranç atölyeleri mevcuttur. Kurslar haftalık programlara dahil olup ayrı kayıt gerektirmez.",
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
            text: "Ücretler; seçilen programa, ders saatine ve kurs içeriğine göre değişmektedir. Güncel fiyat bilgisi ve esnek ödeme seçenekleri için ☎ 0544 211 75 17 numaralı hattı arayabilirsiniz.",
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
            text: "Sayfamızdaki Ön Kayıt Formu'nu doldurarak veya ☎ 0544 211 75 17 numaralı telefonumuzdan bize ulaşarak kayıt sürecini başlatabilirsiniz.",
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
        {/* Preconnect — Google Maps / Fonts hız */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#f6f7fb]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

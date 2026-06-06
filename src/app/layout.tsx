import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

// Display / headings — rounded, friendly, energetic (full Turkish support)
const baloo = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-family",
  display: "swap",
});

// Body / UI — warm, highly readable
const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Çankaya Akademi | Kepez Antalya - İlkokul & Ortaokul Akademik Destek",
  description:
    "Antalya Kepez'de ilkokul ve ortaokul öğrencileri için LGS hazırlık, akademik destek, eğitim koçluğu ve öğrenci etkinlik merkezi. Servis imkanı mevcuttur.",
  keywords: [
    "Çankaya Akademi",
    "Kepez etüt merkezi",
    "Antalya LGS hazırlık",
    "Kepez özel ders",
    "ilkokul etüt Antalya",
    "ortaokul destek merkezi",
    "eğitim koçluğu Kepez",
    "sınav kaygısı terapisi",
    "Kepez akademi",
  ],
  authors: [{ name: "Çankaya Akademi" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Çankaya Akademi | Kepez Antalya",
    description:
      "İlkokul ve ortaokul öğrencileri için akademik destek, LGS hazırlık ve öğrenci etkinlik merkezi.",
    locale: "tr_TR",
    type: "website",
    siteName: "Çankaya Akademi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Çankaya Akademi | Kepez Antalya",
    description:
      "İlkokul ve ortaokul öğrencileri için akademik destek, LGS hazırlık ve kişisel gelişim merkezi.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Çankaya Akademi",
  url: "https://cankayaakademi.com",
  logo: "https://cankayaakademi.com/logo.png",
  image: "https://cankayaakademi.com/2026-02-09.webp",
  description:
    "Antalya Kepez'de ilkokul ve ortaokul öğrencileri için LGS hazırlık, akademik destek, eğitim koçluğu ve kişisel gelişim merkezi.",
  telephone: "+905442117517",
  email: "",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.instagram.com/cankayaakademi/"],
  hasMap: "https://maps.app.goo.gl/?q=%C3%87ankaya+Akademi+Kepez",
  priceRange: "₺₺",
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

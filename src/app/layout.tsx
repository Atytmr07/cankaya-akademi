import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

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
  title: "Çankaya Akademi | Kepez Antalya - İlkokul & Ortaokul Akademik Destek Merkezi",
  description:
    "Antalya Kepez'de ilkokul ve ortaokul öğrencileri için LGS hazırlık, akademik destek, eğitim koçluğu ve öğrenci etkinlik merkezi. Servis imkanı mevcuttur.",
  keywords: [
    "Çankaya Akademi",
    "Kepez etüt merkezi",
    "Antalya LGS hazırlık",
    "ilkokul etüt",
    "ortaokul destek",
    "eğitim koçluğu",
    "sınav kaygısı terapisi",
  ],
  openGraph: {
    title: "Çankaya Akademi | Kepez Antalya",
    description:
      "İlkokul ve ortaokul öğrencileri için akademik destek, LGS hazırlık ve öğrenci etkinlik merkezi.",
    locale: "tr_TR",
    type: "website",
  },
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
      <body className="min-h-screen bg-[#f6f7fb]">{children}</body>
    </html>
  );
}

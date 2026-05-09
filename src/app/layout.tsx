import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Çankaya Akademi | Kepez Antalya - İlkokul & Ortaokul Akademik Destek Merkezi",
  description:
    "Antalya Kepez'de ilkokul ve ortaokul öğrencileri için LGS hazırlık, akademik destek, eğitim koçluğu ve kişisel gelişim merkezi. Servis imkanı mevcuttur.",
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
      "İlkokul ve ortaokul öğrencileri için akademik destek, LGS hazırlık ve kişisel gelişim merkezi.",
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
    <html lang="tr" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  );
}

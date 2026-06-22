import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Çankaya Akademi — Kepez Etüt Merkezi & Kurs",
    short_name: "Çankaya Akademi",
    description:
      "Kepez ve Masadağı'nda 1–8. sınıf için etüt merkezi, LGS hazırlık, kurs. 2 şube · Servis var.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7fb",
    theme_color: "#2D2E83",
    lang: "tr",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/logo-icon.jpeg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    categories: ["education"],
  };
}

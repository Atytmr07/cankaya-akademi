import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Çankaya Akademi — Kepez Antalya",
    short_name: "Çankaya Akademi",
    description:
      "Kepez'de etüt, LGS hazırlık, eğitim koçluğu, İngilizce ve satranç. 2 şube.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7fb",
    theme_color: "#2D2E83",
    lang: "tr",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["education"],
  };
}

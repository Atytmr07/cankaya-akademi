import type { MetadataRoute } from "next";

const BASE_URL = "https://cankayaakademi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${BASE_URL}/2026-02-09.webp`,
        `${BASE_URL}/gallery/etut-saatleri.png`,
        `${BASE_URL}/gallery/lgs-hazirligi.png`,
        `${BASE_URL}/gallery/birebir-kocluk.png`,
        `${BASE_URL}/gallery/satranc-zeka.png`,
        `${BASE_URL}/gallery/yaratici-ogrenme.png`,
      ],
    },
    {
      url: `${BASE_URL}/#kurumsal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#programlar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#subelerimiz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#galeri`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/#sss`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#iletisim`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}

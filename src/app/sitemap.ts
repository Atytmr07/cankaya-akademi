import type { MetadataRoute } from "next";

const BASE_URL = "https://cankayaakademi.com";
const NOW = new Date("2026-06-22");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        // Şube fotoğrafları (gerçek)
        `${BASE_URL}/etkinlik1.jpeg`,
        `${BASE_URL}/etkinlik2.jpeg`,
        `${BASE_URL}/etkinlik3.jpeg`,
        `${BASE_URL}/orta1.jpeg`,
        `${BASE_URL}/orta2.jpeg`,
        // Logo
        `${BASE_URL}/logo-full.jpeg`,
        `${BASE_URL}/logo-icon.jpeg`,
      ],
    },
    {
      url: `${BASE_URL}/#programlar`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#subelerimiz`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${BASE_URL}/etkinlik1.jpeg`,
        `${BASE_URL}/etkinlik2.jpeg`,
        `${BASE_URL}/etkinlik3.jpeg`,
        `${BASE_URL}/orta1.jpeg`,
        `${BASE_URL}/orta2.jpeg`,
      ],
    },
    {
      url: `${BASE_URL}/#kurumsal`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#sss`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#iletisim`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#galeri`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}

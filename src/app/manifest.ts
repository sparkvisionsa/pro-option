import { MetadataRoute } from "next";
import { BASE_URL, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: SITE_NAME,
    short_name: "Pro Option for Professional Consultant",
    description:
      "برو أوبشن للاستشارات المهنية وتقييم الأصول والآلات في المملكة العربية السعودية.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d2952",
    orientation: "portrait",
    lang: "ar-SA",
    dir: "rtl",
    categories: ["business", "finance", "productivity"],
    icons: [
      {
        src: `${BASE_URL}/favicon-256x256.png`,
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: `${BASE_URL}/favicon-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: `${BASE_URL}/favicon-512x512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "خدماتنا",
        short_name: "الخدمات",
        description: "استعراض الخدمات المهنية والتقييمية",
        url: "/#services",
      },
      {
        name: "تواصل معنا",
        short_name: "التواصل",
        description: "فتح قسم التواصل وطلب الخدمة",
        url: "/#contact",
      },
    ],
  };
}

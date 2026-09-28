import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_FRONT_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONT_URL}/career`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONT_URL}/mentions-legales`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONT_URL}/politique-de-confidentialite`,
      lastModified: new Date(),
    },
  ]
}

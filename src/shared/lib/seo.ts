import { siteConfig } from "@/shared/config/site";

interface MetaInput {
  title: string;
  description: string;
  image: string;
  url: string;
}

function buildMeta({ title, description, image, url }: MetaInput) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: siteConfig.name },
    { property: "og:url", content: url },
    { property: "og:locale", content: siteConfig.locale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export function baseMeta() {
  return buildMeta({
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
  });
}

interface PageHeadInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function pageHead({ title, description, path, image }: PageHeadInput) {
  const url = `${siteConfig.url}${path}`;
  const resolvedImage = `${siteConfig.url}${image ?? siteConfig.ogImage}`;

  return {
    meta: buildMeta({ title, description, image: resolvedImage, url }),
    links: [{ rel: "canonical", href: url }],
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  sameAs: siteConfig.sameAs,
};

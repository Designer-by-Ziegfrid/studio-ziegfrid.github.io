import { useMeta, type MetaOptions } from 'quasar';
import { SITE, SITE_URL } from '@/data/site';
import type { Concept } from '@/data/concepts';
import type { Faq } from '@/data/faqs';

export interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.png`;

export function useSeo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}: SeoOptions): void {
  const url = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
  const options: MetaOptions = {
    title,
    meta: {
      description: { name: 'description', content: description },
      ogTitle: { property: 'og:title', content: title },
      ogDescription: { property: 'og:description', content: description },
      ogUrl: { property: 'og:url', content: url },
      ogImage: { property: 'og:image', content: image },
      ogType: { property: 'og:type', content: type },
      ogSiteName: { property: 'og:site_name', content: SITE.name },
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: title },
      twitterDescription: { name: 'twitter:description', content: description },
      twitterImage: { name: 'twitter:image', content: image },
      ...(noindex ? { robots: { name: 'robots', content: 'noindex, follow' } } : {}),
    },
    link: {
      canonical: { rel: 'canonical', href: url },
    },
  };

  if (jsonLd) {
    options.script = {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd),
      },
    };
  }

  useMeta(options);
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    inLanguage: 'en',
  };
}

export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    email: SITE.email,
    telephone: `+${SITE.phoneE164}`,
    areaServed: 'Worldwide',
    provider: {
      '@type': 'Person',
      name: 'Ziegfrid Gualberto',
      url: SITE.portfolioUrl,
    },
    serviceType: [
      'Custom website design',
      'Web development',
      'UX design',
      'Booking interfaces',
      'E-commerce development',
      'CMS integration',
      'Website maintenance',
    ],
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ziegfrid Gualberto',
    jobTitle: 'Designer and front-end developer',
    url: SITE.portfolioUrl,
    worksFor: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
    },
    sameAs: [SITE.linkedinUrl],
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function conceptJsonLd(concept: Concept) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${concept.name} — ${concept.category} website concept`,
    description: concept.metaDescription,
    url: `${SITE_URL}/work/${concept.slug}`,
    creator: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE_URL,
    },
    genre: 'Web design concept',
    isFamilyFriendly: true,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

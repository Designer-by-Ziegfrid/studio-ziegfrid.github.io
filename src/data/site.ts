export const SITE_URL = 'https://studio-ziegfrid.github.io';

export const SITE = {
  name: 'Studio Ziegfrid',
  shortName: 'Studio Ziegfrid',
  url: SITE_URL,
  description:
    'Bespoke websites designed and built from scratch for resorts, car rentals, laundry shops, grocery stores, and businesses that do not fit a template.',
  email: 'ziegfrid.gualberto@gmail.com',
  phoneDisplay: '+63 917 652 3658',
  phoneE164: '639176523658',
  whatsappUrl: 'https://wa.me/639176523658',
  availability: 'Currently taking on new projects',
  responseTime: 'Usually within 1–2 business days',
  sitemedicUrl: 'https://freelance-guy.github.io',
  portfolioUrl: 'https://zgualberto.github.io',
  linkedinUrl: 'https://www.linkedin.com/in/ziegfrid-gualberto/',
} as const;

export const NAV_LINKS = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

export const CONTACT_CHANNELS = [
  {
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: 'mail',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: SITE.phoneDisplay,
    href: SITE.whatsappUrl,
    icon: 'chat',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'ziegfrid-gualberto',
    href: SITE.linkedinUrl,
    icon: 'work',
    external: true,
  },
] as const;

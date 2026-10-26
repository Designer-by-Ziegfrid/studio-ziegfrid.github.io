export interface ConceptPalette {
  bg: string;
  ink: string;
  accent: string;
  soft: string;
  dark: string;
}

export interface ConceptPreview {
  kicker: string;
  headline: string;
  sub: string;
  cta: string;
  chips: string[];
}

export interface ConceptDesignNotes {
  brief: string;
  direction: string;
  details: string[];
  build: string[];
}

export interface Concept {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  index: string;
  palette: ConceptPalette;
  preview: ConceptPreview;
  metaTitle: string;
  metaDescription: string;
  designNotes: ConceptDesignNotes;
}

export const concepts: Concept[] = [
  {
    slug: 'aster-bay',
    name: 'Aster Bay',
    category: 'Boutique resort',
    tagline: 'A slower kind of luxury.',
    summary:
      'A quiet coastal resort where the website has to sell the feeling of arrival before it sells a room.',
    index: '01',
    palette: {
      bg: '#efe4d0',
      ink: '#193b39',
      accent: '#d86a4a',
      soft: '#d9c7a9',
      dark: '#102c2b',
    },
    preview: {
      kicker: 'Aster Bay · Siargao',
      headline: 'A slower kind of luxury.',
      sub: 'Twelve suites. One long horizon.',
      cta: 'Check availability',
      chips: ['Suites', 'Dining', 'Spa'],
    },
    metaTitle: 'Aster Bay — Resort Website Concept',
    metaDescription:
      'A concept study for Aster Bay, a boutique resort. Slow editorial design, a booking-first interface, and a warm coastal art direction.',
    designNotes: {
      brief:
        'A boutique resort needs to sell a feeling before it sells a room. The site had to feel quiet, tactile, and expensive without becoming cold or corporate.',
      direction:
        'Warm sand, deep sea, generous serif type, and atmosphere-led pacing. Every section slows the scroll down rather than pushing the guest forward.',
      details: [
        'Availability sits above the fold, but never interrupts the atmosphere.',
        'Rooms are presented as stories, not inventory rows.',
        'One clear booking path, repeated at the moments guests are most likely to decide.',
        'Typography and spacing do the luxury work; no gold gradients required.',
      ],
      build: [
        'Responsive booking bar with keyboard-friendly controls.',
        'CSS and SVG art direction instead of heavy stock photography.',
        'Reduced-motion-friendly parallax and reveals.',
      ],
    },
  },
  {
    slug: 'drift',
    name: 'Drift',
    category: 'Car rental',
    tagline: 'The open road, simplified.',
    summary: 'A car rental experience that makes choosing a vehicle feel as good as driving one.',
    index: '02',
    palette: {
      bg: '#efede6',
      ink: '#181818',
      accent: '#e13a2d',
      soft: '#d5d0c4',
      dark: '#101010',
    },
    preview: {
      kicker: 'Drift · Cebu',
      headline: 'Drive something worth remembering.',
      sub: 'Pick-up in 30 seconds. No counters. No queues.',
      cta: 'Find your car',
      chips: ['Economy', 'SUV', 'Convertible'],
    },
    metaTitle: 'Drift — Car Rental Website Concept',
    metaDescription:
      'A concept study for Drift, a car rental brand. Confident type, transparent pricing, and a search-first interface built for the open road.',
    designNotes: {
      brief:
        'A car rental brand needs to make choosing a vehicle feel fast, transparent, and confident. The old category default is a wall of filters and fine print.',
      direction:
        'Graphite, signal red, condensed headlines, and spec-led layouts. The interface feels like a well-organized garage, not a booking engine.',
      details: [
        'Location and dates come first; everything else follows.',
        'Vehicle cards lead with character, then specs, then price.',
        'Transparent extras and deposit information, surfaced early.',
        'A visible path from browsing to keys without a dozen steps.',
      ],
      build: [
        'Search and filter UI with clear keyboard states.',
        'Responsive vehicle comparison layout.',
        'Optimistic micro-interactions that keep the pace brisk.',
      ],
    },
  },
  {
    slug: 'fold',
    name: 'Fold',
    category: 'Laundry service',
    tagline: 'Fresh clothes, zero friction.',
    summary: 'A laundry service that turns a weekly chore into a two-tap habit.',
    index: '03',
    palette: {
      bg: '#f5fbfd',
      ink: '#12325c',
      accent: '#2f6cff',
      soft: '#c9eee4',
      dark: '#0d2547',
    },
    preview: {
      kicker: 'Fold · Makati',
      headline: 'Fresh clothes. Zero friction.',
      sub: 'Pickup, wash, fold, delivered. Track every step.',
      cta: 'Schedule a pickup',
      chips: ['Wash & fold', 'Dry clean', 'Pickup'],
    },
    metaTitle: 'Fold — Laundry Service Website Concept',
    metaDescription:
      'A concept study for Fold, a modern laundry service. Friendly scheduling, live order status, and a clean, frictionless mobile-first flow.',
    designNotes: {
      brief:
        'A laundry service needs to make a chore feel effortless. Customers want to know three things: when you will arrive, what it costs, and where their clothes are.',
      direction:
        'Crisp white, cobalt, soft geometry, and friendly but not childish type. The interface feels like fresh linen: clean, calm, and immediate.',
      details: [
        'Pickup and delivery scheduling in a single, obvious flow.',
        'An order tracker that answers “where are my clothes?” at a glance.',
        'Clear pricing tiers and recurring-plan options.',
        'A mobile-first form that respects thumbs and impatience.',
      ],
      build: [
        'Step-based scheduling UI with accessible validation.',
        'Status tracker with clear progress states.',
        'Lightweight, fast-loading pages with no booking backend required for the concept.',
      ],
    },
  },
  {
    slug: 'market-day',
    name: 'Market Day',
    category: 'Neighborhood grocery',
    tagline: 'The market, at your door.',
    summary:
      'An online grocery that keeps the warmth of the neighborhood market and the speed of a modern basket.',
    index: '04',
    palette: {
      bg: '#f7f0e2',
      ink: '#243b2a',
      accent: '#d94f2b',
      soft: '#dbe6c9',
      dark: '#17291d',
    },
    preview: {
      kicker: 'Market Day · Quezon City',
      headline: 'Good food, close to home.',
      sub: 'Fresh from the market. Delivered in your chosen slot.',
      cta: 'Shop the aisles',
      chips: ['Produce', 'Pantry', 'Dairy'],
    },
    metaTitle: 'Market Day — Grocery Website Concept',
    metaDescription:
      'A concept study for Market Day, a neighborhood grocery. Warm editorial design, a fast basket, and delivery slots that feel human.',
    designNotes: {
      brief:
        'A neighborhood grocery needs to translate the joy of browsing into a fast online shop. The challenge is warmth without slowing the basket down.',
      direction:
        'Cream, leaf green, warm serif headlines, and produce-led art. The interface feels like a weekend market stall, organized by someone who cares.',
      details: [
        'Categories that feel like aisles, not database filters.',
        'A basket that stays out of the way until it is needed.',
        'Delivery slots presented as a practical promise, not a puzzle.',
        'Product cards with enough personality to make browsing enjoyable.',
      ],
      build: [
        'Responsive product grid with filter chips.',
        'Accessible basket drawer and quantity controls.',
        'CSS/SVG produce illustrations instead of stock imagery.',
      ],
    },
  },
];

export const conceptBySlug = (slug: string): Concept | undefined =>
  concepts.find((concept) => concept.slug === slug);

export function nextConcept(slug: string): Concept {
  const index = concepts.findIndex((concept) => concept.slug === slug);
  return concepts[(index + 1) % concepts.length] as Concept;
}

export interface Standard {
  label: string;
  title: string;
  description: string;
  icon: string;
}

export const standards: Standard[] = [
  {
    label: '100%',
    title: 'Custom, not templated',
    description:
      'Every layout, flow, and interaction is designed for your business. No shared theme pretending to be bespoke.',
    icon: 'draw',
  },
  {
    label: 'Fast',
    title: 'Built for real devices',
    description:
      'Performance is part of the design. We aim for quick loads, stable layouts, and interfaces that behave on a mid-range phone.',
    icon: 'bolt',
  },
  {
    label: 'AA',
    title: 'Accessible by default',
    description:
      'Semantic markup, keyboard support, readable contrast, and respect for reduced motion. Accessibility is not an upgrade.',
    icon: 'accessibility_new',
  },
  {
    label: 'Yours',
    title: 'No vendor lock-in',
    description:
      'You own the design, code, content, and domain. If you ever want to move, you can. That is how it should be.',
    icon: 'key',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Measure',
    subtitle: 'Discover',
    description:
      'We talk to you, look at your business, and listen to your customers. The goal is to understand what the website actually needs to do before anyone opens a design file.',
    deliverables: ['Goals & audience', 'Content audit', 'Sitemap', 'Scope & budget'],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Cut & shape',
    description:
      'We turn the strategy into a clear structure, then into a visual system with a point of view. You see the thinking, not just a pretty homepage.',
    deliverables: ['Wireframes', 'Art direction', 'UI design', 'Prototype'],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Stitch',
    description:
      'The design becomes a real, responsive website. Fast, accessible, and tested on the devices your customers actually use.',
    deliverables: ['Front-end build', 'CMS setup', 'Integrations', 'QA'],
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Press',
    description:
      'We handle the technical launch details, check the details twice, and make sure you know how to run your own site afterward.',
    deliverables: ['SEO checks', 'Analytics', 'Training', 'Go live'],
  },
  {
    number: '05',
    title: 'Care',
    subtitle: 'Mend',
    description:
      'A website is not a one-off delivery. We stay available for fixes, updates, and the next round of improvements.',
    deliverables: ['Maintenance', 'Updates', 'Backups', 'Improvements'],
  },
];

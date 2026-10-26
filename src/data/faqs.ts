export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How is this different from Wix or Squarespace?',
    answer:
      'Wix and Squarespace are good tools for some businesses. They become a ceiling when you need a custom booking flow, a specific CMS workflow, unique interactions, or code you actually own. We design and build the thing that fits your business — not the closest template.',
  },
  {
    question: 'Do I own the website?',
    answer:
      'Yes. You own the design, the code, the content, and the domain. There is no proprietary page builder keeping you hostage, and no vendor lock-in. If you ever want to move hosts or work with another developer, you can.',
  },
  {
    question: 'Can I edit the content myself?',
    answer:
      'Yes, when a CMS makes sense. We set up an editing experience for the pages, products, or stories you will actually update, then show you how to use it. For smaller sites, we can keep updates simple and handled through the studio.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A focused site usually takes 3–6 weeks. Larger builds with booking, e-commerce, or integrations run longer. We agree on a realistic timeline before we start, and we do not pretend a complex build can happen in a weekend.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Every project is quoted after a short conversation about scope, timeline, and budget. We do not display fixed packages because two businesses with the same number of pages can need very different work. We will always tell you what can wait until a later phase.',
  },
  {
    question: 'What if my budget is limited?',
    answer:
      'Tell us the range. We will design the smallest site that does the job well, and plan the rest for later. We would rather build a focused site you are proud of than an overbuilt one you regret. No surprise costs, no bloated retainers.',
  },
  {
    question: 'Do you work with existing brands?',
    answer:
      'Yes. If you already have a logo, voice, or visual identity, we build around it. If the brand is still forming, we can shape the digital expression of it without forcing you into a full rebrand.',
  },
  {
    question: 'Can you maintain the site after launch?',
    answer:
      'Yes. Ongoing maintenance is handled through SiteMedic, our care arm for fixes, updates, backups, and small improvements. You can also take the keys and maintain it yourself — we will make sure you have what you need.',
  },
];

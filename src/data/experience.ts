export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Associate Software Engineer',
    company: 'Sodisys SJS Solution Pvt. Ltd.',
    location: 'Trivandrum, Kerala',
    period: 'May 2024 — Present',
    description:
      'Developed backend functionality for an NGO/social-work management web application using Node.js, NestJS, Knex, and MySQL. Developed PDF and Excel report generation and handled large-data reports using queue-based background processing with BullMQ and RabbitMQ. Worked on attendance management with manual and automated check-in/check-out workflows, time tracking, invoice generation, and database migrations and schema alterations.',
    technologies: [
      'Node.js',
      'NestJS',
      'Knex',
      'MySQL',
      'BullMQ',
      'RabbitMQ',
      'PDF',
      'Excel',
    ],
  },
  {
    role: 'React Developer Intern',
    company: 'Tripalive.me Pvt. Ltd.',
    location: 'Bengaluru, Karnataka',
    period: 'Jul 2023 — Apr 2024',
    description:
      'Developed responsive and reusable user-interface components using React.js, Redux, and React Hooks. Translated UI/UX designs and wireframes into functional React components and worked on component optimization and cross-browser/device testing.',
    technologies: ['React.js', 'Redux', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    role: 'Sales Executive',
    company: 'HERO',
    location: 'Nagercoil, Tamil Nadu',
    period: 'Oct 2021 — Sep 2022',
    description:
      'Assisted customers in understanding their requirements, recommended suitable motorcycle models and variants, and explained vehicle features, specifications, pricing, and benefits.',
    technologies: ['Customer Handling', 'Product Presentation', 'Sales'],
  },
];
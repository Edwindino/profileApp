export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 'portfolio-platform',
    name: 'Portfolio Platform',
    description:
      'A polished personal portfolio experience with responsive sections, smooth interaction, and a strong developer-focused visual style.',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: '[PROJECT GITHUB URL]',
    liveUrl: '[PROJECT LIVE URL]',
    accent: 'violet',
  },
  {
    id: 'taskflow-dashboard',
    name: 'TaskFlow Dashboard',
    description:
      'A productivity dashboard to manage projects, tasks, and team progress with clear visual feedback and accessible components.',
    technologies: ['React', 'Node.js', 'MySQL'],
    githubUrl: '[PROJECT GITHUB URL]',
    liveUrl: '[PROJECT LIVE URL]',
    accent: 'cyan',
  },
  {
    id: 'ecommerce-storefront',
    name: 'E-Commerce Storefront',
    description:
      'A storefront concept focused on product discovery, cart interactions, and responsive layouts for modern online shopping.',
    technologies: ['React', 'TypeScript', 'CSS'],
    githubUrl: '[PROJECT GITHUB URL]',
    liveUrl: '[PROJECT LIVE URL]',
    accent: 'amber',
  },
];

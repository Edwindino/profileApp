export interface SkillItem {
  name: string;
  level?: string;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'UI development' },
      { name: 'TypeScript', level: 'Typed logic' },
      { name: 'JavaScript', level: 'Interactivity' },
      { name: 'HTML5', level: 'Structure' },
      { name: 'CSS3', level: 'Styling' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Runtime' },
      { name: 'NestJS', level: 'API architecture' },
      { name: 'Express', level: 'Server logic' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 'Relational data' },
      { name: 'MongoDB', level: 'Flexible storage' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Version control' },
      { name: 'GitHub', level: 'Collaboration' },
      { name: 'VS Code', level: 'Development' },
      { name: 'Figma', level: 'Design handoff' },
    ],
  },
];

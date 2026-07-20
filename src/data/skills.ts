export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: [
      'Python',
      'Django',
      'DRF',
      'FastAPI',
      'SQLAlchemy',
      'REST APIs',
      'JWT',
      'PostgreSQL',
      'SQLite',
    ],
  },
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'EdTech & Ops',
    skills: [
      'Curriculum design (EIKEN, TOEIC, TOEFL, IELTS)',
      'Bilingual EN/JP instruction',
      'Google AppSheet',
      'Google Apps Script',
      'Google Workspace',
      'Stakeholder docs',
      'CSV/data pipelines',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Render/Vercel deploy', 'ApexCharts', 'Stripe (scaffolded)'],
  },
];

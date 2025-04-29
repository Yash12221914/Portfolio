import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Science',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: ux,
  },
  {
    title: 'Software developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Excel',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'R',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'R',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  
];

const experiences = [
  {
    title: 'React Intern',
    company_name: 'Swap',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2024 - Dec 2024',
  },
  {
    title: 'Web dev Intern',
    company_name: 'Vaishnav Tech',
    icon: microverse,
    iconBg: '#333333',
    date: 'Dec 2024 - Jan 2025',
  },
  {
    title: 'HR Intern',
    company_name: 'Edlearnity',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2025 - Feb 2025',
  },
  {
    title: 'Summer Intership and Trainee',
    company_name: 'CipherSchools',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jun 2024 - Aug 2024',
  },
  {
    title: 'Winter Intership and Trainee',
    company_name: 'CipherSchools',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2024 - Feb 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ShopMe',
    description: 'A Shopping Platform integrated with Ai to get best offers and prices.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Yash12221914/ShopMe/tree/master',
    demo:'',
  },
  {
    id: 'project-2',
    name: 'Most Popular Author',
    description:
      'A dynamic dashboard in R to analyze and visualize popular authors and books (2009-2019),.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'To Do List',
    description: 'a task management platform to track and record daily tasks',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Security Camera',
    description: `a surveillance system using OpenCv that records video detecting motion.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Human Safety Incident',
    description:
      'A backend helps to post incidents and tell about the severity',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };

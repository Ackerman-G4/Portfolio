import {
  Terminal,
  Cpu,
  Layers,
  Github,
  Linkedin,
  Facebook,
  type LucideIcon,
} from 'lucide-react';

/* ── Types ── */
export type SkillLevel = 'Daily Use' | 'Familiar' | 'Learning';

export interface SkillItem {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  tech: string[];
  category: string;
  description: string;
  objectives: string[];
  link: string;
  liveLink?: string;
  hasGithub: boolean;
  previewImage: string;
  previewAlt: string;
}

export interface Social {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface Education {
  school: string;
  address?: string;
  degree: string;
  period: string;
  details: string;
}

export interface LearningItem {
  title: string;
  description: string;
  progress: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

/* ── Constants ── */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const roles = [
  'Entry-Level Developer',
  'Junior Front-End Developer',
  'Problem Solver',
  'BSIT Student',
];

export const skills: SkillCategory[] = [
  {
    icon: Terminal,
    title: 'Languages',
    items: [
      { name: 'C# (.NET MAUI)', level: 'Familiar' },
      { name: 'Python', level: 'Familiar' },
      { name: 'SQL & MySQL', level: 'Daily Use' },
      { name: 'Java', level: 'Learning' },
      { name: 'TypeScript', level: 'Daily Use' },
    ],
  },
  {
    icon: Cpu,
    title: 'Stack & Frameworks',
    items: [
      { name: 'React & Tailwind', level: 'Daily Use' },
      { name: 'Firebase', level: 'Familiar' },
      { name: 'Agile Methodology', level: 'Familiar' },
      { name: 'MVVM Architecture', level: 'Familiar' },
      { name: 'Git & Version Control', level: 'Daily Use' },
    ],
  },
  {
    icon: Layers,
    title: 'Design & Tools',
    items: [
      { name: 'Figma & Moqups', level: 'Daily Use' },
      { name: 'Visual Studio & Laragon', level: 'Daily Use' },
      { name: 'System Troubleshooting', level: 'Familiar' },
      { name: 'Technical Documentation', level: 'Familiar' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'AVE - Ventures',
    tech: ['TypeScript', 'React', 'TailwindCSS', 'Firebase'],
    category: 'Enterprise System',
    description:
      'A centralized project management system built to digitize construction operations, eliminate manual labor, and automate result calculations.',
    objectives: [
      'Real-time Inventory Tracking for onsite materials',
      'Automated financial report generation and calculations',
      'Comprehensive project storing and documentation system',
      'Streamlined financial tracking and material monitoring',
    ],
    link: 'https://github.com/Ackerman-G4',
    liveLink: 'https://ave-ventures.web.app/',
    hasGithub: true,
    previewImage: '/AVE-Ventures.jpg',
    previewAlt: 'AVE Ventures project preview',
  },
  {
    title: 'Coftea Inventory & POS',
    tech: ['.NET MAUI', 'C#', 'MySQL', 'MVVM'],
    category: 'Capstone Project',
    description:
      'A cross-platform desktop application for a Coffee & Milk Tea shop that replaces manual inventory and sales processes.',
    objectives: [
      'Real-time inventory tracking and low-stock alerts',
      'MySQL database for products, sales, and reporting',
      'Role-based access security for optimized performance',
      'UI/UX designed with Figma and Moqups',
    ],
    link: 'https://github.com/Ackerman-G4',
    hasGithub: false,
    previewImage: '/Coftea.png',
    previewAlt: 'Coftea project preview',
  },
  {
    title: 'Portfolio Website v2',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    category: 'Personal Project',
    description:
      'A responsive developer portfolio focused on performance, readability, and clear project storytelling.',
    objectives: [
      'Section-based architecture with reusable UI components',
      'Theme support and subtle glassmorphism polish',
      'SEO metadata and branded assets for sharing',
    ],
    link: 'https://github.com/Ackerman-G4',
    hasGithub: true,
    previewImage: '/previews/portfolio-logo-glass.svg',
    previewAlt: 'Portfolio website logo preview',
  },
];

export const aboutParagraphs = [
  'I started coding because I enjoyed turning ideas into real, usable tools. During my ICT strand and early BSIT years, I became curious about how software could solve everyday workflow problems for teams and small businesses.',
  'What motivates me most is building interfaces that are easy to understand and pleasant to use. I focus on clean front-end implementation, practical UI/UX decisions, and maintaining code that is readable for future collaborators.',
  'As a junior developer, my goal is to keep shipping complete projects, strengthen my React and TypeScript depth, and contribute to production teams where I can learn good engineering practices while delivering dependable features.'
];

export const sapModules = ['HCM', 'WM', 'PS', 'EAM', 'CS', 'QM'];

export const socials: Social[] = [
  { icon: Facebook, href: 'https://www.facebook.com/emman.angeles.765758', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/emman-romel-angeles-b29365385/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Ackerman-G4', label: 'GitHub' },
];

export const education: Education[] = [
  {
    school: 'STI College Ortigas-Cainta',
    address: 'STI Ortigas-Cainta',
    degree: 'Bachelor of Science in Information Technology',
    period: '2022 — Present (Expected 2026)',
    details: 'Focused on software development, database management, and systems design.',
  },
  {
    school: 'Angono Private High School',
    degree: 'ICT Strand — Senior High School',
    period: '2020 — 2022',
    details: 'Foundation in programming fundamentals and information technology.',
  },
];

export const learningItems: LearningItem[] = [
  { title: 'CSS', description: 'Advanced styling, animations, and responsive design patterns', progress: 70 },
  { title: 'Database', description: 'MySQL optimization, Firebase real-time data, and schema design', progress: 60 },
  { title: 'TypeScript', description: 'Type safety, generics, and advanced patterns for scalable code', progress: 55 },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Front-End Developer (Capstone Team)',
    company: 'STI College Ortigas-Cainta',
    period: '2025 — 2026',
    details: [
      'Co-developed the Coftea Inventory & POS system with a focus on UI flow and usability.',
      'Collaborated on feature planning, testing, and documentation across academic milestones.',
      'Helped translate Figma/Moqups concepts into a working desktop application interface.'
    ],
  },
  {
    role: 'Project Developer (Academic & Personal Builds)',
    company: 'Independent / Student Projects',
    period: '2023 — Present',
    details: [
      'Built and iterated on small complete web applications using React and TypeScript.',
      'Practiced responsive UI implementation, accessibility basics, and reusable component structure.',
      'Used Git workflows to track progress and maintain project history during iteration.'
    ],
  },
];

export const companyAddress =
  '3F1-02 ROBLOU TOWN CENTER - GREENLAND, A. BONIFACIO AVE. COR. BUENMAR AVE., BRGY SAN JUAN, CAINTA RIZAL';

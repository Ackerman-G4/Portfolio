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
export interface SkillItem {
  name: string;
  percent?: number;
}

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: SkillItem[];
  showProgress: boolean;
}

export interface Project {
  title: string;
  tech: string[];
  category: string;
  description: string;
  objectives: string[];
  link: string;
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

/* ── Constants ── */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
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
    showProgress: true,
    items: [
      { name: 'C# (.NET MAUI)', percent: 65 },
      { name: 'Python', percent: 65 },
      { name: 'SQL & MySQL', percent: 65 },
      { name: 'Java', percent: 65 },
      { name: 'TypeScript', percent: 65 },
    ],
  },
  {
    icon: Cpu,
    title: 'Stack & Frameworks',
    showProgress: true,
    items: [
      { name: 'React & Tailwind', percent: 65 },
      { name: 'Firebase', percent: 60 },
      { name: 'Agile Methodology', percent: 60 },
      { name: 'MVVM Architecture', percent: 60 },
      { name: 'Git & Version Control', percent: 70 },
    ],
  },
  {
    icon: Layers,
    title: 'Design & Tools',
    showProgress: false,
    items: [
      { name: 'Figma & Moqups' },
      { name: 'Visual Studio & Laragon' },
      { name: 'System Troubleshooting' },
      { name: 'Technical Documentation' },
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
  },
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

export const companyAddress =
  '3F1-02 ROBLOU TOWN CENTER - GREENLAND, A. BONIFACIO AVE. COR. BUENMAR AVE., BRGY SAN JUAN, CAINTA RIZAL';

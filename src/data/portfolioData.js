import {
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaTable,
} from 'react-icons/fa';
import {
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiTailwindcss,
} from 'react-icons/si';
import { TbAutomation, TbBrandGithub, TbDashboard, TbDeviceAnalytics } from 'react-icons/tb';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedinIn },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
];

export const stats = [
  { label: 'Projects Completed', value: 18, suffix: '+' },
  { label: 'Technologies Learned', value: 14, suffix: '+' },
  { label: 'Problem Solving', value: 250, suffix: '+' },
  { label: 'Dashboard Development', value: 9, suffix: '+' },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 88, icon: FaReact },
      { name: 'HTML', level: 95, icon: SiHtml5 },
      { name: 'CSS', level: 92, icon: FaCss3Alt },
      { name: 'JavaScript', level: 86, icon: SiJavascript },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss },
    ],
  },
  {
    category: 'Data Analytics',
    items: [
      { name: 'Python', level: 88, icon: FaPython },
      { name: 'SQL', level: 84, icon: FaDatabase },
      { name: 'Power BI', level: 86, icon: FaChartLine },
      { name: 'Tableau', level: 78, icon: FaChartLine },
      { name: 'Excel', level: 90, icon: FaTable },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'GitHub', level: 82, icon: TbBrandGithub },
      { name: 'VS Code', level: 92, icon: FaCode },
      { name: 'Jupyter Notebook', level: 86, icon: SiJupyter },
    ],
  },
];

export const projects = [
  {
    title: 'Customer Churn Prediction',
    description:
      'Predictive analytics workflow for identifying at-risk customers with explainable model signals and clean business recommendations.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Power BI'],
    gradient: 'from-sky-400 via-cyan-300 to-violet-500',
  },
  {
    title: 'Netflix Data Analysis',
    description:
      'Exploratory analysis of content trends, countries, genres, release patterns, and audience-ready visual storytelling.',
    stack: ['Python', 'SQL', 'Tableau'],
    gradient: 'from-rose-400 via-fuchsia-400 to-sky-400',
  },
  {
    title: 'Sales Dashboard',
    description:
      'Executive dashboard for revenue, profit, regional performance, product contribution, and monthly target tracking.',
    stack: ['Power BI', 'Excel', 'DAX'],
    gradient: 'from-emerald-300 via-sky-400 to-violet-500',
  },
  {
    title: 'HR Analytics Dashboard',
    description:
      'People analytics dashboard highlighting attrition signals, hiring metrics, department health, and workforce composition.',
    stack: ['Tableau', 'SQL', 'Excel'],
    gradient: 'from-violet-400 via-indigo-400 to-cyan-300',
  },
  {
    title: 'AI Dashboard Platform',
    description:
      'Modern React dashboard concept with KPI cards, smart summaries, responsive charts, and premium interaction patterns.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    gradient: 'from-cyan-300 via-blue-400 to-purple-500',
  },
];

export const timeline = [
  'Started Learning Python',
  'Learned SQL',
  'Built Dashboards',
  'Started React Development',
  'Built Machine Learning Projects',
];

export const services = [
  { title: 'Dashboard Development', icon: TbDashboard, text: 'Clean KPI dashboards that help teams see patterns fast.' },
  { title: 'Data Analysis', icon: TbDeviceAnalytics, text: 'Structured analysis, storytelling, and business recommendations.' },
  { title: 'Frontend Development', icon: FaReact, text: 'Responsive React interfaces with premium motion and polish.' },
  { title: 'Automation Projects', icon: TbAutomation, text: 'Python and workflow automation for repetitive operations.' },
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Analytics Mentor',
    quote: 'A strong eye for data storytelling, clean dashboard structure, and practical problem solving.',
    image: 'PS',
  },
  {
    name: 'Arjun Mehta',
    role: 'Project Collaborator',
    quote: 'Turns vague requirements into polished interfaces and clear insights with impressive consistency.',
    image: 'AM',
  },
  {
    name: 'Neha Rao',
    role: 'Frontend Reviewer',
    quote: 'The portfolio work feels modern, detailed, and recruiter-ready across desktop and mobile.',
    image: 'NR',
  },
];

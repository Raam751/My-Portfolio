import type { NavLink, Project, JournalEntry, Exploration, Stat, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home', href: '#home' },
  { id: 'work', title: 'Work', href: '#work' },
  { id: 'resume', title: 'Resume', href: 'https://port5olio.netlify.app' },
];

export const projects: Project[] = [
  {
    title: 'Experiment Hub',
    category: 'Web Development',
    description: 'A polyglot backend (Node.js, Python/FastAPI) to evaluate feature flags and optimize A/B test traffic allocation dynamically using Thompson Sampling.',
    github: 'https://github.com/Raam751/Experiment-hub',
    live: 'https://enterprise-feature-flag-bayesian-ex.vercel.app',
    image: '/images/experiment-hub.jpg',
    tags: ['Node.js', 'Python', 'FastAPI', 'Bayesian'],
  },
  {
    title: 'QuikCort',
    category: 'Web Development',
    description: 'An AI-based mediation platform that helps users quickly resolve small interpersonal or transactional conflicts through intelligent dispute resolution.',
    github: 'https://github.com/Raam751/Quikcort',
    live: 'https://quikcort.vercel.app/',
    image: '/images/quikcort.jpg',
    tags: ['AI', 'React', 'Mediation'],
  },
  {
    title: 'Multi Agent Job Search',
    category: 'AI / ML',
    description: 'A Multi Agent Job Search system which looks over the desired job search board and customises your resume according to the job description.',
    github: 'https://github.com/Raam751/Multi_Agent_Job_Search_System',
    live: 'https://aijobsearch.streamlit.app/',
    image: '/images/job-search.jpg',
    tags: ['Multi-Agent', 'AI', 'Streamlit'],
  },
  {
    title: 'AskTheDoc.ai',
    category: 'AI / ML',
    description: 'A full-stack RAG application inspired by NotebookLM. Upload documents, get chunked, embedded & indexed answers via streaming.',
    github: 'https://github.com/Raam751/AskTheDoc.ai',
    live: 'https://askthedoc-ai.onrender.com/',
    image: '/images/askthedoc.jpg',
    tags: ['RAG', 'LLM', 'Vector Store'],
  },
  {
    title: 'Predict House Price',
    category: 'AI / ML',
    description: 'A Streamlit web app that predicts house prices using a Linear Regression model trained on the famous Housing dataset.',
    github: 'https://github.com/Raam751/Predict_House_Price',
    live: 'https://predicthousepric3.streamlit.app',
    image: '/images/house-price.jpg',
    tags: ['ML', 'Regression', 'Streamlit'],
  },
  {
    title: 'MelodiX',
    category: 'App Development',
    description: 'A music streaming application built with React Native and Expo, featuring seamless playback and intuitive UI.',
    github: 'https://github.com/Raam751/MelodiX',
    live: 'https://expo.dev/accounts/raam751/projects/melodix/builds/031dc685-194c-4b4e-bfd7-36d4f075578c',
    image: '/images/melodix.jpg',
    tags: ['React Native', 'Expo', 'Mobile'],
  },
];

export const journalEntries: JournalEntry[] = [
  {
    title: 'Building Scalable Multi-Agent Systems with LangChain',
    image: '/images/journal-1.jpg',
    readTime: '8 min read',
    date: 'May 2026',
    slug: '#',
  },
  {
    title: 'Why Thompson Sampling Beats Traditional A/B Testing',
    image: '/images/journal-2.jpg',
    readTime: '6 min read',
    date: 'Apr 2026',
    slug: '#',
  },
  {
    title: 'From REST to RAG: Evolving Backend Architecture',
    image: '/images/journal-3.jpg',
    readTime: '10 min read',
    date: 'Mar 2026',
    slug: '#',
  },
  {
    title: 'React Native Performance: Lessons from MelodiX',
    image: '/images/journal-4.jpg',
    readTime: '5 min read',
    date: 'Feb 2026',
    slug: '#',
  },
];

export const explorations: Exploration[] = [
  { id: 1, image: '/images/explore-1.jpg', title: 'Generative Flow' },
  { id: 2, image: '/images/explore-2.jpg', title: 'Neural Patterns' },
  { id: 3, image: '/images/explore-3.jpg', title: 'Data Sculpture' },
  { id: 4, image: '/images/explore-4.jpg', title: 'Algorithm Art' },
  { id: 5, image: '/images/explore-5.jpg', title: 'Signal Drift' },
  { id: 6, image: '/images/explore-6.jpg', title: 'Pixel Weave' },
];

export const stats: Stat[] = [
  { value: '6+', label: 'Projects Shipped' },
  { value: '3+', label: 'Fields Explored' },
  { value: '100%', label: 'Passion Driven' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Twitter', url: 'https://x.com/RaamTichkule' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/raam-tichkule' },
  { name: 'GitHub', url: 'https://github.com/Raam751' },
];

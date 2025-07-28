import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  spring,
  docker,
  sustain,
  outlier,
  nyay,
  scaler,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  data,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "AI Trainer",
    company_name: "Outlier",
    icon: outlier,
    iconBg: "white",
    date: "October 2024 - February 2025",
    points: [
      "🧠 Trained AI models by curating high-quality responses across diverse academic and general knowledge domains.",
      "✍️ Created, reviewed, and refined large datasets to improve model accuracy, language fluency, and factual correctness.",
      "✅ Conducted quality assurance and validation checks to ensure data consistency and guideline compliance.",
      "🔁 Collaborated with remote teams to iterate on task feedback, improve training processes, and optimize output quality.",
    ],
  },
  {
    title: "Buddy (teaching assistant)",
    company_name: "Scaler",
    icon: scaler,
    iconBg: "white",
    date: "August 2025 - Present",
    points: [
      "🧭 Mentor Juniors: Guide new students through academic challenges, share learning strategies, and help them adjust to Scaler's curriculum.",
      "📅 Host Check-ins: Conduct regular 1-on-1 or group sessions to track your buddies’ progress, address concerns, and offer motivation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Raam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Raam does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Raam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Property search",
    description:
      "This is a dynamic real estate web application designed to simplify property discovery, rental, and purchase. The platform allows users to search for properties based on location, budget, and type, view rich listings with high-resolution images and virtual tours, and contact sellers or agents directly through the interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nyay Setu",
    description:
      "A smart legal assistance platform that helps users get instant answers to basic legal queries through an integrated AI-powered chatbot. The app offers categorized legal topics, document guidance, and connects users to real lawyers for complex cases. Designed for accessibility, the chatbot uses NLP to simplify legal jargon and provide reliable, conversational support 24/7. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: nyay,
    source_code_link: "https://github.com/Raam751/NyaySetu-law-Advisor",
  },
  {
    name: "Sustainable-Living Tracker",
    description:
    "A lifestyle app designed to help users build eco-friendly habits by tracking their daily activities across energy use, transportation, diet, and waste. The app offers personalized sustainability goals, carbon footprint estimates, and actionable tips to reduce environmental impact. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sustain,
    source_code_link: "https://github.com/Raam751/sustainable-Living-Tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
export interface NavLink {
  id: string;
  title: string;
  href: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  github: string;
  live: string;
  image: string;
  tags: string[];
}

export interface JournalEntry {
  title: string;
  image: string;
  readTime: string;
  date: string;
  slug: string;
}

export interface Exploration {
  id: number;
  image: string;
  title: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Story {
  title: string;
  description: string;
  image: string;
  size: string;
  rotate: string;
}

export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author?: string;
  thumbnail?: string;
  description: string;
  content: string;
  categories: string[];
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: React.ElementType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  stack: string;
  github?: string;
  github2?: string;
  demo?: string;
  npm?: string;
  type: "Frontend" | "FullStack" | "Game" | "Mobile" | "Npm Package";
}

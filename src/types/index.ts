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
  description: string;
  content: string;
  categories: string[];
}

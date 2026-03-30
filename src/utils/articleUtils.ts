import type { MediumArticle } from "../types/index";

export const cleanExcerpt = (html: string) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.substring(0, 150) + "...";
};

export const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const extractImage = (article: MediumArticle) => {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const match = imgRegex.exec(article.description);

  return match ? match[1] : null;
};

import { useEffect, useState } from "react";
import type { MediumArticle } from "../types/index";

const useMediumArticles = (userName: string) => {
  console.log("userName", userName);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const formattedUser = userName.startsWith("@") ? userName : `@${userName}`;
    const rssUrl = `https://medium.com/feed/${formattedUser}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "ok" && data.items.length > 0) {
          setArticles(data.items);
        } else {
          setError("No articles found or API error");
        }
      } catch (error) {
        setError("Error fetching articles");
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [userName]);

  return {
    articles,
    isLoading,
    error,
  };
};

export default useMediumArticles;

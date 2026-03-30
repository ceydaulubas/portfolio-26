import { useEffect, useState } from "react";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import type { MediumArticle } from "../types/index";

import ArticleCard from "./ArticleCard";

const Article = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  useEffect(() => {
    const userName = "@ceydaulubas";
    const rssUrl = `https://medium.com/feed/${userName}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

    const fetchArticle = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === "ok" && data.items.length > 0) {
          setArticles(data.items);
        } else {
          console.error("No articles found or API error:", data);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, []);

  return (
    <section
      id="articles"
      className="w-full bg-[#050505] py-32 px-6 overflow-hidden"
    >
      <div className="section-container">
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-pink-400 font-medium tracking-widest uppercase mb-2">
            02. Articles
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Medium Articles & Personal Blog
          </h3>
          <div className="h-0.5 w-32 bg-brand-gradient mx-auto md:mx-0"></div>
        </div>

        <div className="relative w-full h-187.5 p-4 md:p-10 rounded-[40px] bg-white/5 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-4">
              <Loader2 className="animate-spin text-pink-500" size={40} />
              <p className="font-mono text-sm uppercase tracking-widest">
                Fetching Articles...
              </p>
            </div>
          ) : articles.length > 0 ? (
            <div className="h-full flex flex-col justify-between">
              {/* GRID INSIDE */}
              <div className="h-140 overflow-y-auto px-2 md:px-6 custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentArticles.map((article, index) => (
                  <ArticleCard
                    article={article}
                    index={index}
                    key={article.guid}
                  />
                ))}
              </div>

              {/* PAGINATION CONTROLS */}
              <div className="mt-8 flex justify-center items-center gap-6 z-20">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-3 rounded-full border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-pink-500 hover:text-pink-500 transition-all bg-black/40 backdrop-blur-md"
                >
                  <ArrowLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === i + 1 ? "w-8 bg-pink-500" : "bg-white/20"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-full border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-pink-500 hover:text-pink-500 transition-all bg-black/40 backdrop-blur-md"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-slate-500 italic">
              No articles found.
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Article;

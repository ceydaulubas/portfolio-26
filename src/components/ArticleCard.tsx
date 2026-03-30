import type { MediumArticle } from "../types";
import { motion } from "motion/react";
import {
  calculateReadingTime,
  cleanExcerpt,
  extractImage,
} from "../utils/articleUtils";
import { ArrowUpRight } from "lucide-react";

const ArticleCard = ({
  article,
  index,
}: {
  article: MediumArticle;
  index: number;
}) => {
  return (
    <motion.a
      key={article.guid}
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col h-full group relative p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md 
                               hover:border-pink-500/30 transition-all duration-500 shadow-lg"
    >
      {/* Card Image */}
      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        {extractImage(article) ? (
          <img
            src={extractImage(article) ?? undefined}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center">
            <span className="text-slate-700 italic text-xs uppercase tracking-widest">
              No Image
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* Date and Reading Time */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
            {new Date(article.pubDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-[9px] font-mono text-pink-500/80 uppercase">
            {calculateReadingTime(article.description)}
          </span>
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-pink-500/20 transition-colors">
          <ArrowUpRight
            size={14}
            className="text-slate-500 group-hover:text-pink-500 transition-colors"
          />
        </div>
      </div>

      <div className="grow">
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors leading-tight line-clamp-2">
          {article.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
          {cleanExcerpt(article.description)}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {article.categories.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[9px] uppercase tracking-widest px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 rounded-3xl bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.a>
  );
};

export default ArticleCard;

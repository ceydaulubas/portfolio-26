import { useState } from "react";
import { projects } from "../constants/projectData";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const categories = ["All", "Frontend", "FullStack", "Game"] as const;

export const Projects = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="w-full bg-[#050505] py-32 px-6">
      <div className="section-container">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-pink-500 font-medium tracking-widest uppercase mb-2">
            02. Portfolio
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Selected Projects
          </h3>
          <div className="h-0.5 w-32 bg-brand-gradient mx-auto md:mx-0"></div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(6);
              }}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-pink-500/20 scale-105"
                  : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > visibleCount && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="group flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-brand-gradient hover:border-transparent transition-all duration-500 shadow-xl"
            >
              <span>Load More Projects</span>
              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500 italic">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

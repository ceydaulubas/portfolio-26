import { motion } from "motion/react";
import { ExternalLink, Box } from "lucide-react";
import type { Project } from "../types";
import { VscGithubAlt } from "react-icons/vsc";
import { DiGithubFull } from "react-icons/di";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white/3 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-pink-500/30 transition-all duration-500 flex flex-col h-full shadow-xl"
    >
      {/* IMAGE AREA */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800";
          }}
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] text-pink-400 font-mono border border-white/10">
          {project.year}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors leading-tight">
            {project.title}
          </h4>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
            {project.type}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
          {project.description}
        </p>

        {/* LINKS */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl text-white hover:bg-pink-500 transition-all flex items-center justify-center"
              title="GitHub Repository"
            >
              <VscGithubAlt size={20} />
            </a>
          )}
          {project.github2 && (
            <a
              href={project.github2}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl text-white hover:bg-pink-500 transition-all flex items-center justify-center"
              title="GitHub Repository"
            >
              <DiGithubFull size={20} />
            </a>
          )}
          {project.npm && (
            <a
              href={project.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl text-white hover:bg-orange-500 transition-all flex items-center justify-center"
              title="NPM Package"
            >
              <Box size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold rounded-xl hover:bg-pink-500 transition-all text-sm"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

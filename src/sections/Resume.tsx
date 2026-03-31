import { motion } from "motion/react";
import { Download, FileUser, Sparkles } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="w-full bg-[#050505] py-20 px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden p-12 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl text-center"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] group-hover:bg-pink-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-brand-gradient p-[1px]">
              <div className="w-full h-full rounded-[23px] bg-[#050505] flex items-center justify-center">
                <FileUser size={32} className="text-pink-400" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Looking for the <br />
              <span className="text-pink-500 uppercase text-lg tracking-[0.3em] font-mono">
                Full Story?
              </span>
            </h2>

            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              For more technical details, success stories of my projects, and my
              professional background, you can review my up-to-date resume.
            </p>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-brand-gradient hover:bg-pink-600 transition-all duration-500 shadow-xl shadow-pink-500/5"
            >
              <Download size={20} />
              <span>GET MY RESUME</span>
              <Sparkles size={16} className="animate-pulse" />
            </motion.a>

            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mt-2">
              PDF • 2026 EDITION
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

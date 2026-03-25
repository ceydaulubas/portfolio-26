import { useEffect, useRef } from "react";
import NET from "vanta/src/vanta.net";
import * as THREE from "three";

// icon
import { Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

const socialLinks = [
  {
    icon: <VscGithubAlt size={30} />,
    href: "https://github.com/ceydaulubas",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin size={30} />,
    href: "https://www.linkedin.com/in/ceydaulubas/",
    label: "linkedin",
  },
  {
    icon: <Mail size={30} />,
    href: "mailto:ceyda.ulubas@gmail.com",
    label: "Email",
  },
];

export const Home = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);

  useEffect(() => {
    (window as any).THREE = THREE;
    if (!vantaEffectRef.current && vantaRef.current) {
      vantaEffectRef.current = NET({
        el: vantaRef.current, // Connect effect to element
        THREE: THREE, // use Three.js engine
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3f81, // Pink color
        backgroundColor: 0x0, // black color
        maxDistance: 22.0,
        spacing: 16.0,
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
          <span className="bg-white bg-clip-text text-transparent">
            Ceyda Ulubas Tanfener
          </span>
        </h1>
        <p className="mt-6 text-pink-300 text-lg md:text-4xl max-w-2xl mx-auto">
          Software Developer
        </p>

        <div className="flex gap-4 mt-8 justify-center md:justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center rounded-full border border-white/10 text-slate-400
                     hover:border-pink-300 hover:text-pink-400 hover:scale-110 hover:-translate-y-2
                   transition-all duration-300 bg-white/5 backdrop-blur-sm group 
                    active:text-pink-300 active:border-pink-400 active:scale-95 active:bg-pink-500/10 "
            >
              <span className="group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

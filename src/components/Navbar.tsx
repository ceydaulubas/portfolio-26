import { useState } from "react";
import type { NavItem } from "../types";
import { Menu, X } from "lucide-react";

const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Articles", href: "#articles", id: "articles" },
  { label: "Contract", href: "#contract", id: "contract" },
  { label: "Resume", href: "/resume.pdf", id: "resume" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md">
      <div className="section-container h-20 flex items-center justify-between">
        <div
          className="text-xl font-bold bg-linear-to-r from-pink-400 to-purple-400
      bg-clip-text text-transparent hover:scale-110"
        >
          <a href="#home">CUT.</a>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="group relative inline-block text-sm font-medium cursor-pointer text-slate-300 hover:text-pink-400 transition-colors duration-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 border-b border-white/10 py-6 px-6">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-slate-300 active:text-pink-400 transition-colors "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

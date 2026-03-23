import type { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contract", href: "#contract" },
  { label: "Resume", href: "/resume.pdf" },
];

export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b
      border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400
      bg-clip-text text-transparent hover:scale-110"
        >
          CUT.
        </div>

        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white
      transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

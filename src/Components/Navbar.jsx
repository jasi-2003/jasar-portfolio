import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-2xl font-bold text-red-200"
          >
            <span className="bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent leading-tight">
              PortFolio
            </span>
          </a>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white hover:text-red-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-red-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-red-300 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white hover:text-red-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-red-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

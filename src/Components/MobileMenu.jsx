import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-red-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {[
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:text-red-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

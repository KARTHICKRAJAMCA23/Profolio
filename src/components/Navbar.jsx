import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "#header" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll for slight background effect
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-emerald-400/40"
          : "bg-gray-900/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo / Name */}
        <a
          href="#header"
          className="text-emerald-400 font-bold text-xl tracking-wide hover:text-emerald-300 transition"
        >
          Karthick Raja
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group transition duration-300 scroll-smooth"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-emerald-400 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!menuOpen ? (
            // Menu (hamburger icon)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            // Close (X icon)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 bg-gray-900/95 backdrop-blur-md border-t border-emerald-400/30 text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-emerald-400 transition scroll-smooth"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

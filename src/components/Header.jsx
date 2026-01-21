import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // ← install lucide-react or use your own icons

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Trainings", "Testimonials", "Contact"];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-2xl shadow-xl shadow-black/20 py-3"
              : "bg-transparent py-5"
          }
        `}
      >
        {/* Optional subtle bottom gradient line */}
        <hr
          className={`
            absolute bottom-0 left-0 right-0 border-0 h-px
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            transition-opacity duration-500
            ${scrolled ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              NEXO
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
              >
                {item}
                <span
                  className="
                    absolute -bottom-1 left-0 w-0 h-0.5
                    bg-gradient-to-r from-white to-gray-400
                    group-hover:w-full transition-all duration-300
                  "
                />
              </a>
            ))}
          </div>

          {/* CTA - hidden on very small screens if needed */}
          <div className="hidden sm:block">
            <button
              className="
                bg-white text-black px-5 py-2 sm:px-6 sm:py-2.5
                rounded-full font-medium text-sm sm:text-base
                hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20
                transition-all duration-300
                transform hover:scale-105 active:scale-95
              "
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1.5 -mr-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay / sidebar */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 transition-all duration-500
          ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500
            ${mobileMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`
            absolute top-0 right-0 h-full w-4/5 max-w-sm bg-black/40 backdrop-blur-2xl shadow-xl shadow-black/20 transform transition-transform duration-500 ease-in-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-bold text-white">NEXO</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-200 hover:text-white transition-colors py-3 border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="mt-auto pb-10">
              <button
                className="
                  w-full bg-white text-black py-4 rounded-xl font-medium
                  hover:bg-gray-100 transition-colors
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

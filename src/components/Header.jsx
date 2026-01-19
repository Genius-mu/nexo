import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Navigation with Glassmorphism */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-2xl shadow-xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Bottom gradient line */}
        <hr className={`absolute bottom-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 ${scrolled ? "opacity-100" : "opacity-0"}`} />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              NEXO
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Trainings", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

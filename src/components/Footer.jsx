import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-white/10 py-16 px-6 relative z-10 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                NEXO
              </div>
              <p className="text-gray-500 text-sm">
                Training systems designed to help you stay consistent.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "FAQ", "Changelog"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© 2026 Nexo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  function scrollToContact() {
    const el = document.getElementById("contact");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Optional: update URL hash without jump
    window.history.replaceState(null, "", "#contact");

    setIsOpen(false);
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        nav {
          font-family: 'PT Sans', sans-serif;
          font-weight: 700;
        }

        .desktop-nav {
          display: none;
        }

        .mobile-menu-btn {
          display: block;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            gap: 5rem;
          }

          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>

      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-black">
                RANVIR SINGH
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-gray-600 text-lg font-bold transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}

              {/* Contact button (same-page smooth scroll) */}
              <button
                type="button"
                onClick={scrollToContact}
                className="text-black hover:text-gray-600 text-lg font-bold transition-colors whitespace-nowrap"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn text-black hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium"
                >
                  {link.name}
                </a>
              ))}

              {/* Contact button (same-page smooth scroll) */}
              <button
                type="button"
                onClick={scrollToContact}
                className="text-black hover:text-gray-600 block w-full px-3 py-2 text-left text-base font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

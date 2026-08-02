"use client";

import { useState } from "react";
import Link from "next/link";

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

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.4rem;
          height: 2px;
          border-radius: 9999px;
          background-color: #219ebc;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
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

      <nav className="sticky top-0 z-50 border-b border-ocean/20 bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-ocean">
                RANVIR SINGH
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-navy hover:text-ocean text-lg font-bold transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}

              {/* Contact button (same-page smooth scroll) */}
              <button
                type="button"
                onClick={scrollToContact}
                className="nav-link text-navy hover:text-ocean text-lg font-bold transition-colors whitespace-nowrap"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn text-navy hover:text-ocean focus:outline-none"
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
          <div className="lg:hidden border-t border-ocean/15 bg-white/80 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-navy transition-colors hover:bg-ocean/10 hover:text-ocean"
                >
                  {link.name}
                </Link>
              ))}

              {/* Contact button (same-page smooth scroll) */}
              <button
                type="button"
                onClick={scrollToContact}
                className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium text-navy transition-colors hover:bg-ocean/10 hover:text-ocean"
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

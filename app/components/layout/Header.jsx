"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 text-orange-200 z-50 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            HILLTOP
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-orange-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/menu"
            className="hover:text-orange-300 transition-colors"
          >
            MENU
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-300 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/events"
            className="hover:text-orange-300 transition-colors"
          >
            EVENTS
          </Link>
          <Link
            href="/jobs"
            className="hover:text-orange-300 transition-colors"
          >
            JOBS
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-300 transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/75 py-4">
            <nav className="flex flex-col items-center space-y-4">
              <Link
                href="/menu"
                className="hover:text-orange-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                MENU
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/events"
                className="hover:text-orange-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </Link>
              <Link
                href="/jobs"
                className="hover:text-orange-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                JOBS
              </Link>
              <Link
                href="/contact"
                className="hover:text-orange-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

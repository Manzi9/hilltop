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
    <header className="fixed top-0 left-0 w-full bg-black/90 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            HILLTOP
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/menu" className="hover:text-gray-300 transition-colors">
            MENU
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT US
          </Link>
          <Link
            href="/events"
            className="hover:text-gray-300 transition-colors"
          >
            EVENTS
          </Link>
          <Link href="/jobs" className="hover:text-gray-300 transition-colors">
            JOBS
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
          >
            CONTACT
          </Link>
          <Link href="/shop" className="hover:text-gray-300 transition-colors">
            SHOP
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 py-4">
            <nav className="flex flex-col items-center space-y-4">
              <Link
                href="/menu"
                className="hover:text-gray-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                MENU
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/events"
                className="hover:text-gray-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </Link>
              <Link
                href="/jobs"
                className="hover:text-gray-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                JOBS
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                href="/shop"
                className="hover:text-gray-300 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

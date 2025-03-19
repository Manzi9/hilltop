"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-orange-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={24} className="mr-2 mt-1 flex-shrink-0" />
                <span>71 Shelton Street, Covent Garden, London, WC2H 9JQ</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+44 208 949 3389</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>info@hilltop.coffee</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">HOURS</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7am - 7pm</li>
              <li>Saturday: 8am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="hover:text-gray-300 transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                className="hover:text-gray-300 transition-colors"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} HILLTOP COFFEE. Developed by{" "}
            <a
              href="https://manzi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-100 hover:text-white transition-colors"
            >
              Manzi
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

export default function ContentLayout({
  children,
  title,
  subtitle,
  backgroundImage,
  sideNavItems,
}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [collapsibleSections, setCollapsibleSections] = useState({});

  const toggleSection = (sectionId) => {
    setCollapsibleSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="relative h-64 w-full mb-12">
        <Image
          src={backgroundImage || "https://picsum.photos/id/1060/1920/600"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-xl">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Side Nav Toggle */}
          {sideNavItems && sideNavItems.length > 0 && (
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                className="flex items-center justify-between w-full p-4 bg-gray-100 rounded"
              >
                <span className="font-medium">Page Navigation</span>
                {isSideNavOpen ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {isSideNavOpen && (
                <div className="mt-2 p-4 bg-gray-50 rounded">
                  <ul className="space-y-2">
                    {sideNavItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="block py-2 text-gray-700 hover:text-black"
                          onClick={() => setIsSideNavOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Side Navigation */}
          {sideNavItems && sideNavItems.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-bold text-lg mb-4">In This Section</h3>
                <ul className="space-y-2 border-l border-gray-200">
                  {sideNavItems.map((item) => (
                    <li
                      key={item.id}
                      className="pl-4 border-l-4 border-transparent hover:border-black"
                    >
                      <Link
                        href={item.href}
                        className="block py-2 text-gray-700 hover:text-black"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          {/* Content Area */}
          <div
            className={`flex-1 ${
              sideNavItems && sideNavItems.length > 0
                ? "lg:max-w-3xl xl:max-w-4xl"
                : ""
            }`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* Call-to-Action Footer */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Hilltop Coffee?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Visit our coffee shop today to experience our artisanal coffee and
            exceptional service.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

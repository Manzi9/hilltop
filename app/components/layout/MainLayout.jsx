"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Newsletter from "../ui/Newsletter";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  // Generate breadcrumbs based on the current path
  const generateBreadcrumbs = () => {
    if (pathname === "/") return null;

    const paths = pathname.split("/").filter(Boolean);

    return (
      <div className="container mx-auto px-4 py-4 text-sm">
        <div className="flex items-center text-gray-600">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            const formattedPath = path
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return (
              <div key={path} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="font-medium text-black">
                    {formattedPath}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-black">
                    {formattedPath}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb navigation */}
      <div className="pt-16">{generateBreadcrumbs()}</div>

      <main className="flex-grow">{children}</main>

      {/* Newsletter signup */}
      <Newsletter />
    </div>
  );
}

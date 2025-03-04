"use client";

import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Floral and citrus notes with a light body",
    price: "£18.99",
    image: "https://picsum.photos/id/431/800/800",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Rich caramel sweetness with a nutty finish",
    price: "£16.99",
    image: "https://picsum.photos/id/766/800/800",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Earthy, full-bodied with herbal notes",
    price: "£19.99",
    image: "https://picsum.photos/id/425/800/800",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          FEATURED COFFEES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{product.price}</span>
                  <Link
                    href="/menu"
                    className="flex items-center bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    <Info size={16} className="mr-2" />
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

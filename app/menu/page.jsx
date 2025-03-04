"use client";

import Image from "next/image";
import { Coffee, CupSoda, Cake } from "lucide-react";

const menuCategories = [
  {
    id: "coffee",
    title: "COFFEE",
    icon: <Coffee size={24} />,
    items: [
      { name: "Espresso", description: "Rich and intense", price: "£3.50" },
      {
        name: "Americano",
        description: "Espresso with hot water",
        price: "£4.00",
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: "£4.50",
      },
      {
        name: "Latte",
        description: "Espresso with steamed milk",
        price: "£4.75",
      },
      {
        name: "Pour Over",
        description: "Hand-brewed single origin",
        price: "£5.50",
      },
    ],
  },
  {
    id: "drinks",
    title: "OTHER DRINKS",
    icon: <CupSoda size={24} />,
    items: [
      {
        name: "Chai Latte",
        description: "Spiced tea with steamed milk",
        price: "£4.50",
      },
      {
        name: "Matcha Latte",
        description: "Japanese green tea with milk",
        price: "£5.00",
      },
      {
        name: "Hot Chocolate",
        description: "Rich chocolate with steamed milk",
        price: "£4.25",
      },
      {
        name: "Iced Tea",
        description: "House-brewed black tea",
        price: "£3.75",
      },
    ],
  },
  {
    id: "pastries",
    title: "PASTRIES",
    icon: <Cake size={24} />,
    items: [
      { name: "Croissant", description: "Buttery and flaky", price: "£3.75" },
      {
        name: "Blueberry Muffin",
        description: "Made fresh daily",
        price: "£3.50",
      },
      {
        name: "Cinnamon Roll",
        description: "With cream cheese frosting",
        price: "£4.25",
      },
      {
        name: "Chocolate Chip Cookie",
        description: "Baked in-house",
        price: "£2.75",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 w-full mb-12">
        <Image
          src="https://picsum.photos/id/431/1920/600"
          alt="Coffee menu"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">OUR MENU</h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <div className="flex items-center mb-8">
                <div className="bg-black text-white p-2 rounded-full mr-3">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <span className="font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

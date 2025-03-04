"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Coffee, CupSoda, Cake, Search, Filter, X } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

// Menu Categories Component
const MenuCategories = ({ categories, activeCategory, setActiveCategory }) => {
  const categoriesRef = useRef(null);

  // Handle scrolling to the active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find which section is currently in view
      const sections = categories
        .map((cat) => {
          const element = document.getElementById(cat.id);
          if (element) {
            const top = element.offsetTop - 150; // Offset for header and sticky nav
            return { id: cat.id, top };
          }
          return null;
        })
        .filter(Boolean);

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top) {
          setActiveCategory(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories, setActiveCategory]);

  return (
    <nav
      ref={categoriesRef}
      className="sticky top-20 z-20 bg-white border-b border-gray-200 mb-8 overflow-x-auto"
    >
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 py-4">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => {
                  setActiveCategory(category.id);
                  const element = document.getElementById(category.id);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 120, // Offset for header and sticky nav
                      behavior: "smooth",
                    });
                  }
                }}
                className={`flex items-center whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-black font-bold border-b-2 border-black pb-1"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Menu Items Grid Component
const MenuItemsGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between mb-2">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="font-bold">{item.price}</span>
          </div>
          <p className="text-gray-600 mb-4">{item.description}</p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Dietary Filters Component
const DietaryFilters = ({ filters, activeFilters, toggleFilter }) => {
  return (
    <div className="mb-8">
      <h3 className="font-bold mb-4">Dietary Preferences</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilters.includes(filter.id)
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Search and Filter Bar Component
const SearchAndFilterBar = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
}) => {
  return (
    <div className="flex items-center justify-between mb-8 sticky top-[72px] z-10 bg-white py-4 border-b border-gray-200">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search menu items..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center text-gray-700 hover:text-black ml-4"
      >
        {showFilters ? (
          <X size={20} className="mr-1" />
        ) : (
          <Filter size={20} className="mr-1" />
        )}
        <span>{showFilters ? "Hide Filters" : "Filters"}</span>
      </button>
    </div>
  );
};

// Menu Page Component
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const dietaryFilters = [
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "gluten-free", label: "Gluten Free" },
    { id: "dairy-free", label: "Dairy Free" },
    { id: "nut-free", label: "Nut Free" },
  ];

  const menuCategories = [
    {
      id: "coffee",
      title: "COFFEE",
      icon: <Coffee size={20} />,
      items: [
        {
          name: "Espresso",
          description: "Rich and intense",
          price: "£3.50",
          tags: ["Signature"],
        },
        {
          name: "Americano",
          description: "Espresso with hot water",
          price: "£4.00",
          tags: ["Popular"],
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk and foam",
          price: "£4.50",
          tags: ["Popular"],
        },
        {
          name: "Latte",
          description: "Espresso with steamed milk",
          price: "£4.75",
          tags: ["Popular"],
        },
        {
          name: "Pour Over",
          description: "Hand-brewed single origin",
          price: "£5.50",
          tags: ["Specialty"],
        },
        {
          name: "Cold Brew",
          description: "12-hour steeped coffee served over ice",
          price: "£5.00",
          tags: ["Seasonal"],
        },
        {
          name: "Flat White",
          description: "Espresso with velvety microfoam",
          price: "£4.50",
          tags: ["Popular"],
        },
        {
          name: "Macchiato",
          description: "Espresso with a dash of milk foam",
          price: "£3.75",
          tags: ["Signature"],
        },
      ],
    },
    {
      id: "drinks",
      title: "OTHER DRINKS",
      icon: <CupSoda size={20} />,
      items: [
        {
          name: "Chai Latte",
          description: "Spiced tea with steamed milk",
          price: "£4.50",
          tags: ["Popular"],
        },
        {
          name: "Matcha Latte",
          description: "Japanese green tea with milk",
          price: "£5.00",
          tags: ["Specialty"],
        },
        {
          name: "Hot Chocolate",
          description: "Rich chocolate with steamed milk",
          price: "£4.25",
          tags: ["Popular"],
        },
        {
          name: "Iced Tea",
          description: "House-brewed black tea",
          price: "£3.75",
          tags: [],
        },
        {
          name: "Fresh Juice",
          description: "Seasonal fruits and vegetables",
          price: "£5.50",
          tags: ["Healthy", "Seasonal"],
        },
        {
          name: "Smoothie",
          description: "Blended fruits with yogurt or plant milk",
          price: "£6.00",
          tags: ["Healthy"],
        },
      ],
    },
    {
      id: "pastries",
      title: "PASTRIES",
      icon: <Cake size={20} />,
      items: [
        {
          name: "Croissant",
          description: "Buttery and flaky",
          price: "£3.75",
          tags: ["Breakfast", "Popular"],
        },
        {
          name: "Blueberry Muffin",
          description: "Made fresh daily",
          price: "£3.50",
          tags: ["Breakfast"],
        },
        {
          name: "Cinnamon Roll",
          description: "With cream cheese frosting",
          price: "£4.25",
          tags: ["Popular"],
        },
        {
          name: "Chocolate Chip Cookie",
          description: "Baked in-house",
          price: "£2.75",
          tags: [],
        },
        {
          name: "Avocado Toast",
          description: "Sourdough bread with smashed avocado",
          price: "£7.50",
          tags: ["Healthy", "Breakfast"],
        },
        {
          name: "Granola Bowl",
          description: "House-made granola with yogurt and fresh fruit",
          price: "£6.50",
          tags: ["Healthy", "Breakfast"],
        },
      ],
    },
  ];

  const toggleFilter = (filterId) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Filter menu items based on search query and active filters
  const filteredMenuCategories = menuCategories.map((category) => {
    const filteredItems = category.items.filter((item) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by dietary preferences (in a real app, items would have these properties)
      // For this example, we'll just return true since we don't have actual dietary data
      const matchesFilters = activeFilters.length === 0 || true;

      return matchesSearch && matchesFilters;
    });

    return {
      ...category,
      items: filteredItems,
    };
  });

  return (
    <MainLayout>
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
          {/* Menu Categories Navigation */}
          <MenuCategories
            categories={menuCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Search and Filter Bar */}
          <SearchAndFilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Dietary Filters */}
          {showFilters && (
            <DietaryFilters
              filters={dietaryFilters}
              activeFilters={activeFilters}
              toggleFilter={toggleFilter}
            />
          )}

          {/* Menu Categories and Items */}
          <div className="space-y-16">
            {filteredMenuCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex items-center mb-8">
                  <div className="bg-black text-white p-2 rounded-full mr-3">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                {category.items.length > 0 ? (
                  <MenuItemsGrid items={category.items} />
                ) : (
                  <p className="text-gray-500 italic">
                    No items match your search criteria.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

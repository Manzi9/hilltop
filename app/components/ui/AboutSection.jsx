"use client";

import Image from "next/image";
import { Coffee, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] w-full">
            <Image
              src="https://picsum.photos/id/1060/1000/1000"
              alt="Coffee brewing"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">OUR STORY</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2015, Hilltop Coffee is dedicated to sourcing and
              roasting the finest single-origin coffees from around the world.
              Our passion for quality drives everything we do, from carefully
              selecting beans to perfecting our brewing techniques.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe in sustainable practices and work directly with farmers
              to ensure fair compensation and environmentally responsible
              cultivation methods. Every cup of Hilltop Coffee represents our
              commitment to excellence and ethical sourcing.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white p-3 rounded-full mb-3">
                  <Coffee size={24} />
                </div>
                <h3 className="font-bold mb-1">Premium Beans</h3>
                <p className="text-sm text-gray-600">
                  Ethically sourced from around the world
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white p-3 rounded-full mb-3">
                  <Award size={24} />
                </div>
                <h3 className="font-bold mb-1">Award Winning</h3>
                <p className="text-sm text-gray-600">
                  Recognised for exceptional quality
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-black text-white p-3 rounded-full mb-3">
                  <Users size={24} />
                </div>
                <h3 className="font-bold mb-1">Community</h3>
                <p className="text-sm text-gray-600">
                  Creating connections through coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

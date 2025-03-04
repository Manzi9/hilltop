"use client";

import Image from "next/image";
import { Coffee, Leaf, Users, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-64 w-full mb-12">
        <Image
          src="https://picsum.photos/id/1060/1920/600"
          alt="About Hilltop Coffee"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">OUR STORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hilltop Coffee was founded in 2015 by a group of friends who
                shared a passion for exceptional coffee and community. What
                began as a small pop-up shop has grown into a beloved local
                institution, known for our commitment to quality and
                sustainability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our name "Hilltop" reflects our philosophy of reaching for the
                highest standards in everything we do - from sourcing the finest
                beans to creating a welcoming atmosphere for our customers. We
                believe that great coffee has the power to bring people together
                and create meaningful connections.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="https://picsum.photos/id/1060/800/800"
                alt="Coffee shop interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-white p-4 rounded-full inline-flex mb-4">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the highest quality beans and maintain rigorous
                standards in our brewing process.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-white p-4 rounded-full inline-flex mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices and
                supporting ethical farming.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-white p-4 rounded-full inline-flex mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We strive to create a welcoming space where people can connect
                and feel at home.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-black text-white p-4 rounded-full inline-flex mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                We pour our hearts into every cup, driven by our love for
                exceptional coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">OUR TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1062/400/400"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Alex Morgan</h3>
              <p className="text-gray-600">Founder & Head Roaster</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1074/400/400"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Jamie Chen</h3>
              <p className="text-gray-600">Master Barista</p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/id/1071/400/400"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sam Rodriguez</h3>
              <p className="text-gray-600">Café Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

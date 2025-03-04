"use client";

import Image from "next/image";
import { Coffee, Leaf, Users, Heart, Clock, Award } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import ContentLayout from "../components/layout/ContentLayout";

// StoryTimeline Component
const StoryTimeline = () => {
  const timelineEvents = [
    {
      year: "2015",
      title: "The Beginning",
      description:
        "Hilltop Coffee was founded by a group of friends passionate about exceptional coffee and community.",
      image: "https://picsum.photos/id/1060/800/600",
    },
    {
      year: "2017",
      title: "First Location",
      description:
        "We opened our first permanent location in Covent Garden, London.",
      image: "https://picsum.photos/id/1031/800/600",
    },
    {
      year: "2019",
      title: "Direct Trade Program",
      description:
        "We established our direct trade program, working directly with coffee farmers around the world.",
      image: "https://picsum.photos/id/425/800/600",
    },
    {
      year: "2021",
      title: "Expansion",
      description:
        "We expanded to three locations across London and launched our online store.",
      image: "https://picsum.photos/id/1060/800/600",
    },
    {
      year: "2023",
      title: "Today",
      description:
        "Hilltop Coffee continues to grow while maintaining our commitment to quality and sustainability.",
      image: "https://picsum.photos/id/431/800/600",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                  {event.year}
                </span>
                <div className="ml-4 h-0.5 flex-grow bg-gray-200"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// TeamMembers Component
const TeamMembers = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & Head Roaster",
      bio: "Alex has over 15 years of experience in the coffee industry and is passionate about sourcing the finest beans.",
      image: "https://picsum.photos/id/1062/400/400",
    },
    {
      name: "Jamie Chen",
      role: "Master Barista",
      bio: "Jamie is an award-winning barista who leads our training program and develops new coffee recipes.",
      image: "https://picsum.photos/id/1074/400/400",
    },
    {
      name: "Sam Rodriguez",
      role: "Café Manager",
      bio: "Sam ensures that every customer has an exceptional experience at Hilltop Coffee.",
      image: "https://picsum.photos/id/1071/400/400",
    },
    {
      name: "Taylor Williams",
      role: "Sustainability Director",
      bio: "Taylor oversees our environmental initiatives and direct trade relationships with coffee farmers.",
      image: "https://picsum.photos/id/1077/400/400",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <p className="text-sm text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ValuesPillars Component
const ValuesPillars = () => {
  const values = [
    {
      icon: <Coffee size={24} />,
      title: "Quality",
      description:
        "We source only the highest quality beans and maintain rigorous standards in our brewing process.",
    },
    {
      icon: <Leaf size={24} />,
      title: "Sustainability",
      description:
        "We're committed to environmentally responsible practices and supporting ethical farming.",
    },
    {
      icon: <Users size={24} />,
      title: "Community",
      description:
        "We strive to create a welcoming space where people can connect and feel at home.",
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description:
        "We pour our hearts into every cup, driven by our love for exceptional coffee.",
    },
    {
      icon: <Clock size={24} />,
      title: "Craftsmanship",
      description:
        "We take the time to perfect our craft, from bean selection to the final pour.",
    },
    {
      icon: <Award size={24} />,
      title: "Innovation",
      description:
        "We continuously explore new techniques and flavors to enhance the coffee experience.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value) => (
          <div key={value.title} className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-black text-white p-4 rounded-full inline-flex mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// LocationMap Component
const LocationMap = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold mb-4">Our Flagship Location</h3>
          <p className="text-gray-700 mb-6">
            Visit our flagship store in Covent Garden, where it all began. Enjoy
            our full range of coffees in a relaxed, welcoming atmosphere.
          </p>
          <div className="space-y-2 mb-6">
            <p className="flex items-start">
              <span className="font-bold mr-2">Address:</span>
              <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-2">Hours:</span>
              <span>
                Monday - Friday: 7am - 7pm
                <br />
                Saturday: 8am - 8pm
                <br />
                Sunday: 8am - 6pm
              </span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-2">Phone:</span>
              <span>+44 208 949 3389</span>
            </p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Get Directions
          </button>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image
            src="https://picsum.photos/id/1048/800/600"
            alt="Map location"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <p className="text-white font-bold">Map Location</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// HistoryGallery Component
const HistoryGallery = () => {
  const images = [
    {
      src: "https://picsum.photos/id/431/800/600",
      alt: "Coffee beans being roasted",
    },
    { src: "https://picsum.photos/id/1060/800/600", alt: "Our first location" },
    {
      src: "https://picsum.photos/id/1074/800/600",
      alt: "Barista preparing coffee",
    },
    { src: "https://picsum.photos/id/1082/800/600", alt: "Coffee farm visit" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// About Us Page
export default function AboutUsPage() {
  const sideNavItems = [
    { id: "story", label: "Our Story", href: "#story" },
    { id: "values", label: "Our Values", href: "#values" },
    { id: "team", label: "Our Team", href: "#team" },
    { id: "locations", label: "Locations", href: "#locations" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
  ];

  return (
    <MainLayout>
      <ContentLayout
        title="ABOUT US"
        subtitle="Our story, values, and the people behind Hilltop Coffee"
        backgroundImage="https://picsum.photos/id/1060/1920/600"
        sideNavItems={sideNavItems}
      >
        <div id="story" className="scroll-mt-24">
          <StoryTimeline />
        </div>

        <div id="values" className="scroll-mt-24">
          <ValuesPillars />
        </div>

        <div id="team" className="scroll-mt-24">
          <TeamMembers />
        </div>

        <div id="locations" className="scroll-mt-24">
          <LocationMap />
        </div>

        <div id="gallery" className="scroll-mt-24">
          <HistoryGallery />
        </div>
      </ContentLayout>
    </MainLayout>
  );
}

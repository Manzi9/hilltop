"use client";

import Hero from "./components/layout/Hero";
import AboutSection from "./components/ui/AboutSection";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Testimonials from "./components/ui/Testimonials";
import Newsletter from "./components/ui/Newsletter";

export default function Home() {
  return (
    <>
      <Hero
        title="HILLTOP COFFEE"
        subtitle="Artisanal coffee in a minimalist atmosphere"
        imageUrl="https://picsum.photos/id/1060/1920/1080"
      />
      <AboutSection />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
    </>
  );
}

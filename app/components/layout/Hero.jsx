"use client";

import Image from "next/image";

export default function Hero({ title, subtitle, imageUrl }) {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl || "https://picsum.photos/id/431/1920/1080"}
          alt="Coffee shop hero image"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
          {title || "HILLTOP COFFEE"}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          {subtitle || "Artisanal coffee in a minimalist atmosphere"}
        </p>
      </div>
    </div>
  );
}

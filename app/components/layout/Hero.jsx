"use client";

import Image from "next/image";

export default function Hero({ title, subtitle }) {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full blur-[5px]"
        >
          <source src="/images/cafe-blur.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 tracking-wide leading-tight">
          {title || "HILLTOP COFFEE"}
        </h1>
        <div className="w-24 h-0.5 bg-white mb-6"></div>
        <p className="text-xl md:text-2xl max-w-2xl font-light tracking-wider">
          {subtitle || "Artisanal coffee in a minimalist atmosphere"}
        </p>
      </div>
    </div>
  );
}

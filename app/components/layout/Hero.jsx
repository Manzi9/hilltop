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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-orange-200 text-center px-4">
        <Image
          src="/images/fCRZIk01.svg"
          alt="Hilltop Coffee + Kitchen"
          width={384}
          height={384}
          className="mb-6 invert"
        />
        <div className="w-24 h-0.5 bg-white mb-6"></div>
      </div>
    </div>
  );
}

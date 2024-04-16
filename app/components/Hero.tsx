import Image from "next/image";
import React from "react";
import heroImage from "@/public/main3.jpg";

const Hero = () => {
  return (
    <div className="relative h-[40vh]">
      <div className="w-full h-full absolute top-0 bg-gray-300/30 backdrop-blur-sm z-20"></div>
      <h1 className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-slate-800 font-bold font-mono">
        Explore Recipes
      </h1>
      <Image
        src={heroImage}
        alt="Main Hero Image"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
};

export default Hero;

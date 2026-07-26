"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const col1 = [
  { type: "video", src: "/card-images/influence.mp4" },
  { type: "image", src: "/card-images/agentik.png" },
  { type: "image", src: "/card-images/selene.png" },
];
const col2 = [
  { type: "image", src: "/card-images/build-for.png" },
  { type: "video", src: "/card-images/cora.mp4" },
  { type: "image", src: "/card-images/pricing.png" },
];
const col3 = [
  { type: "image", src: "/card-images/instructor.png" },
  { type: "video", src: "/card-images/gym.mp4" },
  { type: "image", src: "/card-images/team.png" },
];
const col4 = [
  { type: "video", src: "/card-images/gumroad.mp4" },
  { type: "image", src: "/card-images/partnr.png" },
  { type: "image", src: "/card-images/talentify.png" },
];

export default function QuizSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Marquee Up (Col 1, Col 3)
    gsap.to(".marquee-up", {
      yPercent: -50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });

    // Marquee Down (Col 2, Col 4)
    // To move down seamlessly, we start at -50 and move to 0
    gsap.fromTo(
      ".marquee-down",
      { yPercent: -50 },
      {
        yPercent: 0,
        ease: "none",
        duration: 25,
        repeat: -1,
      }
    );
  }, { scope: containerRef });

  const renderMedia = (item: { type: string; src: string }, idx: number) => {
    if (item.type === "video") {
      return (
        <video
          key={idx}
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-sm stagger-element"
        />
      );
    }
    return (
      <Image
        key={idx}
        src={item.src}
        alt="Template screenshot"
        width={600}
        height={800}
        className="w-full h-auto rounded-sm stagger-element"
      />
    );
  };

  return (
    <section ref={containerRef} id="quiz" className="relative h-[80vh] min-h-[500px] w-full bg-[#050508] overflow-hidden flex items-end justify-center pb-12 sm:pb-20">

      <div 
        className="absolute inset-0 z-0 flex gap-3 sm:gap-4 px-2 sm:px-4 opacity-90 scale-105"
        style={{
          WebkitMask: 'linear-gradient(#000 53%, #0000 100%), linear-gradient(#0000 0%, #000 121%)',
          WebkitMaskComposite: 'source-in, source-over',
          mask: 'linear-gradient(#000 53%, #0000 100%) intersect, linear-gradient(#0000 0%, #000 121%)',
        }}
      >
        
        {/* Column 1 (Up) */}
        <div className="flex-1 hidden sm:block relative h-full overflow-hidden">
          <div className="marquee-up flex flex-col gap-3 sm:gap-4 absolute top-0 left-0 w-full">
            {col1.map(renderMedia)}
            {col1.map(renderMedia)}
          </div>
        </div>
        
        {/* Column 2 (Down) */}
        <div className="flex-1 relative h-full overflow-hidden mt-8">
          <div className="marquee-down flex flex-col gap-3 sm:gap-4 absolute top-0 left-0 w-full">
            {col2.map(renderMedia)}
            {col2.map(renderMedia)}
          </div>
        </div>

        {/* Column 3 (Up) */}
        <div className="flex-1 relative h-full overflow-hidden mt-16">
          <div className="marquee-up flex flex-col gap-3 sm:gap-4 absolute top-0 left-0 w-full">
            {col3.map(renderMedia)}
            {col3.map(renderMedia)}
          </div>
        </div>

        {/* Column 4 (Down) */}
        <div className="flex-1 hidden md:block relative h-full overflow-hidden">
          <div className="marquee-down flex flex-col gap-3 sm:gap-4 absolute top-0 left-0 w-full">
            {col4.map(renderMedia)}
            {col4.map(renderMedia)}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col items-start w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge */}
        <div 
          className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm mb-8"
          style={{
            background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
          }}
        >
          <span>60-SECOND QUIZ</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight leading-[1.1] text-left mb-3">
          Not sure which<br />
          template is for you?
        </h2>

        {/* Row for Subheading & Button */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-8">
          
          {/* Subheading (Width constrained to force natural wrap without <br/>) */}
          <p className="text-[#c9c9c9] text-sm sm:text-[15px] font-medium max-w-[425px] leading-relaxed text-left">
            Answer a few short questions and get matched with a website template perfect for your business, with <span className="text-white">30% off.</span>
          </p>

          {/* Button */}
          <div className="shrink-0">
            <a
              href="#take-quiz"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-7 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-white/90 transition-colors"
            >
              Take the quiz <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}

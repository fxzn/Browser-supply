"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".why-header",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".why-header",
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          ".unified-bento",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".unified-bento",
              start: "top 85%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-8 sm:py-10 md:py-12 bg-[var(--color-bg-default)] relative z-20 overflow-hidden"
    >
      <div className="container-layout">

        <div className="why-header mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
              style={{
                background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
              }}
            >
              <span>WHY CHOOSE A TEMPLATE?</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-medium text-white tracking-tight leading-[1.15]">
              Everything you need to launch. <br />
              All in one place, not a stack.
            </h2>
          </div>
        </div>

        <div className="unified-bento w-full rounded-lg sm:rounded-xl md:rounded-[14px] border border-white/10 bg-[#050508] overflow-hidden shadow-2xl">

          <div className="flex flex-col lg:flex-row border-b border-white/10">
            
            {/* Tile 1: Responsive (Left 60%) */}
            <div className="w-full lg:w-[60%] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300">
              <div className="p-5 sm:p-6 pb-2 sm:pb-3 flex-1 flex flex-col justify-center">
                <div className="rounded-md sm:rounded-lg overflow-hidden border border-white/10 bg-[#0c0c10] w-full">
                  <video
                    src="/card-images/why-choose-template/video-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <div className="p-5 sm:p-6 pt-2 sm:pt-3 mt-auto">
                <p className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35]">
                  Responsive straight out of the <br className="hidden sm:inline" />
                  box. No coding or design required.
                </p>
              </div>
            </div>

            {/* Tile 2: Video Tutorials (Right 40%) */}
            <div className="w-full lg:w-[40%] relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 min-h-[380px] sm:min-h-[450px] flex flex-col justify-end">
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#050508]">
                <video
                  src="/card-images/why-choose-template/video-2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-transparent opacity-90 pointer-events-none" />
              </div>
              <div className="p-5 sm:p-6 relative z-10 mt-auto">
                <p className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35]">
                  Step-by-step video tutorials <br className="hidden sm:inline" />
                  included by a real human.
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column (50% - Stacked SEO and CMS Tiles) */}
            <div className="w-full lg:w-[50%] flex flex-col border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* Tile 3: Automatic SEO (Upper Half) */}
              <div className="border-b border-white/10 flex flex-col justify-between relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300">
                <div className="p-5 sm:p-6 pb-3 sm:pb-4">
                  <p className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35]">
                    Automatic SEO, sitemaps and full-<br className="hidden sm:inline" />
                    control all ready in your site.
                  </p>
                </div>
                <div className="px-5 sm:px-6 pb-0 mt-2 sm:mt-3">
                  <div className="rounded-t-md sm:rounded-t-lg overflow-hidden border-t border-l border-r border-white/10 bg-[#0c0c10] h-[120px] sm:h-[140px] md:h-[150px]">
                    <img
                      src="/card-images/why-choose-template/image-1.png"
                      alt="Automatic SEO and Site Settings"
                      className="w-full h-auto block object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Tile 4: Built-in CMS (Lower Half) */}
              <div className="flex flex-col justify-between relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300">
                <div className="p-5 sm:p-6 pb-3 sm:pb-4">
                  <p className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35]">
                    Easily create and manage <br className="hidden sm:inline" />
                    content with a built-in CMS.
                  </p>
                </div>
                <div className="px-5 sm:px-6 pb-0 mt-2 sm:mt-3">
                  <div className="rounded-t-md sm:rounded-t-lg overflow-hidden border-t border-l border-r border-white/10 bg-[#0c0c10] h-[120px] sm:h-[140px] md:h-[150px]">
                    <img
                      src="/card-images/why-choose-template/image-2.png"
                      alt="Built-in CMS collections"
                      className="w-full h-auto block object-cover object-top"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (50% - Tile 5: Pro Hosting Spanning Full Height) */}
            <div className="w-full lg:w-[50%] relative overflow-hidden bg-[#030305] hover:bg-[#06060a] transition-colors duration-300 min-h-[380px] sm:min-h-[450px] flex flex-col justify-end">
              <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-[#030305] p-6 sm:p-10">
                <video
                  src="/card-images/why-choose-template/video-3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain block max-h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/40 to-transparent opacity-90 pointer-events-none" />
              </div>
              <div className="p-5 sm:p-6 relative z-10 mt-auto">
                <p className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35]">
                  Pro hosting included for <br className="hidden sm:inline" />
                  fast and secure global sites.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

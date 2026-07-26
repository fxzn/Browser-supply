"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function HowDoesItWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".how-header",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".how-header",
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          ".how-bento",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".how-bento",
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

        <div className="how-header mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
              style={{
                background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
              }}
            >
              <span>HOW DOES IT WORK?</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-medium text-white tracking-tight leading-[1.15]">
              Go live within 1 hour, not <br />
              months, weeks or even days.
            </h2>
          </div>
        </div>

        <div className="how-bento w-full rounded-lg sm:rounded-xl md:rounded-[14px] border border-white/10 bg-[#050508] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            <div className="flex flex-col justify-between relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 min-h-[400px] sm:min-h-[440px]">
              {/* Floating Badge Step 1 at top-left */}
              <div className="absolute top-6 left-6 sm:top-7 sm:left-7 z-20">
                <div 
                  className="inline-flex items-center px-3.5 py-1.5 rounded-[8px] text-[#FF9933] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
                  style={{
                    background: 'radial-gradient(86% 150% at 47%, #ff800000 0%, #ff800080 100%)'
                  }}
                >
                  <span>STEP 1</span>
                </div>
              </div>

              {/* Marquee Background (No Padding, Full Content Display without Clipping) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70 sm:opacity-85">
                <div 
                  className="absolute -inset-16 sm:-inset-20 flex gap-3 sm:gap-4 justify-center items-center"
                  style={{
                    transform: 'rotate(14deg)',
                  }}
                >

                  <div className="w-[45%] sm:w-[47%] flex flex-col gap-3 sm:gap-4 animate-scroll-up flex-shrink-0">
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/card-templates/card-1.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/card-templates/card-2.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/card-templates/card-3.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/selene.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/agentik.png" className="w-full h-auto block object-cover" alt="" /></div>
                    {/* Loop repeat */}
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/card-templates/card-1.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/card-templates/card-2.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/card-templates/card-3.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/selene.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/agentik.png" className="w-full h-auto block object-cover" alt="" /></div>
                  </div>

                  <div className="w-[45%] sm:w-[47%] flex flex-col gap-3 sm:gap-4 animate-scroll-down flex-shrink-0">
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/talentify.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/benefit.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/build-for.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/partnr.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/team.png" className="w-full h-auto block object-cover" alt="" /></div>
                    {/* Loop repeat */}
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/talentify.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/benefit.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/build-for.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/partnr.png" className="w-full h-auto block object-cover" alt="" /></div>
                    <div className="rounded-[6px] overflow-hidden shadow-xl border border-white/10 bg-[#101016]"><img src="/card-images/team.png" className="w-full h-auto block object-cover" alt="" /></div>
                  </div>
                </div>

                {/* Gradients to fade out top and bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent z-10" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050508] to-transparent z-10" />
              </div>

              {/* Text at bottom */}
              <div className="p-6 sm:p-7 pt-12 sm:pt-16 relative z-20 mt-auto flex flex-col justify-end">
                <h3 className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35] mb-2">
                  Pick a template.
                </h3>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                  Browse the collection of expert-crafted templates and select one best for you.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 min-h-[400px] sm:min-h-[440px]">
              {/* Video container at top with small gap */}
              <div className="p-3 sm:p-4 pb-1 sm:pb-2">
                <div className="rounded-[6px] overflow-hidden border border-white/10 bg-[#0c0c10] w-full aspect-[16/9] relative shadow-lg">
                  <video
                    src="/card-images/HowDoesItWork/HowDoesItWork-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full block object-cover object-top"
                  />
                </div>
              </div>

              {/* Text directly below video without mt-auto pushing it to the bottom */}
              <div className="p-6 sm:p-7 pt-4 sm:pt-5">
                <div className="mb-4 sm:mb-5">
                  <div 
                    className="inline-flex items-center px-3.5 py-1.5 rounded-[8px] text-[#FF9933] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
                    style={{
                      background: 'radial-gradient(86% 150% at 47%, #ff800000 0%, #ff800080 100%)'
                    }}
                  >
                    <span>STEP 2</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35] mb-2">
                  Make it yours.
                </h3>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                  Change text, customize colors, and swap images with ease.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start relative overflow-hidden bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 min-h-[400px] sm:min-h-[440px]">
              {/* Text at top */}
              <div className="p-6 sm:p-7 pt-7 sm:pt-8 pb-1 sm:pb-2">
                <div className="mb-4 sm:mb-5">
                  <div 
                    className="inline-flex items-center px-3.5 py-1.5 rounded-[8px] text-[#FF9933] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
                    style={{
                      background: 'radial-gradient(86% 150% at 47%, #ff800000 0%, #ff800080 100%)'
                    }}
                  >
                    <span>STEP 3</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35] mb-2">
                  Go live instantly.
                </h3>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                  Launch your site in seconds with just one click, all in one platform.
                </p>
              </div>

              {/* Video container directly below text without mt-auto pushing it down */}
              <div className="p-3 sm:p-4 pt-2 sm:pt-3">
                <div className="rounded-[6px] overflow-hidden border border-white/10 bg-[#0c0c10] w-full aspect-[16/9] relative shadow-lg">
                  <video
                    src="/card-images/HowDoesItWork/HowDoesItWork-3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full block object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

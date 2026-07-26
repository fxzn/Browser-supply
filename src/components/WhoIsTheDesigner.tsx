"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

export default function WhoIsTheDesigner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Setup ScrollTrigger if needed
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".designer-header",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".designer-header",
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          ".designer-bento",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".designer-bento",
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
      id="designer"
      className="py-8 sm:py-10 md:py-12 bg-[var(--color-bg-default)] relative z-20 overflow-hidden"
    >
      <div className="container-layout max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="designer-header mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="mb-6">
              <div 
                className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
                style={{
                  background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
                }}
              >
                <span>WHO IS THE DESIGNER?</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-[36px] md:text-[42px] lg:text-[46px] font-medium text-white tracking-tight leading-[1.15]">
              Meet the creator <br className="hidden sm:inline" />
              behind the sites.
            </h2>
          </div>

          <div className="shrink-0 mb-2 md:mb-4">
            <a
              href="#book-call"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-7 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-white/90 transition-colors"
            >
              Book a coaching call with me <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        <div className="designer-bento unified-bento w-full rounded-lg sm:rounded-xl md:rounded-[14px] border border-white/10 bg-[#050508] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left side: Video (approx 45% width) */}
            <div className="w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden bg-[#0c0c10] min-h-[400px] lg:min-h-0">
              <video
                src="/card-images/Whoisthedesigner/Whoisthedesigner.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            
            {/* Right side: Content (approx 55% width) */}
            <div className="w-full lg:w-[55%] flex flex-col justify-between">
              
              {/* Top Text Content */}
              <div className="p-8 sm:p-10 lg:p-14 border-b border-white/10">
                <div 
                  className="inline-flex items-center px-3.5 py-1.5 rounded-[8px] text-[#FF9933] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
                  style={{
                    background: 'radial-gradient(86% 150% at 47%, #ff800000 0%, #ff800080 100%)'
                  }}
                >
                  <span>FOUNDER</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-[42px] font-medium text-white tracking-tight leading-[1.2] mt-8 mb-8">
                  Hey, I&apos;m Ramish<br />
                  Designer & Creator
                </h3>
                
                <div className="space-y-5 text-[#c9c9c9] text-sm sm:text-[15px] leading-relaxed">
                  <p>When I started my business, I realized speed was everything. Getting a website live meant getting customers through the door.</p>
                  <p>Luckily, I knew how to design and build sites, so what could have taken weeks only took me hours.</p>
                  <p>That first week, I had my website live, and sales rolling in.</p>
                  <p>Now, I&apos;m sharing my unfair advantage with other creative entrepreneurs so they can do the same.</p>
                  <p>Launch faster without the cost or complexity.</p>
                </div>
              </div>

              {/* Bottom Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center border-b sm:border-b-0 border-r-0 sm:border-r border-white/10">
                  <h4 className="text-3xl sm:text-4xl font-medium text-white mb-3">6+</h4>
                  <p className="text-[#a0a0a0] text-[15px]">Years building sites</p>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center">
                  <h4 className="text-3xl sm:text-4xl font-medium text-white mb-3">100+</h4>
                  <p className="text-[#a0a0a0] text-[15px]">Websites made</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/10">
                <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center border-b sm:border-b-0 border-r-0 sm:border-r border-white/10">
                  <h4 className="text-3xl sm:text-4xl font-medium text-white mb-3">$100k+</h4>
                  <p className="text-[#a0a0a0] text-[15px]">Revenue made in Framer</p>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center">
                  <h4 className="text-3xl sm:text-4xl font-medium text-white mb-3">2,000+</h4>
                  <p className="text-[#a0a0a0] text-[15px]">Templates sold</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

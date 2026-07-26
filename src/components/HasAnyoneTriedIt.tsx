"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This Framer template is excellent at elevating your online presence!",
    name: "Nic",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote: "Very nice. Intuitive, easy going, good to navigate. Just Awesome!",
    name: "Renan",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "The best part of the template is it's aesthetically pleasing and business focused.",
    name: "Emon",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    quote: "Beautiful design and is easy to set up! The tutorial helped me a lot.",
    name: "Widya",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "Super easy to use and customise and also beautifully designed.",
    name: "Dávid",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    quote: "The design is clean, easy to custmize, professional, and versatile.",
    name: "Mark",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    quote: "The templates is so well designed and has a unique look to them.",
    name: "Samar",
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    quote: "The template is excellent! It is super easy to use and very beautiful.",
    name: "Aba",
    avatar: "https://i.pravatar.cc/150?img=52",
  },
  {
    quote: "One of the best templates I've used. Very professional and easy to modify.",
    name: "Nonso",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

export default function HasAnyoneTriedIt() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".tried-header",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".tried-header",
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          ".tried-bento",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".tried-bento",
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

        <div className="tried-header mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="mb-6">
              <div 
                className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
                style={{
                  background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
                }}
              >
                <span>HAS ANYONE ELSE TRIED IT?</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-medium text-white tracking-tight leading-[1.15]">
              Trusted by 2k+ customers <br />
              around the globe.
            </h2>
          </div>

          <div>
            <a
              href="#customer-websites"
              className="inline-flex items-center gap-2.5 h-12 px-7 rounded-full bg-white text-black text-base font-semibold hover:bg-white/90 transition-colors shadow-lg self-start md:self-auto"
            >
              <span>See real customer websites</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="tried-bento w-full rounded-lg sm:rounded-xl md:rounded-[14px] border border-white/10 bg-[#050508] overflow-hidden shadow-2xl">
          
          {/* 3x3 Grid of Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white/10">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 flex flex-col justify-between bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 ${
                  idx >= 3 ? "border-t border-white/10" : idx > 0 ? "max-md:border-t max-md:border-white/10" : ""
                } ${
                  idx % 3 !== 0 ? "lg:border-l lg:border-white/10" : ""
                } ${
                  idx % 2 !== 0 ? "md:max-lg:border-l md:max-lg:border-white/10" : ""
                }`}
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1.5 mb-6 text-white">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-[18px] h-[18px] sm:w-5 sm:h-5 fill-white text-white" />
                    ))}
                  </div>

                  {/* Review Text (font-size same as "Make it yours.") */}
                  <p className="text-lg sm:text-[20px] md:text-[22px] font-medium text-[#F3F3F3] leading-[1.35] mb-8">
                    {t.quote}
                  </p>
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-white/10 bg-[#14141d]"
                    onError={(e) => {
                      // Fallback avatar if pravatar fails
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${t.name}&backgroundColor=202028&textColor=ffffff`;
                    }}
                  />
                  <span className="text-sm font-medium text-white/80">{t.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#050508]">
            
            {/* Left: Video of Matt & Friend (Widened to 50% / col-span-6) */}
            <div className="lg:col-span-6 relative bg-[#0c0c10] overflow-hidden min-h-[360px] sm:min-h-[460px] lg:min-h-full flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <video
                src="/card-images/Has-anyone-else-tried-it/Has-anyone-else-tried-it-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full block object-cover object-center absolute inset-0"
              />
            </div>

            {/* Right: Matt Case Study Content (Reduced padding to tighten gap to video) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl sm:text-[36px] md:text-[42px] lg:text-[46px] font-medium text-white leading-[1.15] mb-6">
                  Matt launched his new <br className="hidden sm:inline" />
                  site in less than 1 hour.
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-8">
                  <p>
                    From burning out on 12-hour gym shifts to running his own online coaching business, on his own terms.
                  </p>
                  <p>
                    Matt had tried the agency route before. Thousands of dollars later, he had a terrible site and zero control over it.
                  </p>
                  <p>
                    I showed him the right template. We sat in a café, he made the edits himself, and launched in 1 hour.
                  </p>
                </div>

                <div className="pl-4 sm:pl-5 border-l-2 border-white text-sm sm:text-base text-white/90 font-medium leading-relaxed mb-16 sm:mb-20">
                  No design skills. No coding. Barely any <br className="hidden sm:inline" />
                  laptop experience. Didn&apos;t need any.
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 sm:gap-4 mt-auto pt-6 sm:pt-8">
                <a
                  href="#template-matt"
                  className="inline-flex items-center justify-center h-12 px-5 sm:px-6 xl:px-7 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-white/90 transition-colors shadow-lg whitespace-nowrap"
                >
                  View template Matt used
                </a>
                <a
                  href="#customer-sites"
                  className="inline-flex items-center justify-center h-12 px-5 sm:px-6 xl:px-7 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-white font-semibold text-sm sm:text-base transition-colors whitespace-nowrap"
                >
                  View other customers&apos; sites
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

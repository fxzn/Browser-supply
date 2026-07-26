"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ButtonLink } from "@/components/ui";

export interface FeaturedTemplate {
  id: string;
  name: string;
  category: string;
  price: string;
  media: string;
  hoverMedia: string;
  isNew?: boolean;
}

interface FeaturedTemplatesProps {
  featuredTemplates: FeaturedTemplate[];
}

export default function FeaturedTemplates({ featuredTemplates }: FeaturedTemplatesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".featured-header",
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".featured-header",
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          ".featured-card",
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".featured-grid",
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

        <div className="featured-header mb-12 sm:mb-16 md:mb-20">
          <div className="mb-6">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
              style={{
                background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
              }}
            >
              <span>WHICH TEMPLATE IS FOR ME?</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium text-white tracking-tight leading-[1.12] max-w-2xl">
              Premium templates <br className="hidden sm:inline" /> built to drive results.
            </h2>
            <div className="shrink-0">
              <ButtonLink
                href="#templates"
                variant="white"
                size="lg"
                className="h-12 !rounded-full font-bold px-7 text-base shadow-xl hover:shadow-2xl transition-all"
              >
                View all
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="featured-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {featuredTemplates.map((item) => (
            <Link
              key={item.id}
              href={`#template-${item.id}`}
              className="featured-card group block"
            >
              {/* Media Container (Smaller rounding rounded-md/rounded-[10px], NO border) */}
              <div className="rounded-md sm:rounded-[10px] overflow-hidden bg-[#121218] aspect-[4/3] relative shadow-md group-hover:shadow-xl transition-shadow duration-500">
                {/* Default Image (No zoom animation) */}
                <img
                  src={item.media}
                  alt={item.name}
                  className="w-full h-full object-cover block transition-opacity duration-500 ease-out group-hover:opacity-0"
                />
                {/* Hover Image (No zoom animation) */}
                <img
                  src={item.hoverMedia}
                  alt={`${item.name} hover preview`}
                  className="absolute inset-0 w-full h-full object-cover block opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                />
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Title & Details Below Image (with wider gap space-y-2.5 sm:space-y-3) */}
              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 px-0.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  {item.isNew && (
                    <span 
                      className="inline-flex items-center px-2 py-1 rounded-[5px] text-[#4ade80] text-[10px] sm:text-[10.5px] font-semibold tracking-wider uppercase border-0"
                      style={{
                        background: 'radial-gradient(86% 150% at 47%, #10b98100 0%, #10b98180 100%)'
                      }}
                    >
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-[#c9c9c9] tracking-wider uppercase flex items-center">
                  <span>{item.category}</span>
                  <span className="text-[#c9c9c9]/60 mx-1.5">•</span>
                  <span>{item.price}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

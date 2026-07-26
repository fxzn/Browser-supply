"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { StarIcon } from "@/components/icons";

export interface TemplateItem {
  id: string;
  name: string;
  category: "SaaS" | "AI & Tech" | "Personal" | "Agency" | "E-commerce";
  media: string;
  type: "video" | "image";
}

export interface ReviewItem {
  quote: string;
  name: string;
  badge: string | null;
  avatar: string | null;
}

interface TemplateGridProps {
  templates: TemplateItem[];
  reviews: ReviewItem[];
}

export default function TemplateGrid({ templates, reviews }: TemplateGridProps) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const reviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reviews || reviews.length === 0) return;
    const timer = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews]);

  useGSAP(() => {
    if (reviewRef.current) {
      gsap.fromTo(
        reviewRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [activeReviewIdx]);

  const currentReview = reviews[activeReviewIdx] || reviews[0];

  if (!templates || !reviews || reviews.length === 0) return null;

  return (
    <section id="templates" className="pt-0 pb-12 md:pt-0 md:pb-20 relative overflow-hidden">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="w-full px-2 md:px-3 relative">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-3.5 space-y-3 md:space-y-3.5">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="break-inside-avoid relative group rounded-[8px] bg-[#12141c] transition-shadow duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/60 cursor-pointer stagger-element"
            >
              <Link href={`#template-${tpl.id}`} className="block w-full">
                {tpl.type === "video" ? (
                  <video
                    src={tpl.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                ) : (
                  <img
                    src={tpl.media}
                    alt={tpl.name}
                    className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                )}
                
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[380px] sm:h-[480px] md:h-[560px] bg-gradient-to-t from-[#07070a] via-[#07070a]/85 via-[#07070a]/50 via-[#07070a]/20 via-[#07070a]/5 to-transparent pointer-events-none z-10" />
      </div>

      <div className="container-layout relative z-20 -mt-12 sm:-mt-16 md:-mt-20">

        <div 
          ref={reviewRef}
          onClick={() => setActiveReviewIdx((prev) => (prev + 1) % reviews.length)}
          className="max-w-xl mx-auto text-center space-y-5 cursor-pointer"
          title="Click to see next review"
        >
          <div className="flex justify-center items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />
            ))}
          </div>
          <p className="text-xl sm:text-2xl md:text-[26px] font-medium text-white leading-snug min-h-[64px] flex items-center justify-center">
            &ldquo;{currentReview.quote}&rdquo;
          </p>
          <div className="flex justify-center items-center gap-3 font-medium pt-2">
            {currentReview.badge && (
              <span className="font-extrabold text-white tracking-widest uppercase text-[11px] bg-white/10 px-2.5 py-0.5 rounded border border-white/15 shadow-sm">
                {currentReview.badge}
              </span>
            )}
            {currentReview.avatar && (
              <img
                src={currentReview.avatar}
                alt={currentReview.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-white/20 shadow-sm"
              /> 
            )}
            <span className="text-[15px] sm:text-base text-[#a0a0a0]">{currentReview.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

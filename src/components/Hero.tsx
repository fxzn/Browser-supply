"use client";

import React from "react";
import { ButtonLink, Avatar } from "@/components/ui";
import { FramerIcon, StarIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
      <div className="container-layout">
        <div className="max-w-4xl">

          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase mb-7"
            style={{
              background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
            }}
          >
            <FramerIcon size={13} className="text-[#8EA9FA]" />
            <span>FRAMER TEMPLATES</span>
          </div>

          <h1 className="text-white font-medium text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem] leading-[1.08] tracking-tight mb-12 max-w-[90%] md:max-w-full mx-auto md:mx-0">
            No back-and-forth with{" "}
            <br className="hidden lg:inline" />
            AI. Pick, edit, publish.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2 w-full">
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <ButtonLink
              href="#templates"
              variant="white"
              size="lg"
              className="h-12 rounded-full font-bold px-7 text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-[transform,box-shadow]"
            >
              Pick your template
            </ButtonLink>

            <ButtonLink
              href="#quiz"
              variant="ghost"
              size="lg"
              className="!bg-[#1c1c1c] hover:!bg-[#252525] !text-white border-0 h-12 rounded-full font-medium px-7 text-base hover:scale-[1.02] active:scale-[0.98] transition-[transform,background-color]"
            >
              Or get matched with the perfect one
            </ButtonLink>
          </div>

          {/* Avatars & Social Proof */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="flex -space-x-2.5 overflow-hidden">
              <Avatar 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                alt="User 1" 
                size="md" 
                className="border-2 border-[#09090e]"
              />
              <Avatar 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                alt="User 2" 
                size="md" 
                className="border-2 border-[#09090e]"
              />
              <Avatar 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" 
                alt="User 3" 
                size="md" 
                className="border-2 border-[#09090e]"
              />
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider uppercase text-white">
              <StarIcon size={16} className="text-white" />
              <span>RATED 4.92/5</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

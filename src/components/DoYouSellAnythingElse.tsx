"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Zap,
  RefreshCw,
  PlayCircle,
  Infinity,
  Layers,
  Sparkles,
  Headphones,
  PenTool,
  Rocket,
  Repeat,
  CheckCircle2,
  AppWindow,
  Copy
} from "lucide-react";
import { RadioOption } from "@/components/ui/radio-option";

const FramerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
  </svg>
);

const FigmaIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

export default function DoYouSellAnythingElse() {
  // State for Column 1 (Single template)
  const [singleOption, setSingleOption] = useState<"none" | "framer" | "figma" | "doneForYou">("none");

  // Calculate dynamic price for Single Template
  const singlePrice =
    singleOption === "figma" ? "$169" : singleOption === "doneForYou" ? "$499" : "$129";

  // State for Column 3 (Custom project)
  const [customOption, setCustomOption] = useState<"landing" | "multipage">("landing");

  // Calculate dynamic price for Custom Project
  const customPrice = customOption === "multipage" ? "$4,795" : "$2,495";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".pricing-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".pricing-bento",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-bento",
          start: "top 85%",
        },
      }
    );
  });

  return (
    <section id="pricing" className="py-8 sm:py-10 md:py-12 relative bg-[#050508] text-white overflow-hidden">
      <div className="container-layout max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="pricing-header mb-16 sm:mb-20 max-w-3xl">
          {/* Badge */}
          <div className="mb-6">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-[8px] text-[#8EA9FA] text-[11.5px] font-semibold tracking-wider uppercase shadow-sm"
              style={{
                background: 'radial-gradient(86% 150% at 47%, #668cff00 0%, #668cff80 100%)'
              }}
            >
              <span>DO YOU SELL ANYTHING ELSE?</span>
            </div>
          </div>
          {/* Title: typography matching 'Trusted by 2k+ customers around the globe.' */}
          <h2 className="text-3xl sm:text-[36px] md:text-[42px] lg:text-[46px] font-medium text-white tracking-tight leading-[1.15]">
            Providing all website-<br className="hidden sm:inline" />
            solutions for your needs.
          </h2>
        </div>

        <div className="pricing-bento w-full rounded-2xl md:rounded-[24px] border border-white/15 bg-[#050508] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                  ONE-TIME PAYMENT
                </p>

                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    Single template
                  </h3>
                  <span className="text-2xl sm:text-3xl font-semibold text-white transition-all duration-300">
                    {singlePrice}
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed mb-8 min-h-[44px]">
                  Pick a template best suited for you, customize it, and launch.
                </p>

                {/* Radio Options Box */}
                <div className="p-2 rounded-lg sm:rounded-xl md:rounded-[14px] border border-white/10 bg-[#050508] overflow-hidden space-y-1.5 mb-8">
                  <RadioOption
                    icon={<FramerIcon className="w-4 h-4" />}
                    label="Framer template"
                    selected={singleOption === "framer"}
                    onClick={() => setSingleOption(singleOption === "framer" ? "none" : "framer")}
                  />
                  <RadioOption
                    icon={<FigmaIcon className="w-4 h-4" />}
                    label="Add Figma designs"
                    priceTag="(+$39)"
                    selected={singleOption === "figma"}
                    onClick={() => setSingleOption(singleOption === "figma" ? "none" : "figma")}
                  />
                  <RadioOption
                    icon={<CheckCircle2 className="w-4 h-4" />}
                    label="Add Done-for you"
                    priceTag="(+$370)"
                    selected={singleOption === "doneForYou"}
                    onClick={() => setSingleOption(singleOption === "doneForYou" ? "none" : "doneForYou")}
                  />
                </div>

                {/* Included List */}
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    INCLUDED:
                  </p>
                  <ul className="space-y-3.5">
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Zap className="w-4 h-4 text-white shrink-0" />
                      <span>Instant access to chosen template</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <RefreshCw className="w-4 h-4 text-white shrink-0" />
                      <span>Lifetime template updates</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <FramerIcon className="w-4 h-4 text-white shrink-0" />
                      <span>3 months Framer Pro</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <PlayCircle className="w-4 h-4 text-white shrink-0" />
                      <span>Step-by-step video tutorials</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Infinity className="w-4 h-4 text-white shrink-0" />
                      <span>Use on unlimited sites</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <a
                  href="#browse-templates"
                  className="w-full inline-flex items-center justify-center h-12 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors shadow-lg"
                >
                  Browse templates
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#050508] hover:bg-[#08080c] transition-colors duration-300 border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                  ONE-TIME PAYMENT
                </p>

                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    Bundle
                  </h3>
                  <div className="flex items-baseline">
                    <span className="line-through text-white/40 text-lg sm:text-xl mr-2 font-normal">
                      $1,881
                    </span>
                    <span className="text-2xl sm:text-3xl font-semibold text-white">
                      $399
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed mb-8 min-h-[44px]">
                  Every template, unlimited sites. Build however you want.
                </p>

                {/* Included List */}
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    INCLUDED:
                  </p>
                  <ul className="space-y-3.5">
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Layers className="w-4 h-4 text-white shrink-0" />
                      <span>All current templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Sparkles className="w-4 h-4 text-white shrink-0" />
                      <span>Early access to all future templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <RefreshCw className="w-4 h-4 text-white shrink-0" />
                      <span>Lifetime template updates</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Infinity className="w-4 h-4 text-white shrink-0" />
                      <span>Use on unlimited sites</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <FramerIcon className="w-4 h-4 text-white shrink-0" />
                      <span>3 months Framer Pro</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <PlayCircle className="w-4 h-4 text-white shrink-0" />
                      <span>Step-by-step video tutorials</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Headphones className="w-4 h-4 text-white shrink-0" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <a
                  href="#get-bundle"
                  className="w-full inline-flex items-center justify-center h-12 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-white font-semibold text-base transition-colors"
                >
                  Get the bundle
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#050508] hover:bg-[#08080c] transition-colors duration-300">
              <div>
                <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                  ONE-TIME PAYMENT
                </p>

                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    Custom project
                  </h3>
                  <span className="text-2xl sm:text-3xl font-semibold text-white transition-all duration-300">
                    {customPrice}
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed mb-8 min-h-[44px]">
                  Designed from scratch for your brand, built in Framer.
                </p>

                {/* Radio Options Box */}
                <div className="p-2 rounded-lg sm:rounded-xl md:rounded-[14px] border border-white/10 bg-[#050508] overflow-hidden space-y-1.5 mb-8">
                  <RadioOption
                    icon={<AppWindow className="w-4 h-4" />}
                    label="Landing page"
                    selected={customOption === "landing"}
                    onClick={() => setCustomOption("landing")}
                  />
                  <RadioOption
                    icon={<Copy className="w-4 h-4" />}
                    label="Multi-page site"
                    selected={customOption === "multipage"}
                    onClick={() => setCustomOption("multipage")}
                  />
                </div>

                {/* Included List */}
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    INCLUDED:
                  </p>
                  <ul className="space-y-3.5">
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <PenTool className="w-4 h-4 text-white shrink-0" />
                      <span>Custom design, no template</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Rocket className="w-4 h-4 text-white shrink-0" />
                      <span>CMS, SEO and launch included</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm sm:text-[15px] text-white/90">
                      <Repeat className="w-4 h-4 text-white shrink-0" />
                      <span>Two revision rounds</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <a
                  href="#discovery-call"
                  className="w-full inline-flex items-center justify-center h-12 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-white font-semibold text-base transition-colors"
                >
                  Book a discovery call
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { XIcon, YouTubeIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-[#050508] pt-8 sm:pt-10 md:pt-12 pb-8 relative z-20">
      <div className="container-layout max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-20">
          
          {/* Left Column */}
          <div className="flex-1 max-w-xs">
            <h3 className="text-xl font-medium text-white mb-4">Browser.supply</h3>
            <p className="text-[#a0a0a0] text-base leading-relaxed mb-6">
              Launch your online business with a premium Framer website template.
            </p>
            <div className="flex items-center gap-4 text-white">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <XIcon size={20} />
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <YouTubeIcon size={22} />
              </Link>
            </div>
          </div>

          {/* Right Column Links */}
          <div className="flex gap-16 lg:gap-24">
            <div className="flex flex-col gap-5">
              <Link href="#templates" className="text-base text-white font-medium hover:text-white/70 transition-colors">Templates</Link>
              <Link href="#examples" className="text-base text-white font-medium hover:text-white/70 transition-colors">Live examples</Link>
              <Link href="#bundle" className="text-base text-white font-medium hover:text-white/70 transition-colors">Bundle</Link>
              <Link href="#blog" className="text-base text-white font-medium hover:text-white/70 transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link href="#quiz" className="text-base text-white font-medium hover:text-white/70 transition-colors">Quiz</Link>
              <Link href="#support" className="text-base text-white font-medium hover:text-white/70 transition-colors">Support</Link>
              <Link href="#privacy" className="text-base text-white font-medium hover:text-white/70 transition-colors">Privacy</Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#a0a0a0] text-[15px]">
            © 2026 browser.supply. Framer website templates
          </p>
          <div className="flex items-center gap-3 text-[#a0a0a0] text-[15px]">
            <span>Created by</span>
            <img src="https://i.pravatar.cc/150?img=11" alt="Ramish Aziz" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-white font-medium">Ramish Aziz</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

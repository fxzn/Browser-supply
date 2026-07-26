"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { XIcon, YouTubeIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";

const NAV_LINKS = [
  { label: "Templates",     href: "#templates" },
  { label: "Live examples", href: "#live-examples" },
  { label: "Support",       href: "#support" },
  { label: "Blog",          href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[var(--navbar-h)] flex items-center transition-colors duration-300",
          scrolled
            ? "bg-[#09090e]/85 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-layout navbar-inner">

          <Link
            href="/"
            className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img 
              src="/browser-supply.png" 
              alt="Browser.supply logo" 
              className="h-5 w-5 object-contain" 
            />
            <span className="font-semibold tracking-tight text-[15.5px] text-white">
              Browser.supply
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-white/80 text-[15px] font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Social Icons — desktop only */}
            <div className="hidden md:flex items-center gap-3.5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on X"
                className="text-white hover:opacity-75 transition-opacity p-1"
              >
                <XIcon size={22} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch on YouTube"
                className="text-white hover:opacity-75 transition-opacity p-1"
              >
                <YouTubeIcon size={24} />
              </a>
            </div>

            {/* Bundle CTA */}
            <ButtonLink
              href="#pricing"
              variant="white"
              size="lg"
              className="h-12 rounded-full font-bold px-7 text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Bundle
            </ButtonLink>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={cn(
                "md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5",
                "text-white hover:opacity-75 transition-opacity"
              )}
            >
              <span
                className={cn(
                  "block w-5 h-0.5 bg-current rounded-full transition-all duration-200",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-current rounded-full transition-all duration-200",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-current rounded-full transition-all duration-200",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-x-0 top-[var(--navbar-h)] z-40 md:hidden",
          "bg-[#09090e]/95 backdrop-blur-xl",
          "transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="container-layout py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl",
                "text-white hover:text-white/80",
                "hover:bg-white/10 transition-all duration-150",
                "text-base font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile social */}
          <div className="flex items-center gap-4 px-4 pt-3 mt-2 border-t border-white/10">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X"
              className="text-white hover:opacity-75 transition-opacity p-1"
            >
              <XIcon size={22} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube"
              className="text-white hover:opacity-75 transition-opacity p-1"
            >
              <YouTubeIcon size={24} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

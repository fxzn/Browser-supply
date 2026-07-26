"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [pathname]);

  // Global staggered entry animations for sections
  useGSAP(() => {
    // We can select all main sections (or elements with a specific class)
    // For now, let's animate the immediate children of the main container or specific sections.
    // A simple approach is animating the Hero elements first, then setting up ScrollTriggers for other sections.
    
    // 1. Initial Page Load (Hero Section)
    const heroElements = document.querySelectorAll("#home h1, #home p, #home .flex-wrap > *");
    if (heroElements.length > 0) {
      gsap.fromTo(
        heroElements,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power2.out",
          delay: 0.1
        }
      );
    }

    // 2. Scroll Animations for other sections
    const sections = document.querySelectorAll("section:not(#home)");
    sections.forEach((section) => {
      // Find the main content elements inside each section
      const content = section.querySelectorAll(".container-layout > div > *, .container-layout > *");
      if (content.length > 0) {
        gsap.fromTo(
          content,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%", // Starts when top of section hits 85% of viewport
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Find specific mockup/grid elements to stagger independently
      const staggers = section.querySelectorAll(".stagger-element");
      if (staggers.length > 0) {
        gsap.fromTo(
          staggers,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, { dependencies: [pathname] });

  return <>{children}</>;
}

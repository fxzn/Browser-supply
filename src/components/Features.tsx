import React from "react";
import { ArrowRight, Zap, Boxes, BarChart3 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

function FeatureCard({ title, description, icon, badge }: FeatureCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] transition-colors duration-300 flex flex-col justify-between overflow-hidden">
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[var(--color-text-primary)]">
            {icon}
          </div>
          {badge && (
            <span className="px-2.5 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-white/[0.06] text-[var(--color-text-secondary)] border border-white/[0.08]">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-semibold text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)] transition-colors">
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="container-layout">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[var(--color-text-secondary)]">
            <span>Why Browser.supply</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight">
            Stop arguing with AI prompts.<br />Ship world-class design today.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base md:text-lg">
            AI website builders produce generic layouts that look the same. Our templates give you hand-crafted perfection with the speed of no-code.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="Zero Back-and-Forth"
            description="Skip endless prompt iterations and broken layouts. Pick a verified conversion template, customize your copy, and publish in under 15 minutes."
            badge="Time Saver"
            icon={<Zap className="w-6 h-6 text-blue-400" />}
          />

          <FeatureCard
            title="Framer Native Power"
            description="Built natively inside Framer studio. Take full advantage of visual animations, CMS collections, components, and one-click publishing to custom domains."
            badge="100% Native"
            icon={<Boxes className="w-6 h-6 text-purple-400" />}
          />

          <FeatureCard
            title="Cognitive UX & SEO"
            description="Every spacing, typographic hierarchy, and CTA placement is engineered using cognitive psychology and conversion rate optimization best practices."
            badge="High Converting"
            icon={<BarChart3 className="w-6 h-6 text-emerald-400" />}
          />
        </div>

      </div>
    </section>
  );
}

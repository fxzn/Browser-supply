import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "base" | "elevated" | "overlay";
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = "base",
  hover,
  glow,
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "surface",
      variant === "elevated" && "surface-elevated",
      variant === "overlay" && "surface-overlay",
      hover && "card-hover",
      glow && "glow-white",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  strong,
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      strong ? "glass-strong" : "glass",
      "rounded-2xl",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

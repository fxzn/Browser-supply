import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "accent" | "new" | "white" | "section";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  dot,
  className,
  children,
  ...props
}) => (
  <span className={cn("badge", `badge-${variant}`, className)} {...props}>
    {dot && (
      <span
        className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-60"
        aria-hidden="true"
      />
    )}
    {children}
  </span>
);

export interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("section-badge", className)} {...props}>
    {children}
  </div>
);

import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  fallback,
  size = "md",
  className,
  ...props
}) => (
  <div className={cn("avatar", `avatar-${size}`, className)} {...props}>
    {src ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <span>{fallback ?? alt?.charAt(0).toUpperCase()}</span>
    )}
  </div>
);

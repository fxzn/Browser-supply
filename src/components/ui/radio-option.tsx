"use client";

import React from "react";

export interface RadioOptionProps {
  icon: React.ReactNode;
  label: string;
  priceTag?: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export const RadioOption: React.FC<RadioOptionProps> = ({
  icon,
  label,
  priceTag,
  selected,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl cursor-pointer transition-all duration-200 select-none ${
        selected
          ? "bg-white/[0.06] shadow-sm"
          : "hover:bg-white/[0.03] bg-transparent"
      } ${className}`}
    >
      <div className="flex items-center gap-3 sm:gap-3.5">
        <div className={`shrink-0 transition-colors ${selected ? "text-white" : "text-white/60"}`}>
          {icon}
        </div>
        <div className="text-sm sm:text-[15px] font-medium flex items-center flex-wrap gap-1">
          <span className={selected ? "text-white font-semibold" : "text-white/80"}>{label}</span>
          {priceTag && (
            <span className="text-[#FF9933] text-xs sm:text-sm font-semibold ml-1.5">
              {priceTag}
            </span>
          )}
        </div>
      </div>

      {/* Radio Circle Indicator matching Gambar 1 */}
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ml-2 ${
          selected
            ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] scale-105"
            : "bg-white/10 border border-transparent hover:bg-white/15"
        }`}
      />
    </div>
  );
};

export default RadioOption;

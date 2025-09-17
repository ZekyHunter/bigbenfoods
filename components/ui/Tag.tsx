"use client";
import React from "react";

export default function Tag({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1 text-sm transition",
        "border",
        active
          ? "border-red-500 text-red-300 bg-red-900/20"
          : "border-neutral-700 hover:border-red-600",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

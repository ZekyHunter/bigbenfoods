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
        "rounded-full px-3 py-1 text-md transition font-semibold font-lato",
        "border-2",
        active
          ? "border-red-500 text-red-800 bg-red-700/20"
          : "border-neutral-700 hover:border-red-600",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

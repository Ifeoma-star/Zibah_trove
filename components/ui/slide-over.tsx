"use client";

import { useEffect, useCallback, ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  side?: "left" | "right";
  showCloseButton?: boolean;
  className?: string;
}

export function SlideOver({
  isOpen,
  onClose,
  children,
  title,
  side = "right",
  showCloseButton = true,
  className,
}: SlideOverProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide Over Panel */}
      <div
        className={cn(
          "absolute top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col",
          side === "right"
            ? "right-0 animate-in slide-in-from-right duration-300"
            : "left-0 animate-in slide-in-from-left duration-300",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "slide-over-title" : undefined}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-maroon/10 bg-cream">
          {title && (
            <h2
              id="slide-over-title"
              className="font-serif text-xl font-semibold text-maroon"
            >
              {title}
            </h2>
          )}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-maroon/10 transition-colors text-maroon/70 hover:text-maroon"
              aria-label="Close panel"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

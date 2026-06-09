"use client";

import { BriefcaseBusiness } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg animate-pulse">
          <BriefcaseBusiness className="h-7 w-7" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">CareerFlow</h1>
          <p className="text-sm text-muted-foreground">
            Streamlining Every Step of Hiring
          </p>
        </div>
      </div>

      {/* Loading Animation */}
      <div className="mt-10 w-64">
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-primary" />
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-sm text-muted-foreground animate-pulse">
        Connecting talent with opportunity...
      </p>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }
      `}</style>
    </div>
  );
}

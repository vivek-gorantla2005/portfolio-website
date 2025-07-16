"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <div className="font-extrabold text-4xl">
            Thanks For Visiting!!
        </div>
      </h1>
      <p className="text-center mt-2 font-bold  text-neutral-300 relative z-20">
        Have a Great Day!!
      </p>
    </div>
  );
}

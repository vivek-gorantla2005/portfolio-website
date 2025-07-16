"use client";
import React from "react";
import { Button } from "../ui/moving-border";
export function MovingBorderButton({children}) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-black-900 text-black dark:text-white font-extrabold border-neutral-200 dark:border-slate-800"
      >
        {children}
      </Button>
    </div>
  );
}

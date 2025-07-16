import React from "react";
import { BackgroundLines } from "./background-lines";
import { MovingBorder } from "./moving-border";
import { MovingBorderButton } from "./moving-button";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Connect With Me!!!
                <br />
                Vivek Gorantla
            </h2>
            
            {/* Connect Buttons */}
            <div className="flex gap-10">

            <MovingBorderButton>
                Email me
            </MovingBorderButton>
            <MovingBorderButton>
                Linkedn
            </MovingBorderButton>
            <MovingBorderButton>
                contact
            </MovingBorderButton>
            </div>
    </BackgroundLines >
  );
}

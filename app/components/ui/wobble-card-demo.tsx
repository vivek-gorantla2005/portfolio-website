"use client";

import React from "react";
import { WobbleCard } from "./wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
        className=""
      >
        {/* Images container */}
        <div className="absolute right-6 bottom-6 flex items-end gap-6 z-0">
          {/* Large image */}
          <img
            src="/leetcode.png"
            alt="LeetCode"
            className="grayscale filter object-contain rounded-2xl w-40 md:w-52 lg:w-64 shadow-lg"
          />

          {/* Column of small images */}
          <div className="flex flex-col gap-4">
            <img
              src="/image2.png"
              alt="Small 1"
              className="grayscale filter object-contain rounded-xl w-20 md:w-24 lg:w-28 shadow-md"
            />
            <img
              src="/image3.png"
              alt="Small 2"
              className="grayscale filter object-contain rounded-xl w-20 md:w-24 lg:w-28 shadow-md"
            />
          </div>
        </div>
      </WobbleCard>


      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

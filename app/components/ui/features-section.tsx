"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "motion/react";
import { TextGenerateEffect } from "./text-generate-effect";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "AI-Powered Social Media Platform",
      description:
        "Experience the future of social networking with intelligent content curation, real-time engagement insights, and automated moderation — all driven by AI.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
    },
    {
      title: "Plug & Play Docker Auth System",
      description:
        "Effortlessly integrate secure, containerized authentication into any application with our lightweight, Docker-ready auth module. No config chaos — just run, connect, and go.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
    {
      title: "Smart AI-Powered Sudoku Solver",
      description:
        "Proudly presenting our intelligent Sudoku solver — just upload a puzzle image, and watch OCR solving engine scan, interpret, and instantly crack it. Built for speed, precision, and a touch of magic.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-neutral-800",
    },
    {
      title: "AI-Powered DevOps – Coming Soon",
      description:
        "Building a next-gen DevOps automation platform powered by AI agents. Visualize global deployments with a real-time animated globe — connecting services like constellations, with one-click efficiency.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    }
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto bg-black text-white">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium">
          My Projects ShowCase
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-300 text-center font-normal">
          <TextGenerateEffect words="Have a look at projects I built" />
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border border-neutral-800 rounded-md">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden bg-black text-white`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-xl md:text-2xl md:leading-snug max-w-5xl mx-auto text-left tracking-tight">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base text-neutral-300 max-w-sm mx-0 my-2 text-left">
      {children}
    </p>
  );
};

export const SkeletonOne = () => (
  <div className="relative flex py-8 px-2 gap-10 h-full">
    <div className="w-full p-5 mx-auto bg-neutral-900 shadow-2xl group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2">
        <video src="/project1.mp4" autoPlay muted loop controls />
      </div>
    </div>
    <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
    <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
  </div>
);

export const SkeletonThree = () => (
  <div className="w-full mx-auto bg-transparent group h-full">
    <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
      <video src="/project2.mp4" autoPlay muted loop controls />
    </div>
  </div>
);

export const SkeletonTwo = () => {
  const images = ["/i1.png", "/i2.png", "/i3.png", "/i4.png"];
  const imageVariants = {
    whileHover: { scale: 1.1, rotate: 0, zIndex: 100 },
    whileTap: { scale: 1.1, rotate: 0, zIndex: 100 },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border border-neutral-700 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="auth preview"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{ rotate: Math.random() * 20 - 10 }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border border-neutral-700 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="auth preview"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => (
  <div className="h-full md:h-60 flex flex-col items-center relative bg-transparent mt-10">
    <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
  </div>
);

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

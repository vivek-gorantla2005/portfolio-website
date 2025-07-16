"use client";

import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "./draggable-card";
import Image from "next/image";

export function DraggableCardDemo() {
  const items = [
    {
      title: "AI Automation Tools",
      image:
        "/ai.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Scalable Backend Systems",
      image:
        "/backend.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "AI-powered DevOps Automation",
      image:
        "/devops.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Social-Media Microservices Project",
      image:
        "/micro-ser.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Real-Time local Bus Tracker",
      image:
        "/track.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-white dark:bg-black">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-white">
        My Work in Motion
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <Image
            src={item.image}
            alt={`Preview of ${item.title}`}
            width={320}
            height={320}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-xl shadow-lg"
          />
          <h3 className="mt-4 text-center text-xl font-semibold text-neutral-800 dark:text-neutral-200">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

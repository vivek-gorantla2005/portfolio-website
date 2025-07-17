"use client";

import { SparklesCore } from "./components/ui/sparkles";
import { BackgroundBeams } from "./components/ui/background-beams";
import { FlipWords } from "./components/ui/flip-words";
import { Spotlight } from "./components/ui/Spotlight";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { LampContainer } from "./components/ui/lamp";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { CardSpotlight } from "./components/ui/card-spotlight";
import { Timeline } from "./components/ui/timeline";
import { HeroHighlight } from "./components/ui/hero-highlight";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import { GlowingEffectDemoSecond } from "./components/ui/glowingEffect2";
import { FeaturesSectionDemo } from "./components/ui/features-section";
import { DraggableCardDemo } from "./components/ui/draggable-card-demo";
import { BackgroundLinesDemo } from "./components/ui/backgroundLinesDemo";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { BackgroundBoxesDemo } from "./components/ui/thankyou";
import PortfolioNavbar from "./components/ui/portfolio-navbar";
import { TracingBeam } from "./components/ui/tracing-beam";
import Loader from "./components/ui/loader";
import { useState,useEffect } from "react";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true); 
  }, []);
  if (!isHydrated) return <Loader />;

  const words = ["Full-Stack Developer", "System Designer", "Tech Enthusiast", "AI Builder"];

  const journeyData = [
    {
      title: "2023 — Getting Started with Programming",
      content: (
        <p>
          Began with C/C++ and solved 100+ DSA problems to strengthen logic building.
          Transitioned into Web Development during my 1st year of B.Tech — learned HTML, CSS, and JavaScript.
        </p>
      ),
    },
    {
      title: "2024 —Diving into real development",
      content: (
        <p>
          Learned React and Next.js for frontend and mastered backend development with Node.js and MongoDB.
          Built my first full-stack application using the MERN stack.
          Even gained fundamental knowledge on machine learning algorithms
        </p>
      ),
    },
    {
      title: "2025 — Advanced Backend & System Design",
      content: (
        <p>
          Gained expertise in PostgreSQL, Redis, Kafka, and microservices architecture.
          Designed scalable and performant systems with a focus on clean backend engineering.
        </p>
      ),
    },
    {
      title: "2025 — AI & Developer Automation",
      content: (
        <p>
          Building AI-powered automation tools.
          Integrating LLM agents to streamline developer workflows and code intelligence.
        </p>
      ),
    },
  ];


  return (
    <>
      <TracingBeam className="hidden sm:block">
        <div>
          {/* Hero Section */}
          <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={500}
              className="w-full h-full absolute top-0 left-0 z-0"
            />


            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="backdrop-blur-md bg-black/40 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full text-center shadow-lg relative overflow-hidden">
                <Spotlight className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" fill="white" />
                <div className="relative z-10">
                  <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Vivek G
                  </h1>
                  <div className="text-lg sm:text-2xl text-gray-200 leading-relaxed mb-2">
                    I’m a <span className="inline-block"><FlipWords words={words} /></span>
                  </div>
                  <p className="text-lg sm:text-2xl text-gray-200 leading-relaxed mb-4">
                    Crafting scalable web experiences and automation tools using cutting-edge technologies.
                  </p>
                  <TextGenerateEffect />
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Moving Cards Section */}
          <section className="relative w-full bg-black py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                My Full Stack Engineering Philosophy
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                A great developer isn’t defined by tools—but by how fluently they move between layers of the stack.
              </p>
            </div>

            <InfiniteMovingCards
              items={[
                {
                  key: "ts",
                  quote: "TypeScript lets me refactor with confidence across the codebase.",
                },
                {
                  key: "api",
                  quote: "Clean APIs are not just interfaces—they’re contracts between layers.",
                },
                {
                  key: "db",
                  quote: "Schema design is an art—balance performance, consistency, and future change.",
                },
                {
                  key: "auth",
                  quote: "Auth should be simple for users, but airtight under the hood.",
                },
                {
                  key: "ui",
                  quote: "Frontend is the empathy layer—make it accessible, responsive, and fast.",
                },
                {
                  key: "microservices",
                  quote: "I don’t chase microservices—I design them when the domain demands it.",
                },
                {
                  key: "ci",
                  quote: "CI/CD isn’t a luxury—it's the backbone of fearless shipping.",
                },
                {
                  key: "docker",
                  quote: "Docker removes ‘but it works on my machine’ from my vocabulary.",
                },
                {
                  key: "node",
                  quote: "Node.js helps me build fast APIs with minimal overhead.",
                },
                {
                  key: "postgres",
                  quote: "PostgreSQL: my go-to relational database when I want power and precision.",
                },
                {
                  key: "websockets",
                  quote: "Real-time apps demand WebSockets—because polling just won’t cut it.",
                },
                {
                  key: "kafka",
                  quote: "Async systems run smoother with a reliable event pipeline like Kafka.",
                },
                {
                  key: "scale",
                  quote: "Scale isn’t a goal—it's a side effect of great architecture.",
                },
                {
                  key: "testing",
                  quote: "I write tests not because I don’t trust myself—but because I respect my future self.",
                },
                {
                  key: "monitoring",
                  quote: "Observability is the difference between a stable app and a mystery box.",
                },
              ]}
              direction="left"
              speed="slow"
              pauseOnHover={true}
              className="max-w-5xl mx-auto"
            />
          </section>

          {/* About Me */}
          <section className="relative w-full overflow-hidden h-[50vh] bg-black">
            <LampContainer>
              <SparklesCore
                background="transparent"
                minSize={5}
                maxSize={1}
                particleDensity={500}
                className="w-full h-full absolute top-0 left-0 z-0"
              />
              <BackgroundBeams className="z-0" />
              <div className="relative z-10 text-center text-white py-10 px-4">
                <CardSpotlight>
                  <h2 className="text-4xl font-bold mb-4">About ME!</h2>
                  <p className="font-bold">
                    B.Tech CSE, 3rd Year @ Anurag University — Passionate about Full-Stack Development, building modern web apps, scalable backends, and seamless user experiences.
                  </p>
                </CardSpotlight>
              </div>
            </LampContainer>
          </section>

          {/* Skills Cards Section */}
          <section className="bg-black w-full py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
                Technologies I Use
              </h2>
              <HoverEffect
                items={[
                  {
                    title: "React.js",
                    description: "Building fast and dynamic UIs with hooks and component architecture.",
                    link: "#",
                  },
                  {
                    title: "Node.js",
                    description: "Creating scalable and high-performance backend APIs and services.",
                    link: "#",
                  },
                  {
                    title: "TypeScript",
                    description: "Typing the future of JavaScript for safer and scalable apps.",
                    link: "#",
                  },
                  {
                    title: "PostgreSQL",
                    description: "Robust relational databases for production-grade data handling.",
                    link: "#",
                  },
                  {
                    title: "MongoDB",
                    description: "Flexible NoSQL solutions for fast and dynamic schema models.",
                    link: "#",
                  },
                  {
                    title: "Docker",
                    description: "Isolated, portable development environments using containers.",
                    link: "#",
                  },
                  {
                    title: "Next.js",
                    description: "Production-grade React with SSR, routing, and performance optimizations.",
                    link: "#",
                  },
                  {
                    title: "Kafka",
                    description: "Real-time event streaming for high-throughput architectures.",
                    link: "#",
                  },
                  {
                    title: "redis",
                    description: "In Memory Database",
                    link: "#",
                  },
                  {
                    title: "rabbit-mq",
                    description: "Async Messaging queue",
                    link: "#",
                  },

                ]}
              />
            </div>
          </section>

          {/* Timeline Section */}
          <section className="bg-black text-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                My Developer Journey
              </h2>
              <Timeline data={journeyData} />
            </div>
          </section>

          {/* Hero Highlight + Typewriter */}
          <section className="h-[10vh]">
            <HeroHighlight
              title="Welcome to My Portfolio"
              description="Explore my projects, skills, and experience."
              highlight="React Developer"
            >
              <div className="mt-6 text-xl font-mono">
                <TypewriterEffect
                  words={[
                    { text: "Crafting Seamless User Experiences." },
                    { text: "Engineering Scalable Backend Systems." },
                    { text: "Building Full-Stack Web Apps That Actually Deliver." },
                    { text: "Turning Ideas into High-Performance Products." },
                  ]}
                />

              </div>
            </HeroHighlight>
          </section>


          <section>
            <section className="py-20 px-4 bg-black text-white">
              <div className="max-w-7xl mx-auto">
                {/* Hero Text */}
                <HeroHighlight
                  title="Welcome to My Portfolio"
                  description="Explore glowing components in action"
                  highlight="UI Magic"
                />

                {/* Headline */}
                <div className="text-center mt-16 mb-12">
                  <h2 className="text-3xl sm:text-4xl mb-4 font-extrabold">
                    My Projects
                  </h2>
                  <p className="text-gray-400 text-base sm:text-lg font-bold">
                    Have a look at what I have built!!
                  </p>
                </div>

                {/* Glowing Grid Cards */}
                <GlowingEffectDemoSecond />
              </div>
            </section>

          </section>

          <section>
            <FeaturesSectionDemo />
          </section>

          {/* Hobbies section */}
          <section className="relative py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Upcoming Projects
              </h2>
              <p className="mt-2 text-gray-400 text-base sm:text-lg">
                A glimpse into what I'm building next — stay tuned!
              </p>
            </div>

            <DraggableCardDemo />
          </section>

          {/* <section>
            <WobbleCardDemo />
          </section> */}
          <section className="mt-10">
            <BackgroundBeamsWithCollision>
              <BackgroundLinesDemo />
            </BackgroundBeamsWithCollision>

          </section>
        </div>
      </TracingBeam>

      <section>
        <BackgroundBoxesDemo />
      </section>

    </>
  );
}

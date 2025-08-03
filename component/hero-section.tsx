"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".line", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-white px-8">
        <p className="intro max-w-4xl text-[2.1rem] md:text-[2.8rem] leading-snug font-serif text-black">
          <span className="inline-block text-5xl -rotate-12 mr-2">⚡</span>
          <span>
            Dipesh is a frontend/design engineer from Jharkhand, currently
            settled in <span className="text-4xl">❤️</span>
            -ly remote, working <span className="italic">@</span>{" "}
            <span className="font-display text-black text-[2.2rem]">
              Portdex
            </span>{" "}
            as founding engineer. Previously, he was building health-tech &
            fintech apps at{" "}
            <span className="font-display text-[2.2rem]">Emids</span>,{" "}
            <span className="italic">and freelancing in between</span>{" "}
            <span className="text-3xl inline-block">✨</span>.{" "}
            <span className="text-3xl inline-block -rotate-6">✌️</span>{" "}
            <span className="underline decoration-2 underline-offset-4">
              Sidegigs
            </span>
            : he built agent marketplaces, wallets, and ecomm systems powered by{" "}
            <span className="font-sans font-bold">React</span>,{" "}
            <span className="font-sans font-bold">Tailwind</span>, and{" "}
            <span className="font-sans font-bold">AWS</span>. Sometimes he
            designs in <span className="font-sans font-bold">Figma</span>, or
            jams with <span className="font-sans font-bold">n8n</span> and{" "}
            <span className="font-sans font-bold">Docker</span>. Currently
            exploring <span className="text-3xl inline-block">✨</span> tiny AI
            tools, open source, and frontend fun that might (or might not) crash
            the browser.
          </span>
        </p>
      </section>{" "}
    </div>
  );
};

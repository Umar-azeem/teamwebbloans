"use client";

import React, { useState } from "react";

const BUBBLES = [
  {
    id: "sportwear",
    name: "SPORTWEAR",
    size: 92,
    bg: "#c7cdd3",
    text: "#1a2530",
    fontSize: 10,
    position: { top: "25%", left: "30%" },
    radius: 80,
    duration: 8,
    delay: "-2s",
  },
  {
    id: "kindflow",
    name: "KINDFLOW",
    size: 132,
    bg: "#e7e5df",
    text: "#1a2530",
    fontSize: 14,
    position: { top: "42%", left: "20%" },
    radius: 100,
    duration: 11,
    delay: "-5s",
  },
  {
    id: "sportlife-sm",
    name: "Sportlife",
    size: 76,
    bg: "#9aa4ac",
    text: "#141b22",
    fontSize: 11,
    italic: true,
    position: { top: "22%", left: "44%" },
    radius: 65,
    duration: 7,
    delay: "-1s",
  },
  {
    id: "strvda",
    name: "strvda",
    size: 76,
    bg: "#c3c9cd",
    text: "#1a2530",
    fontSize: 13,
    italic: true,
    position: { top: "22%", left: "58%" },
    radius: 70,
    duration: 9,
    delay: "-4s",
  },
  {
    id: "erone",
    name: "erone",
    size: 100,
    bg: "#eceae3",
    text: "#141b22",
    fontSize: 16,
    italic: true,
    position: { top: "27%", left: "70%" },
    radius: 85,
    duration: 8,
    delay: "-3s",
  },
  {
    id: "soundflow",
    name: "Soundflow",
    size: 68,
    bg: "#b7bfc5",
    text: "#141b22",
    fontSize: 9,
    position: { top: "45%", left: "84%" },
    radius: 55,
    duration: 10,
    delay: "-6s",
  },
  {
    id: "dexin",
    name: "Dexin",
    size: 190,
    bg: "#fbfbf9",
    text: "#12181f",
    fontSize: 34,
    position: { top: "45%", left: "27%" },
    radius: 120,
    duration: 14,
    delay: "-8s",
  },
  {
    id: "sportlife-lg",
    name: "Sportlife",
    size: 210,
    bg: "#fbfbf9",
    text: "#12181f",
    fontSize: 30,
    italic: true,
    position: { top: "50%", left: "56%" },
    radius: 130,
    duration: 15,
    delay: "-3s",
  },
  {
    id: "vorix",
    name: "VORIX",
    size: 168,
    bg: "#ffffff",
    text: "#0d1319",
    fontSize: 26,
    position: { top: "43%", left: "73%" },
    radius: 105,
    duration: 12,
    delay: "-6s",
  },
  {
    id: "sportive",
    name: "Sportive",
    size: 60,
    bg: "#aeb6bc",
    text: "#141b22",
    fontSize: 9,
    position: { top: "64%", left: "70%" },
    radius: 50,
    duration: 9,
    delay: "-2s",
  },
];

export default function PartnersLogoCloud() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative flex min-h-[650px] w-full flex-col items-center justify-center overflow-hidden bg-[#062235] px-4 py-20">

      {/* Animation */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counterOrbit {
          from {
            transform: translateX(var(--radius))
              rotate(0deg);
          }

          to {
            transform: translateX(var(--radius))
              rotate(-360deg);
          }
        }

        .orbit {
          animation: orbit var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        .orbit.paused {
          animation-play-state: paused;
        }

        .orbit-item {
          animation: counterOrbit var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        .orbit-item.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Title */}
      <h2 className="relative z-50 mb-10 text-sm font-bold uppercase tracking-[0.25em] text-white md:text-base">
        Our Partners
      </h2>

      {/* Cloud */}
      <div className="relative mx-auto h-[470px] w-full max-w-[1000px]">

        {BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute"
            style={{
              top: bubble.position.top,
              left: bubble.position.left,
              width: 0,
              height: 0,
            }}
          >

            {/* ORBIT */}
            <div
              className={`orbit absolute left-0 top-0 ${
                paused ? "paused" : ""
              }`}
              style={{
                "--radius": `${bubble.radius}px`,
                "--duration": `${bubble.duration}s`,
                "--delay": bubble.delay,
              }}
            >

              {/* Bubble */}
              <div
                className={`orbit-item flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${
                  paused ? "paused" : ""
                }`}
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  backgroundColor: bubble.bg,
                  color: bubble.text,
                  fontSize: bubble.fontSize,
                  fontWeight: 700,
                  fontStyle: bubble.italic
                    ? "italic"
                    : "normal",
                  "--radius": `${bubble.radius}px`,
                  "--duration": `${bubble.duration}s`,
                  "--delay": bubble.delay,
                  marginLeft: `-${bubble.size / 2}px`,
                  marginTop: `-${bubble.size / 2}px`,
                }}
              >
                <span className="whitespace-nowrap">
                  {bubble.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="relative z-50 mt-8 flex h-12 w-[220px] items-center justify-between rounded-full border border-white/10 bg-black/40 px-2 backdrop-blur-md">

        <div className="flex items-center gap-1">

          <button
            onClick={() => setPaused(false)}
            className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition ${
              !paused
                ? "bg-white text-black"
                : "text-white/50"
            }`}
          >
            Marquee
          </button>

          <button
            onClick={() => setPaused(true)}
            className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition ${
              paused
                ? "bg-white text-black"
                : "text-white/50"
            }`}
          >
            Flat
          </button>

        </div>

        {/* Switch */}
        <button
          onClick={() => setPaused(!paused)}
          className={`relative h-[18px] w-[34px] rounded-full transition ${
            paused
              ? "bg-white/20"
              : "bg-white/40"
          }`}
        >
          <span
            className={`absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white transition-transform ${
              paused
                ? "translate-x-[16px]"
                : "translate-x-0"
            }`}
          />
        </button>

      </div>
    </section>
  );
}
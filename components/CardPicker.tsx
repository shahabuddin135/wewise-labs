"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const cardTexts = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
const cardColors = [
  "#F3F4F6", // light gray
  "#E5E7EB", // slightly darker gray
  "#D1D5DB", // medium gray
  "#F9FAFB", // almost white
  "#E0E0E0", // soft gray
  "#F5F5F5", // very light gray
];

export default function CardPicker() {
  const pickerRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement[]>([]);
  const proxyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const picker = pickerRef.current;
    const proxy = document.createElement("div");
    proxyRef.current = proxy;

    const cellWidth = 250;
    const rotationX = -45;
    const numCells = cardTexts.length;
    const cellStep = 1 / numCells;
    const wrapWidth = (cellWidth / 2) * numCells;
    const wrapProgress = gsap.utils.wrap(0, 1);

    gsap.set(picker, {
      width: wrapWidth,
    });

    const baseTl = gsap.timeline({ paused: true });

    cellsRef.current.forEach((cell, i) => {
      gsap.set(cell, {
        width: cellWidth,
        height: 300,
        scale: 0.6,
        opacity: 0.8,
        zIndex: 0,
        x: -cellWidth,
        rotation: rotationX,
        boxShadow: "0 8px 40px rgba(0,0,0,0)",
      });

      const tl = gsap.timeline({ repeat: 1 })
        .to(cell, {
          duration: 1,
          x: `+=${wrapWidth}`,
          rotation: -rotationX,
        }, 0)
        .to(cell, {
          duration: cellStep,
          boxShadow: "0 8px 40px rgba(0,0,0,.2)",
          scale: 1,
          opacity: 1,
          repeat: 1,
          zIndex: 100,
          yoyo: true,
        }, 0.5 - cellStep);

      baseTl.add(tl, i * -cellStep);
    });

    const animation = gsap.timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 2));

    Draggable.create(proxy, {
      type: "x",
      trigger: picker,
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: (x) => Math.round(x / cellWidth) * cellWidth,
      },
    });

    function updateProgress(this: any) {
      animation.progress(wrapProgress(this.x / wrapWidth));
    }

    animation.progress(1).pause();

    return () => {
      gsap.killTweensOf(cellsRef.current);
      gsap.killTweensOf(proxy);
    };
  }, []);

  return (
    <div
      ref={pickerRef}
      className="relative overflow-hidden w-full max-w-4xl h-[350px] bg-white mx-auto"
    >
      {cardTexts.map((text, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cellsRef.current[index] = el;
          }}
          style={{ backgroundColor: cardColors[index % cardColors.length] }}
          className="absolute flex items-center justify-center border border-black text-black font-semibold"
        >
          <div className="text-xl">{text}</div>
        </div>
      ))}
    </div>
  );
}

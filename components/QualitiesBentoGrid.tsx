"use client";
import React from "react";

const qualities = [
  {
    title: "Collaborative Spirit",
    subtitle: "The Wewise.",
    image: "/pattern-randomized.png",
    span: "col-span-2",
  },
  {
    title: "Passion",
    isButton: true,
  },
  {
    title: " Growth-Focused",
    subtitle: "We engineer growth, not just software.",
    bgColor: "bg-[#e9decf]",
  },
  {
    title: "Strategic Minds",
    subtitle: "Know More About Your Destiny?",
    image: "/hex-hero.jpg", 
    span: "col-span-2",
    textClass: "text-white text-3xl md:text-5xl", // Add this line
    subtitleClass: "text-white text-lg md:text-2xl", // Optional: for subtitle
  },
  {
    title: "Agile Execution",
    subtitle:"We move fast, learn faster.",
    image: "/hexagon-bg.jpg",
  },
  {
    title: "Visual Consistency",
    subtitle: "",
    bgColor: "bg-[#3b3d33] text-white",
  },
  {
    title: "Scalable Systems",
    subtitle: "",
    image: "/pattern-randomized.png",
  },
];

const QualitiesBentoGrid = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-16 ">
      The name says it all.<br/>
          We believe in working together closely, collaboratively, and wisely.<br/>
          From our clients to our team, we thrive on shared growth, smart problem-solving, and building tech that's not just great... but grounded, scalable, and forward-thinking.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {qualities.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl flex items-center justify-center p-4 ${
              item.bgColor ?? "bg-white"
            } ${item.span ?? ""}`}
          >
            {item.isButton ? (
              <button className="bg-black text-white px-4 py-2 rounded-md hover:scale-105 transition">
                {item.title}
              </button>
            ) : item.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ) : null}

            <div className="relative z-10 text-center">
              {item.subtitle && (
                <p className={`text-sm uppercase tracking-wide opacity-80 ${item.subtitleClass ?? ""}`}>
                  {item.subtitle}
                </p>
              )}
              <h3 className={`text-xl font-semibold ${item.textClass ?? ""}`}>{item.title}</h3>
            </div>

            <div className="absolute inset-0 bg-black/20 z-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualitiesBentoGrid;

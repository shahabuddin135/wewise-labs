"use client";
import React from "react";

const qualities = [
  {
    title: "Where Design Meets Dev, and SaaS Takes Off.",
    // subtitle: "Where Design Meets Dev, and SaaS Takes Off.",
    image: "/pattern-randomized.png",
    span: "col-span-2",
  },
  {
    title: "Passion",
    isButton: true,
    bgColor : "bg-[#9cc4eb]"
  },
  {
    title: "Dev Done Right.",
    // subtitle: "Where Design Meets Dev, and SaaS Takes Off.",
    bgColor: "bg-[#e9decf]",
    textClass:"text-2xl"
  },
  {
    title: "Build to go viral, without the bugs",
    // subtitle: "Know More About Your Destiny?",
    image: "/gray-hexagon.jpg", 
    span: "col-span-2",
    textClass: "text-white text-3xl md:text-5xl", // Add this line
    subtitleClass: "text-white text-lg md:text-2xl",
    opacity:"0.2" // Optional: for subtitle
  },
  {
    title: "Agile Execution",
    // subtitle:"We move fast, learn faster.",
    image: "/hexagon-bg.jpg",
    textClass:"text-2xl"

  },
  {
    title: "Visual Consistency",
    // subtitle:"Pixels with Purpose. Code with Clarity.",
    bgColor: "bg-[#867096]  ",
    textClass:"text-2xl"

  },
  {
    title: "Scalable Systems",
    // subtitle: "Speed. Scale. Success.",
    image: "/pattern-randomized.png",
    textClass:"text-2xl",
    span: "col-span-2",
  },
];

const QualitiesBentoGrid = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* <h2 className="text-2xl md:text-4xl font-bold mb-16  ">
      The name says it all.<br/>
          We believe in working together closely, collaboratively, and wisely.<br/>
          From our clients to our team, we thrive on shared growth, smart problem-solving, and building tech that's not just great... but grounded, scalable, and forward-thinking.
      </h2> */}
<h2 className="font-bold text-5xl md:text-[5rem] lg:text-[6rem] mb-10 mt-4 dark:text-white text-center font-libre">How Creative We Are?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {qualities.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl flex items-center justify-center p-4 ${
              item.bgColor ?? "bg-white"
            } ${item.span ?? ""}`}
          >
            {item.isButton ? (
              <button className="bg-black text-white text-3xl px-4 py-2 rounded-md hover:scale-105 transition">
                {item.title}
              </button>
            ) : item.image ? (
              <div
                className="absolute  inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ) : null}

            <div className="relative z-10 text-3xl text-center">
              {/* {item.subtitle && (
                <p className={`text-[16px] uppercase tracking-wide opacity-80  `}>
                  {item.subtitle}
                </p>
              )} */}
              <h3 className={`text-3xl font-semibold text-black`}>{item.title}</h3>
            </div>

            <div className="absolute inset-0 bg-black/15 dark:bg-black/20 z-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualitiesBentoGrid;

"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "../components/magicui/marquee";
import Image from "next/image";

const technologies = [

  { name: "React", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588119/React_lodt0m.png" },
  { name: "Next.js", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588118/Next.js_z3ieoi.png" },
  { name: "TypeScript",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750587961/TypeScript_r5sko9.png" },
  { name: "Node.js",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588337/Node.js_ywdifv.png" },
  { name: "Tailwind CSS",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750587294/Tailwind_CSS_mwhtss.png" },
  { name: "MongoDB", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588457/MongoDB_opnxo1.png" },
  { name: "PostgreSQL", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588604/PostgresSQL_qxcnfi.png" },
  { name: "MySQL",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588812/MySQL_ufptle.png" },
  { name: "UI/UX", icon: "" },
  { name: "Prisma",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750589779/icons8-prisma-orm-512_tghv2m.png" },
  { name: "Sanity", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588811/Sanity_cbzvvb.png" },
  // { name: "Express", icon: "" },
  // { name: "Clerk",  icon: "" },
  { name: "Firebase", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588809/Firebase_tsfwhc.png" },
  { name: "Python",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1750588807/Python_o0yuki.png" },
  { name: "Chatbot development", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749754807/chatbot_wmenlo.png" },
  { name: "AI Agent development", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749754807/agent_ygyuin.png" },
  {name:"FastApi", icon:"https://res.cloudinary.com/dqkt0g0he/image/upload/v1750589213/FastAPI_lmry1z.png"},
  {name:"Streamlit", icon:"https://res.cloudinary.com/dqkt0g0he/image/upload/v1750589207/Streamlit_om9dee.png"},
  {name:"Redux", icon:"https://res.cloudinary.com/dqkt0g0he/image/upload/v1750589206/Redux_cpct0q.png"}

]

export function Technologies() {
  return(
    <section className="py-10 px-4 md:px-8 bg-gray-50/70 w-full items-center mx-auto">
      <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4">Our Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
            We use cutting-edge technologies to build modern, scalable, and high-performance applications.
          </p>

          </div>
          <div>
        <MarqueeDemoVertical />
          </div>
          </section>
  )
}

// const TechnologyCard: React.FC<{
//   icon: string;
// }> = ({
//   icon
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative h-[80px] sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-2 flex flex-col items-center justify-center text-center",
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <Image src={icon} alt={icon} width={50} height={50} className="mb-2 object-cover" />
//       {/* <p className="text-sm font-medium dark:text-white">{name}</p> */}
// </div>
//   );
// };
const TechnologyCard: React.FC<{
  icon: string;
}> = ({
  icon
}) => {
    return (
          <div
            className={cn(
              "relative h-[90px] sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-2 flex flex-col items-center justify-center text-center",
              "border-gray-950/[.4] bg-gray-50/80 hover:bg-gray-950/[.08]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
          >
            <Image src={icon} alt={icon} width={60} height={60} className="m-4 object-cover" />
            {/* <p className="text-sm font-medium dark:text-white">{name}</p> */}
          </div> 
    );
  };

export function MarqueeDemoVertical() {
  const total = technologies.length;
  const perColumn = Math.ceil(total / 3);

  const firstColumn = technologies.slice(0, perColumn);
  const secondColumn = technologies.slice(perColumn, perColumn * 2);
  const thirdColumn = technologies.slice(perColumn * 2, total);

  console.log("first",firstColumn)
  console.log("second",secondColumn)
  console.log("third", thirdColumn)

  return (
    <div
      className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden gap:4 md:gap-20 rounded-sm "
      style={{
        background: "radial-gradient(circle,rgba(168, 225, 247, 1) 22%, rgba(162, 232, 195, 1) 59%, rgba(242, 236, 179, 1) 90%)"
      }}
    >
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstColumn.map((tech) => (
          <TechnologyCard key={tech.icon} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondColumn.map((tech) => (
          <TechnologyCard key={tech.icon} {...tech} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {thirdColumn.map((tech) => (
          <TechnologyCard key={tech.icon} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
    </div>
  );
}


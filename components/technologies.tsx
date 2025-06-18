"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "../components/magicui/marquee";
import Image from "next/image";

const technologies = [

  { name: "React", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/react_i9fxfq.png" },
  { name: "Next.js", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/e_background_removal/f_png/v1749981782/next-js-icon_j2iy7t.png" },
  { name: "TypeScript",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749980923/Bold_Monogram_in_Black_and_White_hpyth8.png" },
  { name: "Node.js",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/Nodejs_fw9sf3.png" },
  { name: "Tailwind CSS",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749253/tailwind_fclik0.png" },
  { name: "MongoDB", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/mongo_lrirdi.png" },
  { name: "PostgreSQL", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/postgresql_pfyyxz.png" },
  { name: "MySQL",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749252/sql_t1dvgu.png" },
  { name: "UI/UX", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749981064/pngwing.com_7_lmiwyx.png" },
  { name: "Prisma",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749750077/pngwing.com_6_uzfjro.png" },
  { name: "Sanity", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/sanity_tgulgp.png" },
  { name: "Express", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749252/express_tmyzqt.png" },
  { name: "Clerk",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/clerk_u99cgo.png" },
  { name: "Firebase", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/firebase_javqen.png" },
  { name: "Python",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749981302/ChatGPT_Image_Jun_15_2025_02_54_20_PM_dcftdj.png" },
  { name: "Chatbot development", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749754807/chatbot_wmenlo.png" },
  { name: "AI Agent development", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749754807/agent_ygyuin.png" },

]

export function Technologies() {
  return(
    <section className="py-10 px-4 md:px-8 bg-gray-50 w-full items-center mx-auto">
      <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4">Our Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
            We use cutting-edge technologies to build modern, scalable, and high-performance applications.
          </p>

          </div>
          <div>
        <MarqueeDemoVertical/>
          </div>
          </section>
  )
}

const TechnologyCard: React.FC<{
  icon: string;
}> = ({
  icon
}) => {
  return (
    <div
      className={cn(
        "relative h-[80px] sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-2 flex flex-col items-center justify-center text-center",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image src={icon} alt={icon} width={50} height={50} className="mb-2 object-cover" />
      {/* <p className="text-sm font-medium dark:text-white">{name}</p> */}
</div>
  );
};

export function MarqueeDemoVertical() {
  const firstColumn = technologies.slice(0, Math.ceil(technologies.length / 3));
  const secondColumn = technologies.slice(Math.ceil(technologies.length / 3));
  const thirdColumn = technologies.slice(0, Math.ceil(technologies.length / 3));

  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden gap-4">
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}


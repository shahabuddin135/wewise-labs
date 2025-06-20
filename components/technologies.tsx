"use client"

import { IconCloudDemo } from "./icon-cloud";

const technologies = [

  { name: "React", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/react_i9fxfq.png" },
  { name: "Next.js", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/nextjs_qyiojg.png" },
  { name: "TypeScript",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749254/typescript_kunqzl.png" },
  { name: "Node.js",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/Nodejs_fw9sf3.png" },
  { name: "Tailwind CSS",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749253/tailwind_fclik0.png" },
  { name: "MongoDB", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/mongo_lrirdi.png" },
  { name: "PostgreSQL", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/postgresql_pfyyxz.png" },
  { name: "MySQL",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749252/sql_t1dvgu.png" },
  { name: "UI/UX", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749254/ui-ux_lyyhie.png" },
  { name: "Prisma",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749750077/pngwing.com_6_uzfjro.png" },
  { name: "Sanity", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/sanity_tgulgp.png" },
  { name: "Express", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749252/express_tmyzqt.png" },
  { name: "Clerk",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749250/clerk_u99cgo.png" },
  { name: "Firebase", icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/firebase_javqen.png" },
  { name: "Python",  icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749251/python_d9dgyi.png" },
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
      
       <div className=" w-[800px] mx-auto">
          <IconCloudDemo />
        </div>
    </section>
  )
}

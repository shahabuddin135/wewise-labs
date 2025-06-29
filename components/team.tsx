// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Link from "next/link"
// import Image from "next/image"
// import { useTheme } from "next-themes"
// import BgGlowBouncingSVGs from "./ui/bg-glow"

// const team = [
//   {
//     name: "Darakhshan Imran",
//     role: "Founder & Full Stack Developer",
//     bio: "Leads the team and builds complete web solutions from front to back.",
//     linkedin:"https://www.linkedin.com/in/darakhshan-imran-5b9727297/",
//     github:"https://github.com/Darakhshan-Imran"
//   },
//   {
//     name: "Shahabuddin",
//     role: "Co-founder & Project Manager",
//     bio: "Full stack developer, coo coo moo, Product designer, Project manager",
//     linkedin:"https://www.linkedin.com/in/shahab-uddin-368086300/",
//     github:"https://github.com/shahabuddin135"
//   },
//   {
//     name: "Abeera Umair",
//     role: "Co-founder & Frontend Developer",
//     bio: "Designs and develops user-friendly interfaces for web apps.",
//     linkedin:"https://www.linkedin.com/in/abeera-u-4377a8296/",
//     github:"https://github.com/AbeeraUmair"
//   },
//   {
//     name: "Saba Sarfaraz",
//     role: "Co-founder & Backend Developer",
//     bio: "Builds and maintains server-side logic and database systems.",
//     linkedin:"https://www.linkedin.com/in/saba-sarfaraz-5abbb4232/",
//     github:"https://github.com/sarfarazsaba11"
//   },
// ]

// export function Team() {
//   const { theme, setTheme } = useTheme();
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <div className="relative isolate">
//       <BgGlowBouncingSVGs className="absolute inset-0 w-full h-full z-0" />
//       <section id="team" className="relative z-10 py-24 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <h2 className="text-3xl text-center md:text-5xl font-heading font-bold mb-4 text-black dark:text-white">
//               Our Team
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto mb-4 font-body font-semibold text-center">
//               Meet the talented individuals who make Wewise Labs a leader in Web development and SaaS solutions.
//             </p>
//           </motion.div>

//           <motion.div
//             ref={ref}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.1,
//                 },
//               },
//             }}
//           >
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//                 }}
//                 whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
//                 className="rounded-xl p-6 bg-white/5 backdrop-blur-sm border border-gray/10 shadow-xl transition-all duration-300 hover:bg-white/10 group"
//               >
//                 <div className="flex flex-col items-center"> 
//                   <h3 className="text-xl font-bold mb-1 font-heading text-black dark:text-white">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-center mb-2 font-medium text-gray-400">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-500 mb-4 text-center text-sm">
//                     {member.bio}
//                   </p>
//                   <div className="flex space-x-3 mt-2">
//                     <Link href={member.linkedin} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
//                       <Image height={20} width={20} src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749249/linkedIn_qwcwfs.png" alt="linked-in icon" className="h-5 w-5 filter invert text-black"/>
//                     </Link>
//                     <Link href={member.github} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
//                       <Image height={20} width={20} src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1749749248/github_nqa1zy.png" alt="github-icon" className="h-5 w-5 filter invert text-black"/>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import BgGlowBouncingSVGs from "./ui/bg-glow"

const team = [
  {
    name: "Darakhshan Imran",
    role: "Founder & Full Stack Developer",
    bio: "Leads the team and builds complete web solutions from front to back.",
    linkedin:"https://www.linkedin.com/in/darakhshan-imran-5b9727297/",
    github:"https://github.com/Darakhshan-Imran"
  },
  {
    name: "Shahabuddin",
    role: "Co-founder & Project Manager",
    bio: "Full stack developer, coo coo moo, Product designer, Project manager",
    linkedin:"https://www.linkedin.com/in/shahab-uddin-368086300/",
    github:"https://github.com/shahabuddin135"
  },
  {
    name: "Abeera Umair",
    role: "Co-founder & Frontend Developer",
    bio: "Designs and develops user-friendly interfaces for web apps.",
    linkedin:"https://www.linkedin.com/in/abeera-u-4377a8296/",
    github:"https://github.com/AbeeraUmair"
  },
  {
    name: "Saba Sarfaraz",
    role: "Co-founder & Backend Developer",
    bio: "Builds and maintains server-side logic and database systems.",
    linkedin:"https://www.linkedin.com/in/saba-sarfaraz-5abbb4232/",
    github:"https://github.com/sarfarazsaba11"
  },
]

export function Team() {
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="team" className="relative isolate py-24 px-4 md:px-8 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white dark:text-white">
            Our Team
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-4 font-body font-semibold">
            Meet the talented individuals who make Wewise Labs a leader in Web development and SaaS solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
              className="rounded-xl bg-blur-sm overflow-hidden p-6 bg-white/5 backdrop-blur-sm border border-gray/10 shadow-xl transition-all duration-300 hover:bg-white/10 group"
            >
              
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-1 font-heading text-white dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-center mb-2 font-medium text-white">
                  {member.role}
                </p>
                <p className="text-white mb-4 text-center text-sm">
                  {member.bio}
                </p>
                <div className="flex space-x-3 mt-2">
  <Link
    href={member.linkedin}
    target="_blank"
    className="opacity-60 hover:opacity-100 transition-opacity"
  >
    <svg
      fill="#ffffff"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg>
  </Link>
  <Link
    href={member.github}
    target="_blank"
    className="opacity-60 hover:opacity-100 transition-opacity"
  >
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-6 h-6"
    >
      <path
        fill="#ffffff"
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
      />
    </svg>
  </Link>
</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
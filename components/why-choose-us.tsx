import { AnimatedTestimonials } from "./animated-choose-cards";

const reasons = [
  {
    icon:"https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489311/ChatGPT_Image_Jul_2_2025_11_22_18_PM_w4mir7.png",
    title: "Perfectionists at Heart",
    description: "We don't just test, we obsess. Every feature is poked, prodded, and polished until it's flawless, so you get software that simply works, every time.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489309/ChatGPT_Image_Jul_2_2025_11_22_16_PM_rlmxbp.png",
    title: "Guardians of Your Code",
    description: "Your peace of mind is our priority. We weave security into every line of code, so your data stays safe and your users stay happy.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489292/ChatGPT_Image_Jul_2_2025_11_22_26_PM_gyhuty.png",
    title: "Speed You Can Feel",
    description: "Speed isn't just a feature, it's a feeling. We fine tune every detail to make your app lightning fast and buttery smooth, no matter the load.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751490329/ChatGPT_Image_Jul_3_2025_02_04_56_AM_vixqjk.png",
    title: "Partners in Progress",
    description: "We're not just developers, we're your partners. Expect open communication, shared ideas, and a journey where your vision leads the way.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489326/ChatGPT_Image_Jul_2_2025_11_22_40_PM_uj28yc.png",
    title: "Promises Kept, Every Time",
    description: "Deadlines aren't just dates on a calendar to us, they're promises. We deliver on time, every time, so you can launch with confidence.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489331/ChatGPT_Image_Jul_3_2025_01_31_09_AM_np1qph.png",
    title: "Wisdom That Works for You",
    description: "Our team's experience runs deep and wide. We bring real world know how from across industries, turning challenges into opportunities for you.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white dark:bg-black pt-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] text-center font-heading font-bold dark:text-white mb-10 mt-4">
          Why WeWise? <br/> <span className="text-3xl md:text-[2rem] lg:text-[3rem] mb-8 mt-4 dark:text-white">Because We Don&apos;t Miss</span> 
        </h2>
        <p className="w-[90%] text-lg md:text-[1.3rem] lg:text-[1.5rem] leading-8 font-body font-semibold text-gray-600 dark:text-white max-w-2xl mx-auto">
          We&apos;re not here for quick wins, we&apos;re here for the long haul. That&apos;s why our clients don&apos;t just choose us; they grow with us.
        </p>
      </div>
      <div className="mt-3">
        <AnimatedTestimonials reasons={reasons} autoplay={true} />
      </div>
    </section>
  );
}
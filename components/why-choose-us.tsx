import { AnimatedTestimonials } from "./animated-choose-cards";

const reasons = [
  {
    icon:"https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489311/ChatGPT_Image_Jul_2_2025_11_22_18_PM_w4mir7.png",
    title: "Quality Assurance",
    description: "We follow rigorous testing and quality assurance processes to deliver bug-free applications.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489309/ChatGPT_Image_Jul_2_2025_11_22_16_PM_rlmxbp.png",
    title: "Secure Development",
    description: "Security is built into our development process from the ground up.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489292/ChatGPT_Image_Jul_2_2025_11_22_26_PM_gyhuty.png",
    title: "Performance Focused",
    description: "We optimize every aspect of your application for maximum speed and efficiency.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751490329/ChatGPT_Image_Jul_3_2025_02_04_56_AM_vixqjk.png",
    title: "Collaborative Approach",
    description: "We work closely with you throughout the development process.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489326/ChatGPT_Image_Jul_2_2025_11_22_40_PM_uj28yc.png",
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751489331/ChatGPT_Image_Jul_3_2025_01_31_09_AM_np1qph.png",
    title: "Industry Expertise",
    description: "Our team brings years of experience across various industries.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-black py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-center md:text-5xl font-heading font-bold dark:text-white mb-6">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4 font-body font-semibold text-center dark:text-white">
          We combine technical expertise with a deep understanding of business needs to deliver exceptional results.
        </p>
      </div>
      <div className="">
        <AnimatedTestimonials reasons={reasons} autoplay={true} />
      </div>
    </section>
  );
}
import { AnimatedTestimonials } from "./animated-testimonials";
import { CheckCircle, Shield, Zap, Users, Clock, Award } from "lucide-react";
import time from "../public/icons/time-removebg-preview.png";

const reasons = [
  {
    icon:"https://res.cloudinary.com/dqkt0g0he/image/upload/v1751275355/WhatsApp_Image_2025-06-30_at_14.06.06_7701946e_xh4mnm.jpg",
    title: "Quality Assurance",
    description: "We follow rigorous testing and quality assurance processes to deliver bug-free applications.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751275364/WhatsApp_Image_2025-06-30_at_13.39.54_87c62b8a_vdjq5f.jpg",
    title: "Secure Development",
    description: "Security is built into our development process from the ground up.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751277613/WhatsApp_Image_2025-06-30_at_14.59.51_da5cf479_i2we1y.jpg",
    title: "Performance Focused",
    description: "We optimize every aspect of your application for maximum speed and efficiency.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751276647/WhatsApp_Image_2025-06-30_at_14.29.41_f4a8a66d_vl9o0b.jpg",
    title: "Collaborative Approach",
    description: "We work closely with you throughout the development process.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751275457/WhatsApp_Image_2025-06-30_at_13.21.41_c2de7c88_gatkdv.jpg",
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: "https://res.cloudinary.com/dqkt0g0he/image/upload/v1751276853/WhatsApp_Image_2025-06-30_at_14.47.18_ec1e74bb_iqnscw.jpg",
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
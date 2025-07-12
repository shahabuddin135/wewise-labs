"use client";

import Image from "next/image";
import { HeroHighlight } from "../ui/hero-highlight";

export default function DarkContent() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* <AboutHero/> */}
      <section className="w-full">
        <div className="flex min-h-screen max-w-2xl md:max-w-4xl lg:max-w-7xl mt-4 sm:mt-6 md:mt-9 mx-4 sm:mx-6 md:mx-8 lg:mx-auto items-center justify-center overflow-hidden px-4">
          <p className="mx-auto w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[1.25] font-libre font-bold text-black">
            Curiosity brought you to know About Us
          </p>
        </div>
      </section>

      {/* <WhatWeDo/> */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-4 sm:mt-6 md:mt-9 mx-4 sm:mx-6 md:mx-8 lg:mx-auto gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:justify-between">
          <div className="flex justify-center items-center w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722526/How_we_work-light_x6zdgu.png"
              alt="why-us-dark"
              width={300}
              height={300}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] object-contain"
            />
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center lg:items-start p-4 sm:p-6 md:p-8 lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-black">
              What Do We Do?
            </h1>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl max-w-xl text-black">
              WeWise Labs is a SaaS & Web development expert.
            </p>
          </div>
        </div>
      </section>

      {/* <Mission/> */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-4 sm:mt-6 md:mt-9 mx-4 sm:mx-6 md:mx-8 lg:mx-auto bg-gray-950 rounded-xl lg:rounded-2xl gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:justify-between">
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center lg:items-start p-4 sm:p-6 md:p-8 lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-white">
              Our Good Mission
            </h1>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl text-white">
            WeWise Lab&apos;s mission is to build products that work with AI & are
            affordable.
            </p>
          </div>
          <div className="flex justify-center items-center p-4 sm:p-6 md:p-8 w-full lg:w-1/2 order-1 lg:order-2">
            <Image
              src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722522/Leadership_dark_ccikp6.png"
              alt="why-us"
              width={300}
              height={300}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* <FoundingMembers/> */}
      <section id="team" className="w-full">
        <div className="flex flex-col lg:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-4 sm:mt-6 md:mt-9 mx-4 sm:mx-6 md:mx-8 lg:mx-auto gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:justify-between">
          <div className="flex justify-center items-center p-4 sm:p-6 md:p-8 w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722521/Team-light_goxqzj.png"
              alt="why-us"
              width={300}
              height={300}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] object-contain"
            />
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center lg:items-start p-4 sm:p-6 md:p-8 w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-black">
              Founding Members
            </h1>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl max-w-xl text-black">
              These humans contributed in the creation of WeWise Labs.
            </p>

            <div className="w-full">
              <ul className="flex flex-col items-center sm:items-center lg:items-start divide-y divide-gray-400 dark:divide-gray-600 w-full mt-2 text-center lg:text-left">
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">
                  Shahabuddin 
                </li>
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">
                  Darakhshan Imran 
                </li>
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">
                  Abeera Umair 
                </li>
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">
                  Saba Sarfaraz 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <WhyUs/> */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-4 sm:mt-6 md:mt-9 mx-4 sm:mx-6 md:mx-8 lg:mx-auto bg-gray-950 rounded-xl lg:rounded-2xl gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:justify-between">
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center lg:items-start p-4 sm:p-6 md:p-8 lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-white">
              Why Wewise?
            </h1>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl text-white">
              We believe in doing what we say, <br className="hidden sm:block" />
              every step of the way!
            </p>
          </div>
          <div className="flex justify-center items-center p-4 sm:p-6 md:p-8 w-full lg:w-1/2 order-1 lg:order-2">
            <Image
              src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Question-dark_cmvdiw.png"
              alt="why-us"
              width={300}
              height={300}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* <WhereOnEarth/> */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-4 sm:mt-6 md:mt-9 mx-4 sm:mx-6 md:mx-8 lg:mx-auto gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:justify-between">
          <div className="flex justify-center items-center p-4 sm:p-6 md:p-8 w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-dark_n3uz1h.png"
              alt="why-us-dark"
              width={300}
              height={300}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] object-contain"
            />
          </div>
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center lg:items-start p-4 sm:p-6 md:p-8 w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-black">
              Where on Earth?
            </h1>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl max-w-xl text-black">
              WeWise Labs runs its operations <br className="hidden sm:block" />{" "}
              remotely. We live in the air!
            </p>
          </div>
        </div>
      </section>

      {/* bento */}
      <section className="sm:w-full mx-auto">
        <h1 className="flex justify-center items-center mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre font-bold text-black">
          Creativity, Art and Wewise
        </h1>
        <div className="flex justify-center items-center sm:w-full mx-auto my-12 md:my-20">
          <div className="rounded-2xl bg-gray-950 p-2 sm:p-4 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl lg:h-[350px] my-auto flex items-center">
            <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-7 lg:grid-rows-3 gap-2 w-full h-full">
              {/* ART with dots */}
              <HeroHighlight
                containerClassName="relative border border-gray-950 overflow-hidden rounded-xl flex items-center justify-center bg-gray-100
            row-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-3 order-1"
              >
                <span className="z-10 font-kablammo text-6xl sm:text-7xl md:text-8xl font-extrabold text-black font-libre drop-shadow-lg">
                  ART
                </span>
              </HeroHighlight>

              {/* Creativity with wavy lines */}
              <div
                className="relative border border-gray-950 overflow-hidden rounded-xl flex items-center justify-center bg-gray-100
                row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1  lg:col-span-4 lg:row-span-1 order-2 "
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/dqkt0g0he/image/upload/v1751979368/path9367_ggzkv0.png")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span className="z-10 text-5xl sm:text-4xl font-pacifico text-black">
                  Creativity
                </span>
              </div>

              {/* Logo */}
              <div
                className="relative border border-gray-950 rounded-xl flex items-center justify-center bg-white
                row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2 order-3 py-2"
              >
                <video
                  src="https://res.cloudinary.com/dqkt0g0he/video/upload/v1751988623/wewise_metalic_kgigth.mp4"
                  width={200}
                  height={200}
                  className="object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Mandala */}
              <div
                className="relative border-2 border-gray-100 rounded-2xl flex items-center justify-center bg-gray-950
                row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2 order-4 py-2 "
              >
                <Image
                  src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751921703/WhatsApp_Image_2025-07-08_at_01.54.56_75b59f83_hldijb.jpg"
                  alt="mandala"
                  width={130}
                  height={130}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";

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
              WeWise Lab&apos;s mission is to build products that work & are affordable.
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
      <section className="w-full">
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
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">Shahabuddin COO</li>
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">Darakhshan Imran CEO</li>
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">Saba Sarfaraz CMO</li>
                <li className="py-2 font-semibold text-lg sm:text-xl md:text-2xl text-black">Abeera Umair CFO</li>
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
              It is not what we just say, <br className="hidden sm:block" /> it is what we do!
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
              WeWise Labs runs its operations <br className="hidden sm:block" /> remotely. We live in the air!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

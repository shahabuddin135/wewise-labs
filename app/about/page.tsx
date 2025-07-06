"use client";

import React from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section className="flex flex-col bg-gray-100 dark:bg-gray-950">
      {isDark ? (
        <MaskContainer
          revealText={
            <div className="flex flex-col items-center ">
              {/* <AboutHero/> */}
              <section>
                <div className="flex h-screen max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto items-center justify-center overflow-hidden">
                  <p className="mx-auto w-full text-center text-5xl sm:text-6xl md:text-8xl leading-[1.15] sm:leading-[1.2] md:leading-[1.25] font-libre font-bold text-white">
                    Curiosity brought you to know About Us
                  </p>
                </div>
              </section>

              {/* <WhatWeDo/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 gap-8 pl-8 justify-between">
                  <div className="flex justify-center items-center w-full md:w-1/2">
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722525/How_we_work-dark_vrr1da.png"
                        alt="why-us-dark"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] md:object-contain object-cover"
                      />
                  </div>

                  <div className="flex flex-col gap-14 items-start p-8 md:p-6 md:w-1/2 m- text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 font-libre text-center font-bold text-white">
                      What Do We Do?
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-white">
                      WeWise Labs is a SaaS & Web development expert.
                    </p>
                  </div>
                </div>
              </section>

              {/* <Mission/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100  rounded-2xl justify-between ">
                  {/* <div className="flex flex-col gap-6 items-center md:items-start p-6 md:p-8 w-full md:w-1/2">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-libre font-bold text-black dark:text-white text-center md:text-left"> */}
                  <div className="flex flex-col gap-14 items-start p-8 md:w-1/2 m-8 text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-black">
                      Our Good Mission
                    </h1>
                    {/* <p className="font-semibold text-base sm:text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-xl text-gray-700 dark:text-white text-center md:text-left"> */}
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl lg:text-start max-w-xl text-black">
                      WeWise Lab&apos;s mission is to build products that work &
                      are affordable.
                    </p>
                  </div>
                  <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                    {/* {isDark ? (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722524/Leadership_light_vpuldm.png"

                      alt="why-us-dark"
                      width={300}
                      height={300}
                      className="md:w-[250px] md:h-[250px] md:object-cover object-cover"
                    />
                  ) : ( */}
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722524/Leadership_light_vpuldm.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="md:w-[250px] md:h-[250px] md:object-cover object-cover"
                    />
                    {/* )} */}
                  </div>
                </div>
              </section>

              {/* <FoundingMembers/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 rounded-2xl justify-between ">
                  <div className="flex justify-center items-center p-6 md: w-full md:w-1/2">
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Team-dark_xwxfwv.png"
                        alt="why-us"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] object-cover md:object-contain"
                      />
                  </div>

                  <div className="flex flex-col gap-6 items-center md:items-start p-6 w-full md:w-1/2">
                    <h1 className="text-5xl text-center md:text-start sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-white">
                      Founding Members
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-white">
                      These humans contributed in the
                      <br /> creation of WeWise Labs.{" "}
                    </p>

                    <div>
                      <ul className="grid grid-cols-1 list-disc font-semibold leading-9 ml-4 text-2xl text-white">
                        <li>Shahabuddin COO</li>
                        <li>Darakhshan Imran CEO</li>
                        <li>Saba Sarfaraz CMO</li>
                        <li>Abeera Umair CFO</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* <WhyUs/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100  rounded-2xl justify-between">
                  <div className="flex flex-col gap-14 mb-6 md:items-start md:p-8 md:w-2/3 md:m-8 items-center text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 text-center font-libre font-bold text-black">
                      Why Wewise?
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-black">
                      It is not what we just say, <br /> it is what we do!
                    </p>
                  </div>

                  <div className="flex justify-center items-center md:w-1/2">
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Question-light_detsyn.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* <WhereOnEarth/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto justify-between">
                  <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-light_jrecig.png"
                        alt="why-us"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] object-cover md:object-contain"
                      />
                  </div>
                  <div className="flex flex-col gap-14 md:items-start mb-6 md:p- md:w-1/2 md:mt-10 items-center text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 text-center font-libre font-bold text-white">
                      Where on Earth?
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-white">
                      WeWise Labs runs its operations <br /> remotely. We live
                      in the air !{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          }
          className=""
        >
          <div className="flex flex-col items-center ">
            {/* <AboutHero/> */}
            <section>
              <div className="flex h-screen max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto items-center justify-center overflow-hidden">
                <p className="mx-auto w-full text-center text-5xl sm:text-6xl md:text-8xl leading-[1.15] sm:leading-[1.2] md:leading-[1.25] font-libre font-bold text-black">
                  Curiosity brought you to know About Us
                </p>
              </div>
            </section>

            {/* <WhatWeDo/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto gap-8 pl-8 justify-between">
                <div className="flex justify-center items-center w-full md:w-1/2">
                  {/* {isDark ? ( */}
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722526/How_we_work-light_x6zdgu.png"

                      alt="why-us-dark"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] md:object-contain object-cover"
                    />
                </div>

                <div className="flex flex-col gap-14 items-start p-8 md:p-6 md:w-1/2 m- text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 font-libre text-center font-bold text-black">
                    What Do We Do?
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-black">
                    WeWise Labs is a SaaS & Web development expert.
                  </p>
                </div>
              </div>
            </section>

            {/* <Mission/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 rounded-2xl justify-between ">
                <div className="flex flex-col gap-14 items-start p-8 md:w-1/2 m-8 text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-white ">
                    Our Good Mission
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl lg:text-start max-w-xl text-white">
                    WeWise Lab&apos;s mission is to build products that work &
                    are affordable.
                  </p>
                </div>
                <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                  <Image
                    src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722522/Leadership_dark_ccikp6.png"
                    alt="why-us"
                    width={300}
                    height={300}
                    className="md:w-[250px] md:h-[250px] md:object-cover object-cover"
                  />
                </div>
              </div>
            </section>

            {/* <FoundingMembers/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto  justify-between ">
                <div className="flex justify-center items-center p-6 md: w-full md:w-1/2">
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722521/Team-light_goxqzj.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] object-cover md:object-contain"
                    />
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start p-6 w-full md:w-1/2">
                  <h1 className="text-5xl text-center md:text-start sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-black">
                    Founding Members
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-black">
                    These humans contributed in the
                    <br /> creation of WeWise Labs.{" "}
                  </p>

                  <div>
                    <ul className="grid grid-cols-1 list-disc font-semibold leading-9 ml-4 text-2xl text-black">
                      <li>Shahabuddin COO</li>
                      <li>Darakhshan Imran CEO</li>
                      <li>Saba Sarfaraz CMO</li>
                      <li>Abeera Umair CFO</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* <WhyUs/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950  rounded-2xl justify-between">
                <div className="flex flex-col gap-14 mb-6 md:items-start md:p-8 md:w-2/3 md:m-8 items-center text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 text-center font-libre font-bold text-white">
                    Why Wewise?
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-white">
                    It is not what we just say, <br /> it is what we do!
                  </p>
                </div>

                <div className="flex justify-center items-center md:w-1/2">
                  <Image
                    src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Question-dark_cmvdiw.png"
                    alt="why-us"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </section>

            {/* <WhereOnEarth/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto justify-between">
                <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-dark_n3uz1h.png"
                      alt="why-us-dark"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] object-cover md:object-contain"
                    />
                </div>
                <div className="flex flex-col gap-14 md:items-start mb-6 md:p- md:w-1/2 md:mt-10 items-center text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 text-center font-libre font-bold text-black">
                    Where on Earth?
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-black">
                    WeWise Labs runs its operations <br /> remotely. We live in
                    the air !{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </MaskContainer>
      ) : (
        <MaskContainer
          revealText={
            <div className="flex flex-col items-center ">
              {/* <AboutHero/> */}
              <section>
                <div className="flex h-screen max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto items-center justify-center overflow-hidden">
                  <p className="mx-auto w-full text-center text-5xl sm:text-6xl md:text-8xl leading-[1.15] sm:leading-[1.2] md:leading-[1.25] font-libre font-bold text-black dark:text-white">
                    Curiosity brought you to know About Us
                  </p>
                </div>
              </section>

              {/* <WhatWeDo/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto gap-8 pl-8 justify-between">
                  <div className="flex justify-center items-center w-full md:w-1/2">
                    {isDark ? (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722525/How_we_work-dark_vrr1da.png"
                        alt="why-us-dark"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] md:object-contain object-cover"
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722526/How_we_work-light_x6zdgu.png"
                        alt="why-us"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] md:object-contain object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-14 items-start p-8 md:p-6 md:w-1/2 m- text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 font-libre text-center font-bold text-black">
                      What Do We Do?
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-black">
                      WeWise Labs is a SaaS & Web development expert.
                    </p>
                  </div>
                </div>
              </section>

              {/* <Mission/> */}
              <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 dark:bg-gray-100  rounded-2xl justify-between">
                  <div className="flex flex-col gap-14 md:items-start p-8 md:w-1/2 m-8 items-center text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-white dark:text-black">
                      Our Good Mission
                    </h1>
                    {/* <p className="font-semibold text-base sm:text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-xl text-gray-700 dark:text-white text-center md:text-left"> */}
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl lg:text-start max-w-xl text-white dark:text-black">
                      WeWise Lab&apos;s mission is to build products that work &
                      are affordable.
                    </p>
                  </div>
                  <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                    {/* {isDark ? (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722524/Leadership_light_vpuldm.png"
                        alt="why-us-dark"
                        width={300}
                        height={300}
                        className="md:w-[250px] md:h-[250px] md:object-cover object-cover"
                      /> */}
                    {/* ) : ( */}
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722522/Leadership_dark_ccikp6.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="md:w-[250px] md:h-[250px] md:object-cover object-cover"
                    />
                    {/* )} */}
                  </div>
                </div>
              </section>

              {/* <FoundingMembers/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100 justify-between ">
                  <div className="flex justify-center items-center p-6 md: w-full md:w-1/2">
                    {isDark ? (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Team-dark_xwxfwv.png"
                        alt="why-us-dark"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] object-cover md:object-contain"
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722521/Team-light_goxqzj.png"
                        alt="why-us"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] object-cover md:object-contain"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-6 items-center md:items-start p-6 w-full md:w-1/2">
                    <h1 className="text-5xl text-center md:text-start sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-black">
                      Founding Members
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-black">
                      These humans contributed in the
                      <br /> creation of WeWise Labs.{" "}
                    </p>

                    <div>
                      <ul className="grid grid-cols-1 list-disc font-semibold leading-9 ml-4 text-2xl text-black">
                        <li>Shahabuddin COO</li>
                        <li>Darakhshan Imran CEO</li>
                        <li>Saba Sarfaraz CMO</li>
                        <li>Abeera Umair CFO</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* <WhyUs/> */}
              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 dark:bg-gray-100  rounded-2xl justify-between">
                  {/* <div className="flex flex-col gap-6 items-center md:items-start p-6 md:p-8 w-full md:w-1/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-libre font-bold text-black dark:text-white text-center md:text-left"> */}
                  <div className="flex flex-col gap-14 mb-6 md:items-start md:p-8 md:w-1/2 md:m- items-center text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 text-center font-libre font-bold text-white dark:text-black">
                      Why Wewise?
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-white dark:text-black">
                      It is not what we just say, <br /> it is what we do!
                    </p>
                  </div>

                  <div className="flex justify-center items-center  p-6 md:p-8 w-full md:w-1/2">
                    {/* {isDark ? (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Question-dark_cmvdiw.png"
                        alt="why-us-dark"
                        width={300}
                        height={300}
                        className="rounded-xl object-cover"
                      />
                    ) : ( */}
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Question-dark_cmvdiw.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="rounded-xl object-cover"
                    />
                    {/* )} */}
                  </div>
                </div>
              </section>

              {/* <WhereOnEarth/> */}

              <section>
                <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100 dark:bg-gray-950  dark:border-1 dark:border-white rounded-2xl justify-between">
                  <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                    {isDark ? (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-light_jrecig.png"
                        alt="why-us-dark"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] object-cover md:object-contain"
                      />
                    ) : (
                      <Image
                        src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-dark_n3uz1h.png"
                        alt="why-us"
                        width={300}
                        height={300}
                        className="w-[400px] h-[400px] object-cover md:object-contain"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-14 md:items-start mb-6 md:p- md:w-1/2 md:mt-10 items-center text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 text-center font-libre font-bold text-black dark:text-white">
                      Where on Earth?
                    </h1>
                    <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-gray-700 dark:text-white">
                      WeWise Labs runs its operations <br /> remotely. We live
                      in the air !{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          }
          className=""
        >
          <div className="flex flex-col items-center ">
            {/* <AboutHero/> */}
            <section>
              <div className="flex h-screen max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto items-center justify-center overflow-hidden">
                <p className="mx-auto w-full text-center text-5xl sm:text-6xl md:text-8xl leading-[1.15] sm:leading-[1.2] md:leading-[1.25] font-libre font-bold text-white">
                  Curiosity brought you to know About Us
                </p>
              </div>
            </section>

            {/* <WhatWeDo/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 gap-8 pl-8 justify-between">
                <div className="flex justify-center items-center w-full md:w-1/2">
                  {isDark ? (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722526/How_we_work-light_x6zdgu.png"
                      alt="why-us-dark"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] md:object-contain object-cover"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722525/How_we_work-dark_vrr1da.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] md:object-contain object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-14 items-start p-8 md:p-6 md:w-1/2 m- text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 font-libre text-center font-bold text-white">
                    What Do We Do?
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-white">
                    WeWise Labs is a SaaS & Web development expert.
                  </p>
                </div>
              </div>
            </section>

            {/* <Mission/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100  rounded-2xl justify-between ">
                <div className="flex flex-col gap-14 mb-6 md:items-start  md:w-1/2 m-8 text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-black">
                    Our Good Mission
                  </h1>
                  {/* <p className="font-semibold text-base sm:text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-xl text-gray-700 dark:text-white text-center md:text-left"> */}
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl lg:text-start max-w-xl text-black">
                    WeWise Lab&apos;s mission is to build products that work &
                    are affordable.
                  </p>
                </div>
                <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                  <Image
                    src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722524/Leadership_light_vpuldm.png"
                    alt="why-us"
                    width={300}
                    height={300}
                    className="md:w-[250px] md:h-[250px] md:object-cover object-cover"
                  />
                </div>
              </div>
            </section>

            {/* <FoundingMembers/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-950 rounded-2xl justify-between ">
                <div className="flex justify-center items-center p-6 md: w-full md:w-1/2">
                  {isDark ? (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722521/Team-light_goxqzj.png"
                      alt="why-us-dark"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] object-cover md:object-contain"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Team-dark_xwxfwv.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] object-cover md:object-contain"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-6 items-center md:items-start p-6 w-full md:w-1/2">
                  <h1 className="text-5xl text-center md:text-start sm:text-6xl md:text-5xl mt-5 font-libre font-bold text-white">
                    Founding Members
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-white">
                    These humans contributed in the
                    <br /> creation of WeWise Labs.{" "}
                  </p>

                  <div>
                    <ul className="grid grid-cols-1 list-disc font-semibold leading-9 ml-4 text-2xl text-white">
                      <li>Shahabuddin COO</li>
                      <li>Darakhshan Imran CEO</li>
                      <li>Saba Sarfaraz CMO</li>
                      <li>Abeera Umair CFO</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* <WhyUs/> */}
            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto bg-gray-100  rounded-2xl justify-between">
                <div className="flex flex-col gap-14 mb-6 md:items-start md:w-1/2 m-8 items-center text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl mt-5 text-center font-libre font-bold text-black">
                    Why Wewise?
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-3xl max-w-xl text-black">
                    It is not what we just say, <br /> it is what we do!
                  </p>
                </div>

                <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                  <Image
                    src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722519/Question-light_detsyn.png"
                    alt="why-us"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </section>

            {/* <WhereOnEarth/> */}

            <section>
              <div className="flex flex-col md:flex-row h-auto max-w-2xl md:max-w-4xl lg:max-w-7xl mt-9 mx-4 sm:mx-8 lg:mx-auto justify-between">
                <div className="flex justify-center items-center p-6 md:p-8 w-full md:w-1/2">
                  {isDark ? (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-dark_n3uz1h.png"
                      alt="why-us-dark"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] object-cover md:object-contain"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/dqkt0g0he/image/upload/v1751722518/Map-light_jrecig.png"
                      alt="why-us"
                      width={300}
                      height={300}
                      className="w-[400px] h-[400px] object-cover md:object-contain"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-14 md:items-start mb-6 md:p- md:w-1/2 md:mt-10 items-center text-center">
                  <h1 className="text-5xl sm:text-6xl md:text-6xl mt-5 text-center font-libre font-bold text-white">
                    Where on Earth?
                  </h1>
                  <p className="flex justify-center font-semibold items-center text-xl sm:text-2xl md:text-2xl max-w-xl text-white">
                    WeWise Labs runs its operations <br /> remotely. We live in
                    the air !{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </MaskContainer>
      )}
    </section>
  );
}

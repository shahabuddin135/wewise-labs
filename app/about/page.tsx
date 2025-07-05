"use client"

import WhyWewise from '@/components/why-wewise'
import OurMission from '../../components/our-mission'
import OurVision from '../../components/our-vision'
import { Team } from '@/components/team'
import React from 'react'
import VerticalGSAPCards from '../../components/VerticalCarousel'
import AboutHero from '@/components/about-sections/about-hero'
import WhyUs from "../../components/about-sections/why-us"
import Mission from "../../components/about-sections/mission"


export default function AboutPage() {
  return (
    // <section
    //   className="relative isolate px-4 md:px-8 overflow-hidden mt-18 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto w-full"
     
    // >
  //  <BgGlowBouncingSVGs className="-z-10 absolute inset-0 w-full h-full" />
      
//  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ffffff' width='2000' height='1500'/><defs><rect  stroke='#ffffff' stroke-width='0.6' width='1' height='1' id='s'/><pattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><use  fill='#fcfcfc' href='#s' y='2'/><use  fill='#fcfcfc' href='#s' x='1' y='2'/><use  fill='#fafafa' href='#s' x='2' y='2'/><use  fill='#fafafa' href='#s'/><use  fill='#f7f7f7' href='#s' x='2'/><use  fill='#f7f7f7' href='#s' x='1' y='1'/></pattern><pattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#f5f5f5'><use href='#s'/><use href='#s' y='5' /><use href='#s' x='1' y='10'/><use href='#s' x='2' y='1'/><use href='#s' x='2' y='4'/><use href='#s' x='3' y='8'/><use href='#s' x='4' y='3'/><use href='#s' x='4' y='7'/><use href='#s' x='5' y='2'/><use href='#s' x='5' y='6'/><use href='#s' x='6' y='9'/></g></pattern><pattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#f5f5f5'><use href='#s' y='5'/><use href='#s' y='8'/><use href='#s' x='1' y='1'/><use href='#s' x='1' y='9'/><use href='#s' x='1' y='12'/><use href='#s' x='2'/><use href='#s' x='2' y='4'/><use href='#s' x='3' y='2'/><use href='#s' x='3' y='6'/><use href='#s' x='3' y='11'/><use href='#s' x='4' y='3'/><use href='#s' x='4' y='7'/><use href='#s' x='4' y='10'/></g></pattern><pattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#f2f2f2'><use href='#s' y='11'/><use href='#s' x='2' y='9'/><use href='#s' x='5' y='12'/><use href='#s' x='9' y='4'/><use href='#s' x='12' y='1'/><use href='#s' x='16' y='6'/></g></pattern><pattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#ffffff'><use href='#s' y='9'/><use href='#s' x='16' y='5'/><use href='#s' x='14' y='2'/><use href='#s' x='11' y='11'/><use href='#s' x='6' y='14'/></g><g  fill='#efefef'><use href='#s' x='3' y='13'/><use href='#s' x='9' y='7'/><use href='#s' x='13' y='10'/><use href='#s' x='15' y='4'/><use href='#s' x='18' y='1'/></g></pattern><pattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#BED6FF'><use href='#s' x='2' y='5'/><use href='#s' x='16' y='38'/><use href='#s' x='46' y='42'/><use href='#s' x='29' y='20'/></g></pattern><pattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#BED6FF'><use href='#s' x='33' y='13'/><use href='#s' x='27' y='54'/><use href='#s' x='55' y='55'/></g></pattern><pattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'><g  fill='#BED6FF'><use href='#s' x='11' y='8'/><use href='#s' x='51' y='13'/><use href='#s' x='17' y='73'/><use href='#s' x='99' y='57'/></g></pattern></defs><rect fill='url(#a)' width='100%' height='100%'/><rect fill='url(#b)' width='100%' height='100%'/><rect fill='url(#h)' width='100%' height='100%'/><rect fill='url(#c)' width='100%' height='100%'/><rect fill='url(#d)' width='100%' height='100%'/><rect fill='url(#e)' width='100%' height='100%'/><rect fill='url(#f)' width='100%' height='100%'/><rect fill='url(#g)' width='100%' height='100%'/></svg> 

      // <section className="relative py-24 w-full h-[100vh] flex items-center justify-center overflow-hidden mb-12">
      //   <div className="relative z-10 flex w-[80%] h-full">
      //     {/* Left: Heading */}
      //     <div className="flex-1 flex items-center">
      //       <h1 className="absolute top-44 text-5xl md:text-8xl font-bold text-white uppercase tracking-wide drop-shadow-lg bg-black/40 px-8 py-4 border-2 border-t-black">
      //         About Us
      //       </h1>
      //     </div>
      //     {/* Right: Video */}
      //     <div className="flex-1 flex items-center justify-center  h-[100vh]">
      //       <video
      //         className=" w-full object-contain rounded-lg shadow-lg"
      //         src="/metallic.mp4"
      //         autoPlay
      //         loop
      //         muted
      //         playsInline
      //       />
      //     </div>
      //   </div>
      // </section>
      // <OurMission />
      // <OurVision />
      // <WhyWewise />
      // <div className='overflow-y-hidden'>
    //   <VerticalGSAPCards/>
    //   </div>
    //   <Team />
    // </section>

<section>

<AboutHero/>
<Mission/>
<WhyUs/>
 {/* <VerticalGSAPCards/>
<OurMission />
<OurVision />
<WhyWewise />
  <Team /> */}
</section>

  )
}

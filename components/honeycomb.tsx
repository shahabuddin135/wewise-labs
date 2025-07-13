'use client';

import React, { useState, useEffect } from 'react';
import { Honeycomb, Hexagon } from 'react-honeycomb';
import Lottie from "lottie-react";
import ecomyAnimation from "../public/lotties/ecomy.json";
import restapiAnimation from "../public/lotties/api.json";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// import {
//   Code,
//   Smartphone,
//   Globe,
//   Database,
//   Shield,
//   BarChart3,
//   Cloud,
//   Palette,
//   Zap,
//   Settings,
//   Users,
//   Search,
//   Sparkles
// } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: (props: { className?: string }) => React.ReactNode;
}

const ServicesComponent = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications',
      icon: ({ className }) => (
        <DotLottieReact
          src="https://lottie.host/68b4d231-e7ac-4dc6-91ce-a60d829e96a9/bgYNO13dbL.lottie"
          loop
          autoplay
          className={className}
        />
      )
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'User interface and experience design',
      icon: ({ className }) => (
        <DotLottieReact
          src="https://lottie.host/05e62f36-1b7e-4681-a921-2a9084afa534/or2lZkcjBS.lottie"
          loop
          autoplay
          className={className}
        />
      )
    },
    {
      id: 3,
      title: 'E-Commerce',
      description: 'Secure, scalable online shopping solutions',
      icon: ({ className }) => (
        <DotLottieReact
          src="https://lottie.host/174b8d26-a815-4c67-a8f8-f2d066333620/RiOYDNPmOE.lottie"
          loop
          autoplay
          className={className}
        />
      )
    },
    {
      id: 4,
      title: 'Database Solutions',
      description: 'Data management and optimization',
      icon: ({ className }) => (
        <DotLottieReact
          src="https://lottie.host/329f82fc-afc0-42c2-80dc-064f2e9ee6d7/LA67B2d7xg.lottie"
          loop
          autoplay
          className={className}
        />
      )
    
    },
    {
      id: 5,
      title: 'API Development',
      description: 'Secure APIs for seamless integration.',
      icon: ({ className }) => (
        <DotLottieReact
          src="https://lottie.host/731c7cf5-2018-4507-958d-403e7a1969f0/dZcv4mXliO.lottie"
          loop
          autoplay
          className={className}
        />
      ),
    },
    {
      id: 6,
      title: 'CMS ',
      description: 'Custom content control and updates',
      icon: ({ className }) => (
        <DotLottieReact
        src="https://lottie.host/f8501260-7717-4ceb-92d1-bf5621f6a8ec/eqLhMxFjDP.lottie"
        loop
        autoplay
        className={className}
      />
      )
    },
    {
      id: 7,
      title: 'AI Solutions',
      description: 'Build smart AI applications and chatbot',
      icon: ({ className }) => (
        <DotLottieReact
          src="https://lottie.host/08a01ad5-a53c-498b-a1f4-ab313eee44bf/9lwtWhbXy9.lottie"
          loop
          autoplay
          className={className}
        />
      )
    },
    // {
    //   id: 8,
    //   title: 'UI/UX Design',
    //   description: 'User interface and experience design',
    //   // icon: Palette,
    // },
    // {
    //   id: 9,
    //   title: 'Performance',
    //   description: 'Speed optimization and monitoring',
    //   // icon: Zap,
    // },
    // {
    //   id: 10,
    //   title: 'DevOps',
    //   description: 'Deployment and automation',
    //   // icon: Settings,
    // },
    // {
    //   id: 11,
    //   title: 'Consulting',
    //   description: 'Technical consultation and strategy',
    //   // icon: Users,
    // },
    // {
    //   id: 12,
    //   title: 'SEO Services',
    //   description: 'Search engine optimization',
    //   // icon: Search,
    // },
  ];

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () =>
      setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let size = 170; // desktop
  let marginTop = '-85px';
  if (width < 640) {
    size = 90; // mobile
    marginTop = '-70px';
  } else if (width < 425){
    size = 50; //xs screen
    marginTop = '-50px';
  } else if (width < 1024) {
    size = 160; // tablet
    marginTop = '-75px';
  }


  const renderServiceContent = (service: Service, idx: number) => {
    const IconComponent = service.icon;
    // const iconColor = iconColors[idx % iconColors.length];
    return (
      <div
        className={`
          relative h-full w-full flex flex-col items-center justify-center p-3
          bg-gray-50 dark:bg-slate-700
          rounded-2xl
          shadow-[8px_8px_24px_#e5e7eb,_-8px_-8px_24px_#fff] dark:shadow-[8px_8px_24px_#18181b,_-8px_-8px_24px_#27272a]
          transition-all duration-300 ease-in-out
          text-gray-900 dark:text-white
          
        `}
        //group-hover:scale-105 group-hover:shadow-2xl
        style={{ minHeight: 150 }}
      >
        {IconComponent && <IconComponent className="h-15 sm:h-30 sm:-mt-4 sm:mb-2" />}
        <h3 className=" sm:text-lg text-sm font-extrabold text-center mb-1 transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-xs sm:text-lg text-[10px] text-center pb-3 opacity-90 leading-tight transition-all duration-300">
          {service.description}
        </p>
      </div>
    );
  };

  const servicesSubset = services.slice(0, 7);

  const renderCell = (id: string, index: number) => {
    const service = services.find(s => s.id.toString() === id);
    if (!service) return <div />;
    return (
      // @ts-expect-error Hexagon type is not compatible with children, but usage is intentional
      <Hexagon className="service-hexagon group">
        {renderServiceContent(service, index)}
      </Hexagon>
    );
  };

  return (
    <section id="services" className="relative py-16 px-4 bg-gray-50 dark:bg-zinc-950 z-50 flex flex-col justify-center items-center overflow-hidden">
      {/* BG Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-400 dark:bg-blue-900 opacity-40 blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-fuchsia-400 dark:bg-fuchsia-900 opacity-30 blur-[100px] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] font-bold text-gray-900 dark:text-white mb-10 mt-4">
            What We Build <br/> <span className="text-3xl md:text-[2rem] lg:text-[3rem] font-bold text-gray-900 dark:text-white mb-10 mt-4">We Build to Win</span>
          </h2>
          <p className="px-2 sm:px-0 text-lg md:text-[1.35rem] lg:text-[1.35rem] leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">            
             WeWise isn&apos;t just coding for fun. We build products that solve, scale, and stick. Here&apos;s what we bring to your table.
          </p> 
        </div>

        {width >= 1024 ? (
          <div className="w-full flex justify-center pr-[13%]">
            <div
              className="flex flex-col items-center mx-auto"
              style={{ width: size * 3.3 }}
            >
              <Honeycomb
                columns={2}
                size={size}
                items={servicesSubset.slice(0, 2).map(s => s.id.toString())}
                renderItem={renderCell}
              />
              <div style={{ marginTop }}>
                <Honeycomb
                  columns={3}
                  size={size}
                  items={servicesSubset.slice(2, 5).map(s => s.id.toString())}
                  renderItem={renderCell}
                />
              </div>
              <div style={{ marginTop }}>
                <Honeycomb
                  columns={2}
                  size={size}
                  items={servicesSubset.slice(5, 7).map(s => s.id.toString())}
                  renderItem={renderCell}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center pr-4">
            <Honeycomb
              columns={2}
              size={size}
              items={servicesSubset.map(s => s.id.toString())}
              renderItem={renderCell}
            />
          </div>
        )}
      </div>
      
      <style jsx>{`
        .service-hexagon > div {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          border-radius: 0;
          transition: all 0.3s ease-in-out;
        }

        .service-hexagon {
          margin: 2px;
          cursor: pointer;
        }

       
      `}</style>
    </section>
  );
};

export default ServicesComponent;

 // .service-hexagon:hover > div {
        //   transform: scale(1.1);
        //   z-index: 10;
        // }
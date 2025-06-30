'use client';

import React, { useState, useEffect } from 'react';
import { Honeycomb, Hexagon } from 'react-honeycomb';
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  BarChart3,
  Cloud,
  Palette,
  Zap,
  Settings,
  Users,
  Search,
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServicesComponent = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications',
      icon: Code,
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'iOS and Android applications',
      icon: Smartphone,
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'SEO, SEM, and social media',
      icon: Globe,
    },
    {
      id: 4,
      title: 'Database Solutions',
      description: 'Data management and optimization',
      icon: Database,
    },
    {
      id: 5,
      title: 'Cybersecurity',
      description: 'Security audits and protection',
      icon: Shield,
    },
    {
      id: 6,
      title: 'Analytics',
      description: 'Data analysis and insights',
      icon: BarChart3,
    },
    {
      id: 7,
      title: 'Cloud Services',
      description: 'Cloud infrastructure and migration',
      icon: Cloud,
    },
    {
      id: 8,
      title: 'UI/UX Design',
      description: 'User interface and experience design',
      icon: Palette,
    },
    {
      id: 9,
      title: 'Performance',
      description: 'Speed optimization and monitoring',
      icon: Zap,
    },
    {
      id: 10,
      title: 'DevOps',
      description: 'Deployment and automation',
      icon: Settings,
    },
    {
      id: 11,
      title: 'Consulting',
      description: 'Technical consultation and strategy',
      icon: Users,
    },
    {
      id: 12,
      title: 'SEO Services',
      description: 'Search engine optimization',
      icon: Search,
    },
  ];

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () =>
      setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let size = 150;
  let marginTop = '-73px';
  if (width < 640) {
    size = 80;
    marginTop = '-45px';
  } else if (width < 1024) {
    size = 120;
    marginTop = '-65px';
  }

  // Color palette for SVG icons
  const iconColors = [
    'text-pink-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-fuchsia-500',
    'text-cyan-500',
  ];

  const renderServiceContent = (service: Service, idx: number) => {
    const IconComponent = service.icon;
    const iconColor = iconColors[idx % iconColors.length];
    return (
      <div
        className={`
          relative h-full w-full flex flex-col items-center justify-center p-4
          bg-gray-50 dark:bg-zinc-900
          rounded-2xl
          shadow-[8px_8px_24px_#e5e7eb,_-8px_-8px_24px_#fff] dark:shadow-[8px_8px_24px_#18181b,_-8px_-8px_24px_#27272a]
          transition-all duration-300 ease-in-out
          text-gray-900 dark:text-white
          group-hover:scale-105 group-hover:shadow-2xl
        `}
        style={{ minHeight: 150 }}
      >
        <IconComponent className={`w-10 h-10 mb-2 ${iconColor}`} />
        <h3 className="text-base sm:text-base text-xs font-extrabold text-center mb-1 transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-xs sm:text-xs text-[10px] text-center opacity-90 leading-tight transition-all duration-300">
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
      // @ts-ignore
      <Hexagon className="service-hexagon group">
        {renderServiceContent(service, index)}
      </Hexagon>
    );
  };

  return (
    <section className="relative py-16 px-4 bg-gray-50 dark:bg-zinc-950 z-50 flex flex-col justify-center items-center overflow-hidden">
      {/* BG Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-blue-400 dark:bg-blue-900 opacity-40 blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-fuchsia-400 dark:bg-fuchsia-900 opacity-30 blur-[100px] pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive
            in the modern digital landscape.
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

        .service-hexagon:hover > div {
          transform: scale(1.1);
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default ServicesComponent;
import React, { Suspense } from 'react';
import { animate } from 'framer-motion';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {

  const handleScroll = () => {
    const element = document.getElementById('works');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, y, {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // ease-out cubic
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 overflow-hidden bg-[#f4f7fb]">
      {/* Effetto luce ambientale azzurrina */}
      <div className="absolute top-1/4 left-10 w-64 md:w-96 h-64 md:h-96 bg-light-blue rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Testo */}
      <div className="z-10 flex flex-col items-start justify-center w-full lg:w-1/2 h-full pt-32 lg:pt-0 relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-slate-900">
          Ciao, sono <br className="hidden md:block" />
          <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(79,172,254,0.4)]">
            Kelin.Dev
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-lg leading-relaxed">
          Creative Developer & Software Engineering Student
        </p>
        <button onClick={handleScroll} className="glow-button bg-white bg-opacity-70 border-2 border-neon-blue text-neon-blue px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-neon-blue hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer">
          Vedi i miei lavori
        </button>
      </div>

      {/* 3D Spline Component */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-100 flex items-center justify-center pointer-events-none lg:pointer-events-auto">
        <Suspense fallback={<div className="w-full h-full opacity-0"></div>}>
          <Spline scene="https://prod.spline.design/Do19dfu6Wg7RTUzy/scene.splinecode?v=2" />
        </Suspense>
      </div>
      
    </section>
  );
};

export default Hero;

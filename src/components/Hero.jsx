


import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-black text-white min-h-screen flex items-center justify-center px-6 md:px-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-cyan-400">Daniel Ettah</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          A passionate and innovative <span className="text-teal-300">Software Developer</span> building modern responsive web experiences; creating and implementing AI/ML solutions for enhanced productivity.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

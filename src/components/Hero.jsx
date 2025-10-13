import React from "react";

const Hero = () => {
  return (
    <section
      id="header"
      className="relative min-h-screen flex items-center justify-center text-center px-6 sm:px-10 bg-gray-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80")',
          filter: "brightness(0.35)",
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-emerald-400 font-semibold text-lg sm:text-xl tracking-wide uppercase">
          Software Developer
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mt-3 leading-tight">
          Hi, I'm <span className="text-emerald-400">Karthick Raja J</span>
        </h1>

        <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl">
          I design and build responsive, interactive web experiences using
          <span className="text-emerald-400 font-medium"> React, JavaScript, and Tailwind CSS</span>.
          Passionate about clean code, performance, and modern UI/UX.
        </p>

        <p className="mt-2 text-gray-400 text-sm sm:text-base">
          📍 Based in Tamil Nadu, India
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-emerald-500 transition"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Subtle Floating Animation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-emerald-400 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm">
          Scroll Down
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

export default function Hero() {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-8 py-24 min-h-[85vh]
      bg-gradient-to-br from-[#fff4e0] via-[#ffe6d0] to-[#fff9f5] text-gray-800
      transition-all duration-1000"
    >
      {/* Left - Logo */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <div className="bg-white shadow-lg rounded-xl p-10 hover:shadow-2xl transition-all duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-orange-500">Frame</span>
            <span className="text-gray-800">Craft</span>
          </h1>
        </div>
      </div>

      {/* Right - Content */}
      <div className="flex-1 md:pl-12 text-center md:text-left">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 
          bg-gradient-to-r from-gray-900 via-orange-700 to-gray-800 bg-clip-text text-transparent animate-pulse"
        >
          Where stories meet creativity.
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8 text-lg max-w-xl mx-auto md:mx-0">
          We craft films, brands, and artful experiences that connect with people.
          A single-page demo inspired by creative storytelling — complete with a
          working contact form.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          {/* Button 1: Let's Talk */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Let&apos;s Talk
          </button>

          {/* Button 2: View Portfolio */}
          <button
            onClick={() => scrollToSection("portfolio")}
            className="border border-gray-300 hover:border-orange-400 hover:text-orange-600 text-gray-700 px-6 py-3 rounded-lg transition-all duration-300"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

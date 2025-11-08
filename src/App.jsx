import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className="min-h-screen text-gray-800 bg-gradient-to-br from-[#fff4e0] via-[#ffe6d0] to-[#fff9f5]
      transition-all duration-700"
    >
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

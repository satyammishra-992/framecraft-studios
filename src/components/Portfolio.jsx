import React, { useEffect, useRef, useState } from "react";

// Fade-in scroll hook
function useInView(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default function Portfolio() {
  const [ref, visible] = useInView(0.2);

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`px-6 py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } 
      bg-gradient-to-br from-[#fff1e6] via-[#ffe4cc] to-[#fff7ee]
      `}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Portfolio
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our highlight reel — a glimpse into our creative storytelling,
        brand films, and production artistry.
      </p>

      {/* Video Showcase */}
      <div className="max-w-4xl mx-auto relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
        <div className="relative pb-[56.25%] bg-black rounded-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=0&rel=0"
            title="FrameCraft Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-5 transition-all duration-700"></div>
      </div>

      <p className="text-center text-gray-700 mt-8">
        🎥 Every frame tells a story — crafted with passion and precision.
      </p>
    </section>
  );
}

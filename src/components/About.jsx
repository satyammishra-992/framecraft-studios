import React, { useEffect, useRef, useState } from 'react'

// Simple fade-in on scroll
function useInView(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}

// Card component
const FilmCard = ({ image, title, description, delay }) => {
  const [ref, visible] = useInView(0.2)

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
      className={`bg-white p-4 rounded-lg shadow-md transform transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="h-40 w-full rounded-md overflow-hidden mb-4 relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => (e.target.src = '/fallback.jpg')}
        />
      </div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <div id="about" className="px-6">
      <h2 className="text-2xl font-semibold mb-3">About FrameCraft</h2>
      <p className="text-gray-600 mb-8">
        Since 2010, we have been telling visual stories — from short documentaries 
        to brand films and curated art events. We believe in listening first, then 
        crafting with intention.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FilmCard
          delay={100}
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          title="Documentaries"
          description="We craft meaningful documentary films that capture real stories, raw emotions, and authentic journeys."
        />
        <FilmCard
          delay={200}
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          title="Corporate Films"
          description="Helping brands tell their story with powerful corporate films that connect with audiences and clients alike."
        />
        <FilmCard
          delay={300}
          image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          title="Creative Direction"
          description="From script to screen — we guide every production step to bring ideas to cinematic life."
        />
      </div>
    </div>
  )
}

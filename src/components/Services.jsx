import React from 'react'

const ServiceCard = ({title, children}) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 tilt">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{children}</p>
  </div>
)

export default function Services(){
  return (
    <div id="services" className="px-6">
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard title="Film Production">Production, documentaries, and creative direction.</ServiceCard>
        <ServiceCard title="Branding">Brand strategy, identity design and campaigns.</ServiceCard>
        <ServiceCard title="Art Curation">Events, exhibitions, and cultural storytelling.</ServiceCard>
      </div>
    </div>
  )
}

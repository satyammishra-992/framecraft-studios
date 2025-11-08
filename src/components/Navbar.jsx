import React, { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
            FC
          </div>
          <div className="font-semibold text-lg">FrameCraft Studios</div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-orange-600">About</a>
          <a href="#services" className="hover:text-orange-600">Services</a>
          <a href="#portfolio" className="hover:text-orange-600">Portfolio</a>
          <a href="#contact" className="px-3 py-2 bg-orange-100 rounded-md hover:bg-orange-200">Let's Talk</a>
        </div>

        <button className="md:hidden" onClick={()=>setOpen(v=>!v)} aria-label="menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 px-6 pb-6">
          <a className="block py-2 border-b" href="#about">About</a>
          <a className="block py-2 border-b" href="#services">Services</a>
          <a className="block py-2 border-b" href="#portfolio">Portfolio</a>
          <a className="block py-2" href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}

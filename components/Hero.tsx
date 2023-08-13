'use client'
import React from 'react'


const Hero = () => {

  return (
    <div
    className="py-20"
    style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-2 text-white">
        Smart Health Monitoring System!
      </h2>
      <h3 className="text-2xl mb-8 text-gray-200">
        Monitor your health smartly.
      </h3>
      <a
      type='button' 
      className="bg-black font-body rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300"
      href="/api/auth/login">
        Get Started
      </a>
    </div>
  </div>
  )
}

export default Hero
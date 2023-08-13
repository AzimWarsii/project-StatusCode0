import React from 'react'

const CTA = () => {
  return (
    <section style={{ backgroundColor: "#667eea" }}>
    <div className="container mx-auto px-6 text-center py-20">
      <h2 className="mb-6 text-4xl font-bold text-center text-white">
        Get accurate results
      </h2>
      <h3 className="my-4 text-2xl text-white">
        No more googling your symptoms!
      </h3>
      <a
      type='button' 
      className="bg-black font-body rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300"
      href="/api/auth/login">
        Enroll Now
      </a>
    </div>
  </section>
  )
}

export default CTA
import React from 'react'

const Welcome = ({user}) => {
  return (
    <div
    className="py-20"
    
  >
    <div className="bg-black  mx-auto pl-6">
      <h2 className="text-5xl  font-body font-bold text-primary tracking-widest">
        {user}
      </h2>
      <h3 className="font-light font-body text-xl text-left tracking-tightest text-secondary">
        Monitor your health vitals smartly.
      </h3>
      <a
      type='button' 
      className="hidden lg:black bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300"
      href="/profile">
        Profile
      </a>
    </div>
  </div>
  )
}

export default Welcome
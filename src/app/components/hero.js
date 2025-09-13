import React from 'react'

function Hero() {
  return (
    <div className="w-full bg-purple-100 py-16 px-8 border-2 border-b border-purple-900">
      <div className="max-w-4xl mx-auto flex justify-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight">
            Maximizing our <span className="text-black font-bold">GPA</span>,
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 mt-2">
            One <span className="text-black font-bold">Class</span> at a Time
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero
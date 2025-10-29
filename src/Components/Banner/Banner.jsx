
import React from 'react';
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-indigo-50 to-black-100 rounded-2xl shadow-md">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover a World of Knowledge
        </h1>
        <p className="text-gray-600 text-lg">
          Explore thousands of books and resources to fuel your learning journey.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img 
          className="w-64 md:w-80 lg:w-96 rounded-xl shadow-lg object-cover" 
          src={bookImg} 
          alt="Books banner" 
        />
      </div>
    </section>
  );
};

export default Banner;

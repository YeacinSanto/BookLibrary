import React from 'react';
import bookImg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
// import React from 'react';
// import bookImg from "../../assets/books.jpg";

// const Banner = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-md">
      
//       {/* Text Section */}
//       <div className="flex-1 text-center md:text-left space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//           Discover a World of Knowledge
//         </h1>
//         <p className="text-gray-600 text-lg">
//           Explore thousands of books and resources to fuel your learning journey.
//         </p>
//         <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300">
//           Get Started
//         </button>
//       </div>

//       {/* Image Section */}
//       <div className="flex-1 flex justify-center mt-10 md:mt-0">
//         <img 
//           className="w-64 md:w-80 lg:w-96 rounded-xl shadow-lg object-cover" 
//           src={bookImg} 
//           alt="Books banner" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Banner;

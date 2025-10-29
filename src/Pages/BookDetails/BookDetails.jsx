// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';

// const BookDetails = () => {
//     const {id} = useParams();
//     const bookId = parseInt(id)
//     const data = useLoaderData()

//     const singleBook = data.find(book=>book.bookId===bookId);
//     // console.log(singleBook)
//     const {bookName,image} = singleBook;
//     return (
//         <div className=' w-2/3 mx-auto m-3 p-5'>
            
//                 <img className='w-48 mx-auto' src={image} alt="" />
//                 <h5 className='text-2xl ml-20'>{bookName}</h5>
            
//             <button className="btn btn-secondary m-2">Mark as Read</button>
//             <button className="btn btn-accent m-2">Add to Wish List</button>
//         </div>
//     );
// };

// export default BookDetails;

// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';

// const BookDetails = () => {
//   const { id } = useParams();
//   const bookId = parseInt(id);
//   const data = useLoaderData();

//   const singleBook = data.find(book => book.bookId === bookId);
//   const { bookName, image, author, category, tags, year } = singleBook;

//   return (
//     <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-8 p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
//       {/* Book Image + Info */}
//       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
//         <img
//           className="w-40 h-56 object-cover rounded-xl shadow-md"
//           src={image}
//           alt={bookName}
//         />
//         <div className="flex flex-col justify-between">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-2">{bookName}</h1>
//           {author && <p className="text-lg text-gray-600 mb-1">by {author}</p>}
//           {category && <p className="text-sm text-gray-500 italic mb-2">Category: {category}</p>}
//           {year && <p className="text-sm text-gray-500">Published: {year}</p>}
//           {tags && (
//             <div className="flex flex-wrap gap-2 mt-2">
//               {tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full border border-gray-200"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-wrap gap-4 mt-4">
//         <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all">
//           Mark as Read
//         </button>
//         <button className="px-5 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition-all">
//           Add to Wish List
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Star, BookOpen, Calendar, FileText } from 'lucide-react'; // <-- clean, lightweight icons

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find(book => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    tags,
    year,
    rating,
    totalPages,
    review,
  } = singleBook;

 

  return (
    <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-8 p-8 bg-white shadow-lg rounded-2xl border border-gray-100">
      {/* Book Image + Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
        <img
          className="w-40 h-56 object-cover rounded-xl shadow-md"
          src={image}
          alt={bookName}
        />
        <div className="flex flex-col justify-between w-full">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">{bookName}</h1>
          {author && <p className="text-lg text-gray-600 mb-1">by {author}</p>}
          {category && <p className="text-sm text-gray-500 italic mb-2">Category: {category}</p>}

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-700">
            {year && (
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-indigo-600" />
                <span className="text-sm">Published: {year}</span>
              </div>
            )}
            {totalPages && (
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-pink-500" />
                <span className="text-sm">Pages: {totalPages}</span>
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-500" />
                <span className="text-sm">Rating: {rating} / 5</span>
              </div>
            )}
            {review && (
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-green-600" />
                <span className="text-sm">{review} Reviews</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full border border-gray-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-all">
          Mark as Read
        </button>
        <button className="px-5 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition-all">
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default BookDetails;


import { FaStarHalfAlt } from "react-icons/fa";
import "./Book.css";
import { Link } from "react-router";
const Book = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
    <div className="book-card shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <img
        src={book.image}
        alt={book.bookName}
        className="mx-auto mb-2 w-40 h-60 object-cover rounded-md"
      />
      <div className="flex justify-center gap-8 m-4">
        {
        book.tags.map(tag=><button>{tag}</button>)
      }
      </div>
      <h3 className="text-lg font-semibold">{book.bookName}</h3>
      <p className="text-sm text-gray-600">By: {book.author}</p>
      <div className="border-1 border-dashed m-3 w-3/4 mx-auto"></div>
      <div className="flex justify-center gap-20">
        <div>{book.category}</div>
        <div className="flex justify-center items-center gap-1">{book.rating} <FaStarHalfAlt /> </div>
      </div>
    </div></Link>
  );
};

export default Book;

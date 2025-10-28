import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allbooks,setAllBooks] = useState([])
    useEffect(()=>{
        fetch("BooksData.json")
        .then(res=>res.json())
        .then(data=>setAllBooks(data))
    },[])

    // const bookPromise = fetch("BooksData.json").then(res=>res.json())


    return (
        <div>
            <h1 className='text-3xl text-center p-6 font-bold'>Library</h1>
            {/* <Suspense fallback={<span>Loading...</span>}>
                <Book bookPromise={bookPromise}></Book>
            </Suspense> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

                {
                allbooks.map(book=><Book key={book.bookId} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
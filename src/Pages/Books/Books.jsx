import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // const[books,setBooks]= useState([]);
    // useEffect(()=>{
    //     fetch('./booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>setBooks(data))
    // },[])
    // const bookPromise= fetch('./booksData.json').then(res=>res.json())
    return (
        <div className='container mx-auto my-16'>
            <h1 className='text-3xl font-bold text-center'>Books</h1>
            <Suspense fallback={<span>Loading ...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {
                        data.map((book) => <Book key={book.bookId} data={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;
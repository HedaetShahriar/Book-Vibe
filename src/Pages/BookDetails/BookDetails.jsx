import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} =useParams();
    const data = useLoaderData();
    const book = data.find(book => book.bookId === parseInt(id));
    const { bookId, bookName, author, image, rating, category, publisher, review, tags, totalPages, yearOfPublishing } = book;
    return (
        <div className='container mx-auto my-6 flex gap-6'>
            <div className='bg-[#F3F3F3] p-10 rounded-xl'>
                <img src={image} alt="" className='w-[154px] h-48 mx-auto' />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default BookDetails;
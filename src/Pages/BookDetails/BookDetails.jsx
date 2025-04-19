import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import {addToDB} from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const book = data.find(book => book.bookId === parseInt(id));
    const { bookId, bookName, author, image, rating, category, publisher, review, tags, totalPages, yearOfPublishing } = book;

    const handleMarkAsRead = (id) => {
        addToDB(id);
    }

    return (
        <div className='container mx-auto my-6 flex gap-8'>
            <div className='bg-[#F3F3F3] p-10 rounded-xl w-[calc(50%-32px)]'>
                <img src={image} alt="" className='' />
            </div>
            <div className='w-2/4 flex flex-col gap-4 justify-around'>
                <div>
                    <h2 className='font-bold text-2xl mb-3'>{bookName}</h2>
                    <h4 className='font-medium'>By : {author}</h4>
                </div>
                <div className='border-b-2 border-[#dfdfdf]'></div>
                <h4>{category}</h4>
                <div className='border-b-2 border-[#dfdfdf]'></div>
                <p><span>Review : </span>{review}</p>
                <div className='flex items-center gap-2'>
                    <h4>tag:</h4>
                    {
                        tags.map((tag, index) =>    <span key={index} className='bg-[#F3F3F3] text-[#23BE0A] text-sm font-semibold px-2 py-1 rounded-full mr-2'>#{tag}</span>)
                    }
                </div>
                <div className='border-b-2 border-[#dfdfdf]'></div>
                <div>
                    <p>Number of Pages:{totalPages}</p>
                    <p>Publisher:{publisher}</p>
                    <p>Year of Publishing:{yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className='flex gap-4'>
                    <button onClick={()=>handleMarkAsRead(bookId)} className='btn'>Mark as Read</button>
                    <button className='btn '>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
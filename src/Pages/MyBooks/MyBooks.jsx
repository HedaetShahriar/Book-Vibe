import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { LuBookText } from "react-icons/lu";

const MyBooks = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, publisher, review, tags, totalPages, yearOfPublishing } = book;
    return (
        <div className='border-2 border-gray-300 p-6 rounded-2xl gap-4 flex'>
            <div className='bg-[#F3F3F3] px-12 py-4 rounded-xl'>
                <img src={image} alt={bookName} className='w-32 h-48 rounded-lg mx-auto' />
            </div>
            <div className='flex flex-col justify-between gap-4 w=3/4'>
                <div>
                    <h1 className='font-bold text-2xl mb-3'>{bookName}</h1>
                    <h3 className='font-medium'>By : {author}</h3>
                </div>
                <div className='flex gap-4 '>
                    <h4>Tag : </h4>
                    <div>
                        {
                            tags.map((tag, index) => <span key={index} className='bg-[#F3F3F3] text-[#23BE0A] text-sm font-semibold px-2 py-1 rounded-full mr-2'>#{tag}</span>)
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-0.5'>
                            <CiLocationOn />
                            <h4>Year of Publishing: </h4>
                        </div>
                        <p>{yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-0.5'>
                            <GoPeople />
                            <h4>Publisher:</h4>
                        </div>
                        <p>{publisher}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-0.5'>
                            <LuBookText />
                            <h4>Pages:</h4>
                        </div>
                        <p>{totalPages}</p>
                    </div>
                </div>
                <div className='border-b-2 border-[#dfdfdf] w-full'></div>
                <div className='flex items-center gap-2'>
                    <div className='bg-blue-200 text-blue-500 py-1 px-4 rounded-full flex gap-1'>
                        <h4>Category:</h4>
                        <p>{category}</p>
                    </div>
                    <div className='bg-orange-200 text-orange-400 py-1 px-4 rounded-full flex gap-1'>
                        <h4>Rating:</h4>
                        <p>{rating}</p>
                    </div>
                    <button className='bg-green-600 text-white py-1 px-4 rounded-full'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default MyBooks;
import React, { use } from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ data }) => {
    // const data= use(bookPromise);
    const { bookId, bookName, author, image, rating, category, publisher, review, tags, totalPages, yearOfPublishing } = data;

    return (
        <Link to={`/bookDetails/${bookId}`} >
            <div className='border border-[#F3F3F3] rounded-xl p-6 flex flex-col gap-4'>
                <div className='bg-[#F3F3F3] py-6  rounded-xl '>
                    <img src={image} alt="" className='w-[140px] h-48 mx-auto rounded-sm'/>
                </div>
                <div >
                    {
                        tags.map((tag, index) => <span key={index} className='bg-[#F3F3F3] text-[#23BE0A] text-sm font-semibold px-2 py-1 rounded-full mr-2'>{tag}</span>)
                    }
                    <div className='flex flex-col gap-5 mt-4'>
                        <div>
                            <h1 className='font-bold text-2xl mb-3'>{bookName}</h1>
                            <h3 className='font-medium'>By : {author}</h3>
                        </div>
                        <span className='border-b-2 border-[#dfdfdf] border-dashed'></span>
                        <div className='flex justify-between items-center'>
                            <h4>{category}</h4>
                            <div className='flex items-center gap-2'>
                                <h4>{rating}</h4>
                                <span><CiStar size={24} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
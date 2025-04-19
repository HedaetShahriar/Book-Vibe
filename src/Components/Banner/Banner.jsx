import React from 'react';
import bookImage from '../../assets/books.png';

const Banner = () => {
    return (
        <div className='container mx-auto flex justify-between gap-6 rounded-3xl bg-[#F3F3F3] m-6  py-16 px-20'>
            <div className='flex flex-col justify-center gap-8'>
                <h1 className='text-4xl font-bold'>Books to freshen up your bookshelf.</h1>
                <div>
                    <button className='px-4 py-3 bg-blue-600 rounded-2xl text-xl font-bold text-white'>View The List</button>
                </div>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../utility/addToDB';
import MyBooks from '../MyBooks/MyBooks';

const ReadList = () => {
    const[readList, setReadList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedBooks= getStoredBooks();
        const myBooks = data.filter(book => storedBooks.includes(book.bookId));
        setReadList(myBooks);
    }, [])
    console.log(readList);
return (
    <div className='container mx-auto my-6'>
        <div className='bg-[#F3F3F3] p-6 rounded-xl mb-6'>
            <h1 className='text-2xl font-bold text-center'>Books</h1>
        </div>

        <Tabs>
            <TabList>
                <Tab>Read Books</Tab>
                <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
                <div className='flex flex-col gap-4 mt-4'>
                {
                    readList.map((book)=><MyBooks key={book.bookId} book={book}></MyBooks>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Wish List</h2>
            </TabPanel>
        </Tabs>
    </div>

);
};

export default ReadList;
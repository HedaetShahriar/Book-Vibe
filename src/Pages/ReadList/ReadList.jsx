import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../utility/addToDB';
import MyBooks from '../MyBooks/MyBooks';
import { IoIosArrowDown } from "react-icons/io";



const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();


    const handleSort = (type) => {
        setSort(type);
        if (type === 'pages') {
            const sortedBooks = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedBooks);
        } else if (type === 'ratings') {
            const sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedBooks);
        }
    }
    useEffect(() => {
        const storedBooks = getStoredBooks();
        const myBooks = data.filter(book => storedBooks.includes(book.bookId));
        setReadList(myBooks);
    }, [])
    return (
        <div className='container mx-auto my-6 flex justify-center flex-col items-center'>
            <div className='bg-[#F3F3F3] p-6 rounded-xl mb-6 w-full'>
                <h1 className='text-2xl font-bold text-center'>Books</h1>
            </div>
            <div className="dropdown mb-4 ">
                <div tabIndex={0} role="button" className="btn rounded-full bg-[#23BE0A] text-white">Sort by  {sort ? `: ${sort}`: <IoIosArrowDown size={24}/>}</div>
                <ul tabIndex={0} className="dropdown-content bg-base-100 menu rounded-box z-1 w-52 p-2 ">
                    <li><a onClick={() => handleSort("pages")}>pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>ratings</a></li>
                </ul>
            </div>
            <Tabs className='w-full'>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-4 mt-4'>
                        {
                            readList.map((book) => <MyBooks key={book.bookId} book={book}></MyBooks>)
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
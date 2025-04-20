import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: async () => {
          const response = await fetch('/booksData.json');
          if (!response.ok) throw new Error("Failed to load books data");
          return await response.json(); // should return the array of books
        },
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/readList',
        loader: async () => {
          const response = await fetch('/booksData.json');
          if (!response.ok) throw new Error("Failed to load books data");
          return await response.json();
        },
        Component: ReadList,
      },
      {
        path: '/bookDetails/:id',
        loader: async () => {
          const response = await fetch('/booksData.json');
          if (!response.ok) throw new Error("Failed to load books data");
          return await response.json();
        },
        Component: BookDetails,
      }
    ]
  },
]);
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      <div className="h-60vh bg-gray-800">
          bg-image
      </div>
      <div className="flex h-30vh items-center justify-around bg-gray-200">
        <button
          className="p-5 m-3 rounded-md bg-gray-400 hover:bg-gray-600 w-36 h-32 text-2xl font-bold"
        >
          시인의 방
        </button>
        <button
          className="p-5 m-3 rounded-md bg-gray-400 hover:bg-gray-600 w-36 h-32 text-2xl font-bold"
        >
          수필의 방
        </button>
        <button
          className="p-5 m-3 rounded-md bg-gray-400 hover:bg-gray-600 w-36 h-32 text-2xl font-bold"
        >
          리뷰의 방
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

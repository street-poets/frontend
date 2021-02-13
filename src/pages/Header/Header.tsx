import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Header() {
  return (
      <div className="flex h-5vh bg-gray-200 items-center">
        <Link to="/" className="p-3 m-1">글의 집</Link>
        <div className="ml-auto justify-end">
          <button
            className="p-2 m-1 rounded-lg bg-gray-200 hover:bg-gray-400 w-15 h-10 font-size-5 font-bold"
          >
            사랑방
          </button>
          <button
            className="p-2 m-1 rounded-lg bg-gray-200 hover:bg-gray-400 w-15 h-10 font-size-5 font-bold"
          >
            내 방
          </button>
          <button
            className="p-2 m-1 rounded-lg bg-gray-200 hover:bg-gray-400 w-15 h-10 font-size-5 font-bold"
          >
            퇴 실
          </button>
        </div>
      </div>
  );
}

export default Header;

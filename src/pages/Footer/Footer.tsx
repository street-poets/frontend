import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Footer() {
  return (
      <div className="flex h-5vh ml-0 justify-end bg-gray-200">
        <Link to="/AccessTerms" className="p-2 mx-2">이용약관</Link>
        <Link to="/PrivacyPolicy" className="mx-2">개인정보<br />처리방침</Link>
      </div>
  );
}

export default Footer;

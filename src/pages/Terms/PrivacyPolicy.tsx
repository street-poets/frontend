import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className="h-90vh bg-white">
          PrivacyPolicy
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

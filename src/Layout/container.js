import React from 'react';

// Import needed components
import Header from './header';
import Footer from './footer';

// Import needed styles
import './container.scss';
import '../../assets/fonts/roboto.css';

export default({ children }) =>
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>;

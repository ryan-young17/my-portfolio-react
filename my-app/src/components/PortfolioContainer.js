import React, { useState } from 'react';
import NavTabs from './NavTabs';
import FooterTabs from './Footer';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='bg-light'>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='min-vh-100 bg-light'>{renderPage()}</div>
      <FooterTabs />
    </div>
  );
}


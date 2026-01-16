import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';
import WhatsAppButton from '../common/WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

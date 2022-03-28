import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';

const Layout = () => {
  return (
      <>
        <Navbar />
        <Sidebar />
        <Footer/>
      </>
  );
};

export default Layout;

import React from 'react'
import './Layout.css'
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="Layout">
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
}

export default Layout
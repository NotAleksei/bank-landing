import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import './MainPage.css';
import Services from '../Services/Services';

const MainPage: React.FC = () => {
  return (
    <div className='main-page'>
      <Header/>
      <Carousel/>
      <Services/>
    </div>
  );
}

export default MainPage;

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className=''>
      <Header/>
      <Carousel/>
    </div>
  );
}

export default MainPage;

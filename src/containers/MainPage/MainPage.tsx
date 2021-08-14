import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import './MainPage.css';
import Services from '../Services/Services';
import CreditCalc from '../CreditCalc/CreditCalc';

const MainPage: React.FC = () => {
  return (
    <div className='main-page'>
      <Header/>
      <Carousel/>
      <Services/>
      <CreditCalc/>
    </div>
  );
}

export default MainPage;

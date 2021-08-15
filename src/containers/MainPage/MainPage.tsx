import React from 'react';
import './MainPage.css';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import CreditCalc from '../CreditCalc/CreditCalc';
import OfficesMap from '../OfficesMap/OfficesMap';
import Footer from '../Footer/Footer';

const MainPage: React.FC = () => {
  return (
    <div className='main-page'>
      <Header/>
      <Carousel/>
      <Services/>
      <CreditCalc/>
      <OfficesMap/>
      <Footer/>
    </div>
  );
}

export default MainPage;

import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Carousel.css';
import slide1 from '@upload/carousel/slide_1.png';
import slide2 from '@upload/carousel/slide_2.png';
import slide3 from '@upload/carousel/slide_3.png';
import blackCard from '@upload/carousel/blackСard.png';
import whiteCard from '@upload/carousel/whiteCard.png';
import petr from '@upload/carousel/petr.png';
import alice from '@upload/carousel/alice.png';
import Button from '../../components/Button/Button';

const SLIDES = [{
    background: slide1,
    title: 'Лига Банк',
    description: 'Кредиты на любой случай',
    bannerImg: 'cards',
    showFunctionalBttn: true,
    caption: 'Рассчитать кредит',
    key: uuidv4()
  }, {
    background: slide2,
    darkMode: true,
    title: 'Лига Банк',
    description: 'Ваша уверенность в завтрашнем дне',
    bannerImg: petr,
    key: uuidv4()
  }, {
    background: slide3,
    darkMode: true,
    title: 'Лига Банк',
    description: 'Всегда рядом',
    bannerImg: alice,
    showFunctionalBttn: true,
    caption: 'Найти отделение',
    key: uuidv4()
  }
]

const Carousel: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const slideTimer = useRef<number>();

  useEffect(() => {
    slideTimer.current = window.setInterval(() => changeSlide(), 5000);
    return () => clearInterval(slideTimer.current);
  });

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
  }

  function changeSlide(slideNumber?: number): void {
    if (slideNumber) {
      clearInterval(slideTimer.current)
      slideTimer.current = window.setInterval(() => changeSlide(), 5000);
    }
    const autoChangedSlide = currentSlide === SLIDES.length ? 1 : currentSlide + 1;
    const newSlide = slideNumber || autoChangedSlide;
    setCurrentSlide(newSlide);
  }

  const slideArray = SLIDES.map(slide => {
    return <div key={slide.key} className="slide">
      <img className="slide__background" src={slide.background} alt=""></img>
      {slide.bannerImg === 'cards'
        ? <div>
            <img className="slide__black-card" src={blackCard} alt=""></img>
            <img className="slide__white-card" src={whiteCard} alt=""></img>
          </div>
        : <img className="slide__person" src={slide.bannerImg} alt=""></img>
      }
      <div className="slide__content">
        <h1 className={`slide__title ${slide.darkMode ? 'slide__title_dark' : ''}`}>{slide.title}</h1>
        <p className={`slide__description  ${slide.darkMode ? 'slide__description_dark' : ''}`}>{slide.description}</p>
        { slide.showFunctionalBttn && <Button caption={slide.caption} color={slide.darkMode ? 'dark' : 'light'} size="m" onClick={ (event) => handleClick(event) }/> }
      </div>
    </div>
  })

  const setNavigation = (currentSlide: number): JSX.Element[] => {
    return SLIDES.map((slide, i) => <span key={slide.key} className={`carousel__dot ${i + 1 === currentSlide ? 'carousel__dot_active' : ''}`} onClick={() => changeSlide(i + 1)}></span>);
  }

  return (
    <div className="carousel">
      <div className={`carousel__tape carousel__tape_position${currentSlide}`}>
        {slideArray}
      </div>
      <div className="carousel__navigation">
        {setNavigation(currentSlide)}
      </div>
    </div>
  );
}

export default Carousel;

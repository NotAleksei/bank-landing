import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import slide1 from '../../img/upload/carousel/slide_1.png';
import slide2 from '../../img/upload/carousel/slide_2.png';
import slide3 from '../../img/upload/carousel/slide_3.png';
import blackCard from '../../img/upload/carousel/blackСard.png';
import whiteCard from '../../img/upload/carousel/whiteCard.png';
import petr from '../../img/upload/carousel/petr.png';
import alice from '../../img/upload/carousel/alice.png';
import Button from '../../components/Button/Button';

const SLIDES = [{
    background: slide1,
    title: 'Лига Банк',
    description: 'Кредиты на любой случай',
    bannerImg: 'cards',
    showFunctionalBttn: true,
    caption: 'Рассчитать кредит'
  }, {
    background: slide2,
    darkMode: true,
    title: 'Лига Банк',
    description: 'Ваша уверенность в завтрашнем дне',
    bannerImg: petr,
  }, {
    background: slide3,
    darkMode: true,
    title: 'Лига Банк',
    description: 'Всегда рядом',
    bannerImg: alice,
    showFunctionalBttn: true,
    caption: 'Найти отделение'
  }
]

const Carousel: React.FC = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const slideTimer = useRef<number>();

  useEffect(() => {
    //  FIXME: Использую window, для корректного типа useRef.
    slideTimer.current = window.setInterval(() => changeSlide(), 5000);
    return () => clearInterval(slideTimer.current);
  });

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
  }

  function changeSlide(slideNumber?: number): void {
    if (slideNumber) {
      clearInterval(slideTimer.current)
      slideTimer.current = window.setInterval(() => changeSlide(), 6000);
    }
    const autoChangedSlide = currentSlide === SLIDES.length ? 1 : currentSlide + 1;
    const newSlide = slideNumber || autoChangedSlide;
    setCurrentSlide(newSlide);
  }

  const slideArray = SLIDES.map(slide => {
    return <div className="carousel__slide">
      <img className="carousel__slide_background" src={slide.background} alt=""></img>
      {slide.bannerImg === 'cards'
        ? <div>
            <img className="carousel__slide_black-card" src={blackCard} alt=""></img>
            <img className="carousel__slide_white-card" src={whiteCard} alt=""></img>
          </div>
        : <img className="carousel__slide_person" src={slide.bannerImg} alt=""></img>
      }
      <div className="carousel__slide_content">
        <h1 className={`carousel__slide_title ${slide.darkMode ? 'carousel__slide_title-dark' : ''}`}>{slide.title}</h1>
        <p className={`carousel__slide_description  ${slide.darkMode ? 'carousel__slide_description-dark' : ''}`}>{slide.description}</p>
        { slide.showFunctionalBttn && <Button caption={slide.caption} color={slide.darkMode ? 'dark' : 'light'} size="m" onClick={ (event) => handleClick(event) }/> }
      </div>
    </div>
  })

  const setBullets = (currentSlide: number): JSX.Element[] => {
    return SLIDES.map((slide, i) => <span className={`carousel__bullet ${i + 1 === currentSlide ? 'carousel__bullet_active' : ''}`} onClick={() => changeSlide(i + 1)}></span>);
  }

  // TODO: писать сразу в стили, а не править классы.

  return (
    <div className="carousel">
      <div className={`carousel__slide-container carousel__slide-container_slide${currentSlide}`}>
        {slideArray}
      </div>
      <div className="carousel__bullet-wrapper">
        {setBullets(currentSlide)}
      </div>
    </div>
  );
}

export default Carousel;

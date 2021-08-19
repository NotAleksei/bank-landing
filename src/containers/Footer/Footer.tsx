import React from 'react'
import './Footer.css';
import logo from '../../img/icon/logo.svg'
import phone from '../../img/icon/s_phone.svg'
import handset from '../../img/icon/handset.svg'
import facebook from '../../img/icon/facebook.svg'
import instagram from '../../img/icon/instagram.svg'
import twitter from '../../img/icon/twitter.svg'
import youtube from '../../img/icon/youtube.svg'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__info-block">
        <div>
          <div className="footer__logo">
            <img className="footer__logo-img" src={logo} alt=""/>
            <div className="footer__logo-label">ЛИГА Банк</div>
          </div>
          <p>
            150015, г. Москва, ул. Московская, д. 32<br/>
            Генеральная лицензия Банка России №1050<br/>
            Ⓒ Лига Банк, 2019
          </p>
        </div>
        <div className="footer__tabs">
          <span>Услуги</span>
          <span>Рассчитать кредит</span>
          <span>Контакты</span>
          <span>Задать вопрос</span>
        </div>
        <div className="footer__contacts">
          <img className="footer__phone" src={phone} alt=""/>
          <div>
            <span className="footer__number">*0904</span>
            <p>Бесплатно для абонентов МТС,<br/>Билайн, Мегафон, Теле2</p>
          </div>
        </div>
        <div className="footer__contacts">
          <img className="footer__phone" src={handset} alt=""/>
          <div>
            <span className="footer__number">8 800 111 22 33</span>
            <p>Бесплатный для всех<br/>городов России</p>
          </div>
        </div>
        <div className="footer__social">
          <img className="" src={facebook} alt=""/>
          <img className="" src={instagram} alt=""/>
          <img className="" src={twitter} alt=""/>
          <img className="" src={youtube} alt=""/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

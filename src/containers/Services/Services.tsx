import React, { useState, useEffect, useRef } from 'react';
import vault from '../../img/icon/vault.svg';
import cards from '../../img/icon/cards.svg';
import security from '../../img/icon/security.svg';
import phoneLogo from '../../img/icon/phone.svg';
import checkbox from '../../img/icon/checkbox.svg';
import piggybank from '../../img/upload/services/piggybank.png';
import car from '../../img/upload/services/car.png';
import lock from '../../img/upload/services/lock.png';
import phone from '../../img/upload/services/phone.png';
import './Services.css';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
import Button from '../../components/Button/Button';

const TABS = [{
    caption: 'Вклады',
    logo: vault,
    title: 'Вклады Лига Банка – это выгодная \nинвестиция в свое будущее',
    checkText: ['Проценты по вкладам до 7%', 'Разнообразные условия', 'Возможность ежемесячной капитализации \nили вывод процентов на банковскую карту'],
    bttnCaption: 'Узнать подробнее',
    tabImg: piggybank
  }, {
    caption: 'Кредиты',
    logo: cards,
    title: 'Лига Банк выдает кредиты \nпод любые цели',
    checkText: ['Ипотечный кредит', 'Автокредит', 'Потребительский кредит'],
    additionalInfo: 'Рассчитайте ежемесячный платеж \nи ставку по кредиту воспользовавшись \nнашим кредитным калькулятором',
    tabImg: car
  }, {
    caption: 'Страхование',
    logo: security,
    title: 'Лига Страхование — застрахуем \nвсе что захотите',
    checkText: ['Автомобильное страхование', 'Страхование жизни и здоровья', 'Страхование недвижимости'],
    bttnCaption: 'Узнать подробнее',
    tabImg: lock
  }, {
    caption: 'Онлайн-сервисы',
    logo: phoneLogo,
    title: 'Лига Банк — это огромное количество \nонлайн-сервисов для вашего удобства',
    checkText: ['Мобильный банк, \nкоторый всегда под рукой', 'Приложение Лига-проездной позволит \nвам оплачивать билеты по всему миру'],
    bttnCaption: 'Узнать подробнее',
    tabImg: phone
  }
]

const Services: React.FC = () => {

  const [activeTab, setActiveTab] = useState(TABS[0].caption);
  

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
  }

  function setServiceTabs(activeTab: string): JSX.Element[] {
    return TABS.map(tab => <ServiceTab caption={tab.caption} logo={tab.logo} isActive={activeTab === tab.caption} changeTab={(tab) => setActiveTab(tab)}/>);
  }

  function configChecboxes(checkText: string[]): JSX.Element[] {
    return checkText.map(text => {
      return <div className="services__tab_checkbox">
          <img src={checkbox} alt=""></img>
          <span className="services__tab_checkbox-label">{text}</span>
        </div>
    })
  }

  
  function setTab(activeTab: string): JSX.Element {
    for (let i = 0; i < TABS.length; i++) {
      const tab = TABS[i]
      if (tab.caption === activeTab) {
        return <div className="services__tab">
            <div className="services__tab-wrapper">
              <h2 className="services__tab_title">{tab.title}</h2>
              <div className="services__tab_checkbox-wrapper">
                {configChecboxes(tab.checkText)}
              </div>
              {tab.additionalInfo && <span className="services__tab_additional">{tab.additionalInfo}</span>}
              {tab.bttnCaption && <Button caption={tab.bttnCaption} color="dark" size="m" onClick={(event) => handleClick(event)}/>}
            </div>
            <img className="services__tab_img" src={tab.tabImg} alt=""></img>
          </div>
      }
    }
    return <div></div>
  }

  return (
    <div className="services">
      <div className="services__tabs-container">
        {setServiceTabs(activeTab)}
      </div>
      {setTab(activeTab)}
    </div>
  );
}

export default Services;

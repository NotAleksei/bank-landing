import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ICheckText } from './IServices'
import './Services.css';
import ServiceTab from '../../components/ServiceTab/ServiceTab';
import Button from '../../components/Button/Button';
import vault from '@icon/vault.svg';
import cards from '@icon/cards.svg';
import security from '@icon/security.svg';
import phoneLogo from '@icon/phone.svg';
import checkbox from '@icon/checkbox.svg';
import piggybank from '@upload/services/piggybank.png';
import car from '@upload/services/car.png';
import lock from '@upload/services/lock.png';
import phone from '@upload/services/phone.png';

const TABS = [{
    caption: 'Вклады',
    logo: vault,
    title: 'Вклады Лига Банка – это выгодная \nинвестиция в свое будущее',
    checkText: [{
      caption: 'Проценты по вкладам до 7%',
      key: uuidv4()
    }, {
      caption: 'Разнообразные условия',
      key: uuidv4()
    }, {
      caption: 'Возможность ежемесячной капитализации \nили вывод процентов на банковскую карту',
      key: uuidv4()
    }],
    bttnCaption: 'Узнать подробнее',
    tabImg: piggybank,
    key: uuidv4()
  }, {
    caption: 'Кредиты',
    logo: cards,
    title: 'Лига Банк выдает кредиты \nпод любые цели',
    checkText: [{
      caption: 'Ипотечный кредит',
      key: uuidv4()
    }, {
      caption: 'Автокредит',
      key: uuidv4()
    }, {
      caption: 'Потребительский кредит',
      key: uuidv4()
    }],
    additionalInfo: 'Рассчитайте ежемесячный платеж \nи ставку по кредиту воспользовавшись \nнашим кредитным калькулятором',
    tabImg: car,
    key: uuidv4()
  }, {
    caption: 'Страхование',
    logo: security,
    title: 'Лига Страхование — застрахуем \nвсе что захотите',
    checkText: [{
      caption: 'Автомобильное страхование',
      key: uuidv4()
    }, {
      caption: 'Страхование жизни и здоровья',
      key: uuidv4()
    }, {
      caption: 'Страхование недвижимости',
      key: uuidv4()
    }],
    bttnCaption: 'Узнать подробнее',
    tabImg: lock,
    key: uuidv4()
  }, {
    caption: 'Онлайн-сервисы',
    logo: phoneLogo,
    title: 'Лига Банк — это огромное количество \nонлайн-сервисов для вашего удобства',
    checkText: [{
      caption: 'Мобильный банк, \nкоторый всегда под рукой',
      key: uuidv4()
    }, {
      caption: 'Приложение Лига-проездной позволит \nвам оплачивать билеты по всему миру',
      key: uuidv4()
    }],
    bttnCaption: 'Узнать подробнее',
    tabImg: phone,
    key: uuidv4()
  }
]

const Services: React.FC = () => {

  const [activeTab, setActiveTab] = useState(TABS[0].caption);
  

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
  }

  function setServiceTabs(activeTab: string): JSX.Element[] {
    return TABS.map(tab => <ServiceTab key={tab.key} caption={tab.caption} logo={tab.logo} isActive={activeTab === tab.caption} changeTab={(tab) => setActiveTab(tab)}/>);
  }

  function configChecboxes(checkText: ICheckText[]): JSX.Element[] {
    return checkText.map(text => {
      return <div key={text.key} className="services__checkbox">
          <img src={checkbox} alt=""></img>
          <span className="services__checkbox-label">{text.caption}</span>
        </div>
    })
  }

  
  function setTab(activeTab: string): JSX.Element {
    for (let i = 0; i < TABS.length; i++) {
      const tab = TABS[i];
      if (tab.caption === activeTab) {
        return <div className="services__tab">
            <div className="services__info-block">
              <h2 className="services__title">{tab.title}</h2>
              <div className="services__checkboxes">
                {configChecboxes(tab.checkText)}
              </div>
              {tab.additionalInfo && <span className="services__additional">{tab.additionalInfo}</span>}
              {tab.bttnCaption && <Button caption={tab.bttnCaption} color="dark" size="m" onClick={handleClick}/>}
            </div>
            <img className="services__img" src={tab.tabImg} alt=""></img>
          </div>
      }
    }
    return <div></div>
  }

  return (
    <div className="services">
      <div className="services__tabs">
        {setServiceTabs(activeTab)}
      </div>
      {setTab(activeTab)}
    </div>
  );
}

export default Services;

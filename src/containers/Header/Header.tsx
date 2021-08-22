import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Header.css';
import logo from '../../img/icon/logo.svg'
import login from '../../img/icon/login.svg'
import TabsButton from '../../components/TabsButton/TabsButton';

const TABS = [{
  caption: 'Услуги',
  key: uuidv4()
}, {
  caption: 'Рассчитать кредит',
  key: uuidv4()
}, {
  caption: 'Конвертер валют',
  key: uuidv4()
}, {
  caption: 'Контакты',
  key: uuidv4()
}]

const Header: React.FC = () => {

  const tabsBtn = TABS.map(tab => <TabsButton key={tab.key} caption={ tab.caption }/>)

  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src={logo} alt=""/>
        <div className="header__logo-label">ЛИГА Банк</div>
      </div>
      <div className="header__tab-buttons">
        {tabsBtn}
      </div>
      <div className="header__login">
        <img className="header__login-img" src={login} alt=""/>
        <div className="header__login-label">Войти в интернет банк</div>
      </div>
    </header>
  );
}

export default Header;

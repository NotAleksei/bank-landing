import './Header.css';
import logo from '../../img/icon/logo.svg'
import login from '../../img/icon/login.svg'
import TabsButton from '../../components/TabsButton/TabsButton';

const Header: React.FC = () => {

  const tabsBtnCaptions = ['Услуги', 'Рассчитать кредит', 'Конвертер валют', 'Контакты'];

  const tabsBtn = tabsBtnCaptions.map(caption => <TabsButton caption={ caption }/>)

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
        <div className="header__login_label">Войти в интернет банк</div>
      </div>
    </header>
  );
}

export default Header;

import './Header.css';
import logo from '../../img/icon/logo.svg'
import TabsButton from '../../components/TabsButton/TabsButton';

const Header: React.FC = () => {

  const tabsBtnCaptions = ['Услуги', 'Рассчитать кредит', 'Ковертер валют', 'Контакты'];

  const tabsBtn = tabsBtnCaptions.map(caption => <TabsButton caption={ caption }/>)

  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo_img" src={logo} alt=""/>
        <div className="header__logo_label">ЛИГА Банк</div>
        <div className="header__logo_tab-buttons">
          {tabsBtn}
        </div>
      </div>
    </div>
  );
}

export default Header;

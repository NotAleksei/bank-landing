import './App.css';
import Header from './containers/Header/Header';
import Carousel from './containers/Carousel/Carousel';
import Services from './containers/Services/Services';
import CreditCalc from './containers/CreditCalc/CreditCalc';
import OfficesMap from './containers/OfficesMap/OfficesMap';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="main-page">
      <Header/>
      <Carousel/>
      <Services/>
      <CreditCalc/>
      <OfficesMap/>
      <Footer/>
    </div>
  );
}

export default App;

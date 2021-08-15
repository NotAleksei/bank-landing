import React, { useState, useEffect } from 'react';
import InputCounter from '../../components/InputCounter/InputCounter';
import arrowDown from '../../img/icon/arrow_down.svg';
import arrowUp from '../../img/icon/arrow_up.svg';
import './CreditCalc.css';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';

const CREDIT_TYPES: {
  [key: string]: string
} = {
  default: 'Выберите цель кредита',
  mortgage: 'Ипотечное кредитование',
  carCredit: 'Автомобильное кредитование'
}


const CreditCalc: React.FC = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCalc, setSelectedCalc] = useState('default');
  const [creditValue, setCreditValue] = useState(2000000);
  const [firstPay, setFirstPay] = useState(200000);
  const [firstPayPercent, setFirstPayPercent] = useState(10);
  const [creditPeriod, setCreditPeriod] = useState(5);
  const [monthPay, setMonthPay] = useState(0);

  useEffect(() => {
    const monthPercent = 9.6 / (12 * 100);
    const monthPay = Math.round((creditValue - firstPay) * (monthPercent / (1 - Math.pow(1 + monthPercent, -creditPeriod * 12 - 1))));
    setMonthPay(monthPay);
  }, [creditValue, firstPay, creditPeriod])

  function handleDropdown(type?: string): void {
    setDropdownVisible(!isDropdownVisible);
    if (type) {
      setSelectedCalc(type)
    }
  }

  function updatePercentValue(value: number): void {
    let percentValue = +((value * 100 / creditValue).toFixed(1));
    if (percentValue < 10) {
      percentValue = 10;
    } else if (percentValue > 100) {
      percentValue = 100;
    } 
    setFirstPayPercent(percentValue);
    setFirstPay(value);
  }

  function updateCreditValue(value: number): void {
    setCreditValue(value);
    setFirstPay(Math.round(value * firstPayPercent / 100));
  }

  function updateFirstPay(value: number): void {
    setFirstPayPercent(value);
    setFirstPay(Math.round(value * creditValue / 100));
  }

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
  }

  return (
    <div className="credit-calc">
      <h1 className="credit-calc__label">Кредитный калькулятор</h1>
      <div className="credit-calc__container">
        <div className="credit-calc__left-col">
          <h2 className="credit-calc__step">Шаг 1. Цель кредита</h2>
          <div className="credit-calc__selector">
            <div className={`credit-calc__input-block credit-calc__selector_choosen ${isDropdownVisible ? 'credit-calc__selector_expanded' : ''}`} onClick={() => {handleDropdown()}}>
              <span className="credit-calc__selector_label">{CREDIT_TYPES[selectedCalc]}</span>
              <img src={isDropdownVisible ? arrowUp : arrowDown} alt=""/>
            </div>
            {isDropdownVisible && <div className="credit-calc__drop-down">
                <div className="credit-calc__input-block credit-calc__drop-down_element" onClick={() => {handleDropdown('mortgage')}}>
                  {CREDIT_TYPES.mortgage}
                </div>
                <div className="credit-calc__input-block credit-calc__drop-down_element" onClick={() => {handleDropdown('carCredit')}}>
                  {CREDIT_TYPES.carCredit}
                </div>
              </div>
            }
          </div>
          {selectedCalc !== 'default' && <div>
            <h2 className="credit-calc__step">Шаг 2. Введите параметры кредита</h2>
            <InputCounter
              label="Стоимость недвижимости"
              inputValue={creditValue}
              isShowChangeButtons={true}
              step={10000}
              minValue={1200000}
              maxValue={25000000}
              additionalText="От 1 200 000  до 25 000 000 рублей"
              onValueChanged={updateCreditValue}
            />
            <InputCounter
              label="Первоначальный взнос"
              inputValue={firstPay}
              maxValue={creditValue}
              isShowChangeButtons={false}
              step={1}
              onValueChanged={updatePercentValue}
            />
            <Slider
              thumbValue={firstPayPercent}
              minValue={10}
              maxValue={100}
              step={1}
              sliderLabel="%"
              showRightLabel={false}
              onSliderChanged={updateFirstPay}
            />
            <InputCounter
              label="Срок кредитования"
              inputValue={creditPeriod}
              isShowChangeButtons={false}
              step={1}
              minValue={5}
              maxValue={30}
              onValueChanged={setCreditPeriod}
            />
            <Slider
              thumbValue={creditPeriod}
              minValue={5}
              maxValue={30}
              step={1}
              sliderLabel="лет"
              showRightLabel={true}
              onSliderChanged={setCreditPeriod}
            />
          </div>}
        </div>
        {selectedCalc !== 'default' && <div className="credit-calc__right-col">
          <h2 className="credit-calc__step">Наше предложение</h2>
          <div className="credit-calc__offer_info">
            <div>
              <div className="credit-calc__offer_value">{creditValue.toLocaleString('ru-RU')} рублей</div>
              <div>Сумма ипотеки</div>
            </div>
            <div>
              <div className="credit-calc__offer_value">9,60%</div>
              <div>Процентная ставка</div>
            </div>
          </div>
          <div className="credit-calc__offer_info">
            <div>
              <div className="credit-calc__offer_value">{monthPay.toLocaleString('ru-RU')} рублей</div>
              <div>Ежемесячный платеж</div>
            </div>
            <div>
              <div className="credit-calc__offer_value">{(monthPay + 25000).toLocaleString('ru-RU')} рублей</div>
              <div>Необходимый доход</div>
            </div>
          </div>
          <Button caption="Оформить заявку" color="dark" size="m" onClick={handleClick}/>
        </div>}
      </div>
    </div>
  );
}

export default CreditCalc;

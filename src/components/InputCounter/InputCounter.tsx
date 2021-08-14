import React, { useState, useEffect } from 'react';
import plus from '../../img/icon/plus.svg';
import minus from '../../img/icon/minus.svg';
import './InputCounter.css';
import { IInputCounter } from './IInputCounter'

// const MIN_MORTGAGE = 1200000;
// const MAX_MORTGAGE = 25000000;

const InputCounter: React.FC<IInputCounter> = (props) => {

  const { inputValue, onValueChanged } = props;
  const [currentInputValue, setCurrentInputValue] = useState(inputValue);

  useEffect(() => {
    setCurrentInputValue(inputValue)
  }, [inputValue]);

  function changeBttnHandler(type?: string): void {
    const value = type === 'increase'
      ? +currentInputValue + props.step
      : +currentInputValue - props.step;
      if ((props.minValue && value < props.minValue) || (props.maxValue && value > props.maxValue)) {
        return;
      }
      setCurrentInputValue(value);
      onValueChanged(value);
  }

  function changeInputValue(ev: React.ChangeEvent<HTMLInputElement>): void {
    const value = +ev.target.value.trim().replace(/\s/g, '');
    if (!isNaN(value) && typeof value === 'number') {
      // Запишем текущее значение инпута в стейт
      setCurrentInputValue(value);
    }
  }

  function inputValueChanged(ev: React.ChangeEvent<HTMLInputElement>): void {
    // Проверка на допустимые максимальные и минимальные значения
    if ((props.minValue && currentInputValue < props.minValue) || (props.maxValue && currentInputValue > props.maxValue)) {
      // Запишем предыдущее значение инпута в стейт
      setCurrentInputValue(inputValue);
      return;
    }
    onValueChanged(currentInputValue);
  }

  // function validateInput(): void {
  //     if (inputValue <= MIN_MORTGAGE || inputValue >= MAX_MORTGAGE) {
  //       setIsValid(false);
  //     } else {
  //       setIsValid(true);
  //     }
  // }

  return (
    <div className="input-counter">
      <span className="input-counter__label">{props.label}</span>
      <div className="input-counter__input-wrapper">
        {props.isShowChangeButtons && 
          <div className="input-counter__change-btn" onClick={() => changeBttnHandler()}>
            <img src={minus} alt=""/>
          </div>
        }
        <input
          maxLength={15}
          value={currentInputValue.toLocaleString('ru-RU')}
          onChange={changeInputValue}
          onBlur={inputValueChanged}
        />
        {props.isShowChangeButtons && 
          <div className="input-counter__change-btn" onClick={() => changeBttnHandler('increase')}>
            <img src={plus} alt=""/>
          </div>
        }
      </div>
      {props.additionalText && <span className="input-counter__additional">{props.additionalText}</span>}
    </div>
  );
}

export default InputCounter;

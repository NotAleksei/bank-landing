import React, { useState, useEffect } from 'react';
import plus from '@icon/plus.svg';
import minus from '@icon/minus.svg';
import './InputCounter.css';
import { IInputCounter } from './IInputCounter'

const InputCounter: React.FC<IInputCounter> = (props) => {

  const {
    inputValue,
    onValueChanged,
    step,
    minValue,
    maxValue,
    label,
    isShowChangeButtons,
    additionalText
  } = props;
  const [currentInputValue, setCurrentInputValue] = useState(inputValue);

  useEffect(() => {
    setCurrentInputValue(inputValue)
  }, [inputValue]);

  function changeBttnHandler(type?: string): void {
    const value = type === 'increase'
      ? +currentInputValue + step
      : +currentInputValue - step;

      if ((minValue && value < minValue) || (maxValue && value > maxValue)) {
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
    if ((minValue && currentInputValue < minValue) || (maxValue && currentInputValue > maxValue)) {
      // Запишем предыдущее значение инпута в стейт
      setCurrentInputValue(inputValue);
      return;
    }
    onValueChanged(currentInputValue);
  }

  return (
    <div className="input-counter">
      <span className="input-counter__label">{label}</span>
      <div className="input-counter__input-wrapper">
        {isShowChangeButtons && 
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
        {isShowChangeButtons && 
          <div className="input-counter__change-btn" onClick={() => changeBttnHandler('increase')}>
            <img src={plus} alt=""/>
          </div>
        }
      </div>
      {additionalText && <span className="input-counter__additional">{additionalText}</span>}
    </div>
  );
}

export default InputCounter;

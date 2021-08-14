import React from 'react';
import './Slider.css';
import { ISlider } from './ISlider'

const Slider: React.FC<ISlider> = (props) => {

  const { thumbValue, minValue, maxValue } = props;

  function sliderChange(ev: React.ChangeEvent<HTMLInputElement>): void {
    const value = +ev.target.value;

    // Передаем текущее значение слайдера
    props.onSliderChanged(value);
  }

  function setThumbPosition(value: number): number {
    if (value > maxValue) {
      return 100;
    } else if (value < minValue) {
      return 0
    } else {
      return (value - minValue) * 100 / (maxValue - minValue);
    }
  }

  return (
    <div className="slider">
      <div className="slider__container">
        <input
          className="slider__thumb"
          type="range"
          min={minValue}
          max={maxValue}
          value={thumbValue}
          step={props.step}
          onChange={sliderChange}
        />
        <div className="slider__rail_container">
          <div className="slider__rail"></div>
          <div className="slider__track" style={{width: setThumbPosition(thumbValue) + '%'}}></div>
        </div>
      </div>
      <div className="slider__value_container">
        {props.sliderLabel && <div className="slider__value">{(props.showRightLabel ? minValue : thumbValue) + props.sliderLabel}</div>}
        {props.showRightLabel && props.sliderLabel && <div className="slider__value">{maxValue + props.sliderLabel}</div>}
      </div>
    </div>
  );
}

export default Slider;

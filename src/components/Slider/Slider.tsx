import React from 'react';
import './Slider.css';
import { ISlider } from './ISlider'

const MIN_POSITION = 0;
const MAX_POSITION = 100;

const Slider: React.FC<ISlider> = (props) => {

  const { thumbValue, minValue, maxValue } = props;

  function sliderChange(ev: React.ChangeEvent<HTMLInputElement>): void {
    const value = +ev.target.value;

    // Передаем текущее значение слайдера
    props.onSliderChanged(value);
  }

  function setThumbPosition(value: number): number {
    if (value > maxValue) {
      return MAX_POSITION;
    } else if (value < minValue) {
      return MIN_POSITION;
    } else {
      return (value - minValue) * MAX_POSITION / (maxValue - minValue);
    }
  }

  return (
    <div className="slider">
      <div className="slider__range">
        <input
          className="slider__thumb"
          type="range"
          min={minValue}
          max={maxValue}
          value={thumbValue}
          step={props.step}
          onChange={sliderChange}
        />
        <div className="slider__path">
          <div className="slider__rail"></div>
          <div className="slider__track" style={{width: setThumbPosition(thumbValue) + '%'}}></div>
        </div>
      </div>
      <div className="slider__value">
        {props.sliderLabel && <div>{(props.showRightLabel ? minValue : thumbValue) + props.sliderLabel}</div>}
        {props.showRightLabel && props.sliderLabel && <div>{maxValue + props.sliderLabel}</div>}
      </div>
    </div>
  );
}

export default Slider;

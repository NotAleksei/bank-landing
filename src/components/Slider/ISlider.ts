export interface ISlider {
    minValue: number;
    maxValue: number;
    step: number;
    thumbValue: number;
    sliderLabel?: string;
    showRightLabel?: boolean;
    onSliderChanged(value: number): void;
}
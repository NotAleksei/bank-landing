export interface IInputCounter {
  label: string;
  inputValue: number;
  isShowChangeButtons: boolean;
  step: number;
  minValue?: number;
  maxValue?: number;
  showRightLabel?: boolean
  additionalText?: string;
  onValueChanged(value: number): void;
}
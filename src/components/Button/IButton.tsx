export interface IButton {
  caption: string;
  color: string;
  size: string;
  onClick(event: React.MouseEvent<HTMLElement>): void;
}
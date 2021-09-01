import React from 'react';
import './Button.css';
import { IButton } from './IButton'

const Button: React.FC<IButton> = (props) => {

  const { color, size, caption, onClick } = props;

  return (
    <a className={`button button_${color} button_${size}`} href="#" onClick={onClick}>
      <span>{caption}</span>
    </a>
  );
}

export default Button;

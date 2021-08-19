import React from 'react';
import './Button.css';
import { IButton } from './IButton'

const Button: React.FC<IButton> = (props) => {

  return (
    <a className={`button button_${props.color} button_${props.size}`} href="#" onClick={props.onClick}>
      <span>{props.caption}</span>
    </a>
  );
}

export default Button;

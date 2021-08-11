import React from 'react';
import './Button.css';
import { IButton } from './IButton'

const Button: React.FC<IButton> = (props) => {

  return (
    <a className={`button button__color_${props.color} button__size_${props.size}`} href="#" onClick={(ev) => props.onClick(ev)}>
      <span>{props.caption}</span>
    </a>
  );
}

export default Button;

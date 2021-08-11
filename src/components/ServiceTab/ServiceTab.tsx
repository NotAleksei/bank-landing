import React from 'react';
import './ServiceTab.css';
import { IServiceTab } from './IServiceTab'

const ServiceTab: React.FC<IServiceTab> = (props) => {

  return (
    <div className={`service-tab ${props.isActive ? 'service-tab_active' : ''}`} onClick={() => props.changeTab(props.caption)}>
      <img src={props.logo} alt=""></img>
      <span className="service-tab__caption">{props.caption}</span>
    </div>
  );
}

export default ServiceTab;

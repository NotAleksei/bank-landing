import React from 'react';
import './ServiceTab.css';
import { IServiceTab } from './IServiceTab'

const ServiceTab: React.FC<IServiceTab> = (props) => {

  const { isActive, changeTab, logo, caption } = props;

  return (
    <div className={`service-tab ${isActive ? 'service-tab_active' : ''}`} onClick={() => changeTab(caption)}>
      <img src={logo} alt=""></img>
      <span className="service-tab__caption">{caption}</span>
    </div>
  );
}

export default ServiceTab;

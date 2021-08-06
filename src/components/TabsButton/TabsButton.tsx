import React from 'react';
import './TabsButton.css';
import { ITabsButton } from './ITabsButton'

const TabsButton: React.FC<ITabsButton> = (props) => {

  return (
    <div className="tabs-button">
      {props.caption}
    </div>
  );
}

export default TabsButton;

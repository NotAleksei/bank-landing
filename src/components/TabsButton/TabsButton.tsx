import React from 'react';
import './TabsButton.css';
import { ITabsButton } from './ITabsButton'

const TabsButton: React.FC<ITabsButton> = (props) => {

  const {caption} = props;

  return (
    <div className="tabs-button">
      {caption}
    </div>
  );
}

export default TabsButton;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import './NavigationDots/NavigationDots.scss';

interface NavigationDotsProps {
  active: string;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ active }) => {
  const [clickedDot, setClickedDot] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setClickedDot(item);
  };

  return (
    <div className="app__navigation">
      {['home', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`app__navigation-dot ${active === item ? 'active' : ''}`}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

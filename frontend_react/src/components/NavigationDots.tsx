/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';
import './NavigationDots/NavigationDots.scss';

interface NavigationDotsProps {
  active: string;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ active }) => {
  const [clickedDot, setClickedDot] = useState<string | null>(null);

  // URLのハッシュが変更されたときにclickedDotを更新
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setClickedDot(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClick = (item: string) => {
    setClickedDot(item);
    window.location.hash = item;
  };

  return (
    <div className="app__navigation">
      {['home', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`app__navigation-dot ${
            clickedDot === item ? 'active' : ''
          }`}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

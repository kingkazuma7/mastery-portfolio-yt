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

  const getDotClassName = (item: string) => {
    let className = 'app__navigation-dot';

    // クリックされたことがある場合
    if (clickedDot) {
      // クリックされたドットかどうか
      if (clickedDot === item) {
        className += ' active';
      }
    } else {
      // 初期状態
      // 親から渡されたactiveと一致するか
      if (active === item) {
        className += ' active';
      }
    }

    return className;
  };

  return (
    <div className="app__navigation">
      {['home', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={getDotClassName(item)}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

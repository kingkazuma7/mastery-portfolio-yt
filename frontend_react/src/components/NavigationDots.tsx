import React, { useState } from 'react';

const NavigationDots = () => {
  const [active, setActive] = useState('home');

  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          key={item + index}
          className={
            active === item ? 'app__navigation-dot active' : 'app__navigation-dot'
          }
          href={`#${item}`}
          onClick={() => setActive(item)}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;

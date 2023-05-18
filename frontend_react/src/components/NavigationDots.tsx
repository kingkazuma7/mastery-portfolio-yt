/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

const NavigationDots = ({ active }) => {
  console.log(active);

  return (
    <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
  );
};

export default NavigationDots;

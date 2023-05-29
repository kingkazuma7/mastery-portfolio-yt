/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

const NavigationDots = ({ active }) => {

  return (
    <div className="app__navigation">
    {['home', 'work', 'skills', 'contact'].map((item, index) => (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#7CB342' } : {}}
      />
    ))}
  </div>
  );
};

export default NavigationDots;

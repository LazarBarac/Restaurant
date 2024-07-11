import React from 'react';
import './MenuItem.scss';

const MenuItem = ({drinks}) => (
  <div className='menuItem'>
    {drinks.map((drink, index) => (
      <div key={drink.title + index}>
        <div className='menuItem--top'>
          <p className='p__cormorant title'>{drink.title}</p>
          <div className='line'></div>
          <p className='p__cormorant price'>{drink.price}</p>
        </div>
        <div className='menuItem--bottom'>
          <p className='p__opensans'>{drink.tags}</p>
        </div>
      </div>
    ))}
  </div>
);

export default MenuItem;

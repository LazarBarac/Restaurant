import React from 'react';
import {images, data} from "../../constants";
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.scss';

const SpecialMenu = () => (
  <div className='specialMenu' id='menu'>
    <div className='specialMenu__title'>
      <SubHeading title="Menu that fits you palatte" src={images.spoon} alt="spoon"/>
      <h2>Today’s Special</h2>
    </div>
    <div className='specialMenu__menu'>
      <div className='specialMenu__menu--wines'>
        <h3>Wine & Beer</h3>
        <MenuItem drinks={data.wines}/>
      </div>
      <div className='specialMenu__menu--img'>
        <img src={images.menu} alt="menu"/>
      </div>
      <div className='specialMenu__menu--coctails'>
        <h3>Cocktails</h3>
        <MenuItem drinks={data.cocktails}/>
      </div>
    </div>
    <div className='specialMenu__button'>
      <button style={{marginTop: "15px"}} type='button' className='custom__button'>View More</button>
    </div>
    
  </div>
);

export default SpecialMenu;

import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Header.scss';


const Header = () => (
  <div className='header app__wrapper' id='home'>
    <div className='app__wrapper--info'>
      <SubHeading src={images.spoon} title="Chase the new flavor" className="spoon__img" alt="spoon"/>
      <h2 className='header__h2'>The Key to Fine Dining</h2>
      <p className='p__opensans' style={{margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore menu</button>
    </div>
    <div className='app__wrapper--img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;

import React from 'react';

import SubHeading from "../SubHeading/SubHeading";
import {images} from "../../constants";

import './Newsletter.scss';

const Newsletter = () => (
  <div className='newsletter'>
    <div className='newsletter__heading'>
      <SubHeading title='Newsletter' src={images.spoon} alt="spoon"/>
      <h2 className='headtext__cormorant'>Subscribe to Our Newsletter</h2>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='newsletter__input'>
      <input type="email" placeholder='Enter your e-mail address' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;

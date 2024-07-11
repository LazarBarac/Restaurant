import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './AboutUs.scss';


const AboutUs = () => (
  <div className='about-us app__bg' id='about'>
    <div className='about-us__overlay'>
      <img src={images.G} alt="letter G"/>
    </div>


    <div className='about-us__content--about'>
      <SubHeading title="About Us" src={images.spoon} alt="spoon" className="mobile"/>
      <p className='p__opensans'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</span></p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
    
    <img src={images.knife} alt="knife" className='knife__img'/>

    <div className='about-us__content--history'>
      <SubHeading title="Our History" src={images.spoon} alt="spoon" className="mobile"/>
      <p className='p__opensans'><span>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</span></p>
      <button type='button' className='custom__button'>Know More</button>
    </div>

  </div>
);

export default AboutUs;

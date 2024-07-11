import React from 'react';

import {images, data} from "../../constants";
import { SubHeading, MenuItem } from '../../components';

import './Laurels.scss';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='awards__card'>
    <img src={imgUrl} alt="award" />
    <div className='award__content'>
      <p className='p__cormorant' style={{color: "DCCA87"}}> {title}</p>
      <p className='p__cormorant'> {subtitle}</p>
    </div>

  </div>
)

const Laurels = () => (
  <div className='wrapper app__bg' id='awards'>
    <div className='wrapper__info'>
      <SubHeading title="Awards & recognition" src={images.spoon} alt="spoon"/>
      <h2 className='headtext__cormorant '>Our Laurels</h2>
      <div className='awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>
    <div className='wrapper__img'>
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;

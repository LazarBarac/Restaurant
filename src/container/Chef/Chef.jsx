import React from 'react';
import { SubHeading } from '../../components';
import {images} from "../../constants";
import './Chef.scss';

const Chef = () => (
  <div className='app__bg app__wrapper'>
    <div className='wrapper__img wrapper__img--reverse'>
      <img src={images.chef} alt="chef"/>
    </div>
    <div className='wrapper__info'>
      <SubHeading className="wrapper__info--chefs-word" title="Chef’s Word" src={images.spoon} alt="spoon"/>
      <h2 className='headtext__cormorant'>What we believe in</h2>
      <div className='wrapper__info--chefs-quote'>
        <img src={images.quote} alt="quote" />
        <p className='wrapper__info--text p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <p className='wrapper__info--name p__opensans'>Kevin Luo</p>
      <p className='wrapper__info--ocupation p__opensans'>Chef & Founder</p>
      <img className="wraper__info--chefs-signature" src={images.sign} alt="signature"/>
    </div>
  </div>
);

export default Chef;

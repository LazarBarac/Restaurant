import React from 'react';
import {images} from '../../constants';

const SubHeading = (props) => (
  <div style={{marginBottom: "1rem"}}>
    <p className='p__cormorant'>{props.title}</p>
    <img src={props.src} className={props.className} alt={props.alt}/>
  </div>
);

export default SubHeading;

import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import {images} from "../../constants";
import { SubHeading } from '../../components';

import './Gallery.scss';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === "left"){
      current.scrollLeft -= 315;
    } else {
      current.scrollLeft += 315;
    }
  }


  return (
  <div className='gallery'>
    <div className='gallery__content'>
      <SubHeading title="Instagram"/>
      <h2 className='headtext__cormorant'>Photo Gallery</h2>
      <p className='p__opensans' style={{color: "#AAA", marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className='gallery__images'>
      <div className='gallery__images--container' ref={scrollRef}>
        {galleryImages.map ((image, index) => (
          <div className='gallery__images--card' key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery image"/>
            <BsInstagram className='gallery__instagram--icon'/>
          </div>
        ))}
      </div>
      <div className='gallery__images--arrows'>
        <BsArrowLeftShort className='arrow' onClick={()=>scroll("left")}/>
        <BsArrowRightShort className='arrow' onClick={()=>scroll("right")}/>
      </div>

    </div>
  </div>
  )
};

export default Gallery;

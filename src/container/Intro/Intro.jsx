import React, { useState, useRef } from 'react';

import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";

import {meal} from "../../constants";

import './Intro.scss';

const Intro = () => {

  const vidRef = useRef();

  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo ((prevPlayVideo) => !prevPlayVideo);
    
    if(playVideo){
      vidRef.current.pause();     
    } else {
      vidRef.current.play();
    }
  }

  return(  
  <div className='video'>
    <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted/>
    <div className= "video__overlay">
      <div className='video__overlay--circle' onClick={handleVideo}>
        {playVideo ? <BsPauseFill color='#fff' fontSize={30}/> : (<BsFillPlayFill color='#fff' fontSize={30}/>)}
      </div>
    </div>
  </div>
  )
};

export default Intro;

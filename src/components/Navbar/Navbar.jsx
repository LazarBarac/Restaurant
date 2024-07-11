import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from "../../constants/images.jsx"

import './Navbar.scss';


const Links = () => {
  return(
    <ul>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
)};


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className='navbar' id='navbar'>
    <div className='navbar__logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <div className='navbar__links'>
        <Links/>
    </div>
    <div className='navbar__login'>
      <div className='navbar__login--A'>
        <a href='#login' className='p__opensans'>Log in / Registration</a>
        <p></p>
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='navbar__smallscreen '>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className= "overlay slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
          <Links/>
        </div>
        )
        }

      </div>
    </div>
  </nav>
  )
};

export default Navbar;

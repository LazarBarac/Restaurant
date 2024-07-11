import React from 'react';

import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import {FooterOverlay, Newsletter} from "../../components"

import './Footer.scss';
import { images } from '../../constants';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => (
  <div className='footer'>
    <FooterOverlay/>
    <Newsletter/>
    <div className='footer__links'>
      <div className='footer__links-contacts'>
        <h3 className='footer__headtext'>Contact Us</h3>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='footer__links-logo'>
        <h2><a href="#navbar">Gerícht</a></h2>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" style={{marginTop: "15px", marginBottom: "15px"}} />
        <div className='social-media'>
          <FiFacebook style={{margin: "0 0.75rem"}}/>
          <FiTwitter style={{margin: "0 0.75rem"}}/>
          <FiInstagram style={{margin: "0 0.75rem"}}/>
        </div>
      </div>
      <div className='footer__links-work'>
        <h3>Working Hours</h3>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday: </p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

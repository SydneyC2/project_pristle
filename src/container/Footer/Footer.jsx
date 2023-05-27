import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>tyclemx@gmail.com</p>
        <p className='p__opensans'>+2348098626915</p>
        <p className='p__opensans'></p>
      </div>
      <div className='app__footer-links_logo'>
        <p className='p__opensans'>"The joy of producing"</p>
        <img src={images.spoon} alt='spoon' classname='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>      
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>8:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday:</p>
        <p className='p__opensans'>12:00 pm - 11:00 am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Pristle. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

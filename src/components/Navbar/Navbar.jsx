import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <nav className="app__navbar">
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#recipes">Recipes</a></li>
      <li className="p__opensans"><a href="#produce">Produce</a></li>
      <li className="p__opensans"><a href="#contact">Channel</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="/" className="p__opensans">Tyvetteh</a>
    <div />
    <a href="#contact" className="p__opensans">Learn</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#recipes">Recipes</a></li>
          <li className="p__opensans"><a href="#produce">Produce</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
       </ul>
      </div>
      )}
    </div>
  </nav>
  )
};

export default Navbar;

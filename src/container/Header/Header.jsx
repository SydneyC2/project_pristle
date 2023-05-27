import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title ="Capture the flavour" />
      <h1 className='app__header-h1'>Experience Natural</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Hkshfdkawefkcfk fkhewwefkh kefhkjwhfialwhef kahfkjwaeh arhaoerhr l rg rahghlhrrf roaerfgrle raargveha </p>
      <button type='button' className="custom__button"><a href='#recipes'>Explore Recipes</a></button>
    </div>

    <div className='app__wrapper_img'>
       <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;

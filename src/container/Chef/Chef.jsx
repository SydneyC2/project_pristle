import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What drives us</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Kjhsacnkhczbksc uskjdcksbcjbsd hsdkbcdskcsddscjkdhskc qoewurpiuewruerowpm vcdsnzvchjfsywejafdewoyisdnzcxmcbxzvn</p>
        </div>
        <p className='p__opensans'>sacnkhczbksc uskjdcksbcjbsd hsdkbcdskcsddscjkdhskc qoewurpiuewruerowpm vcdsnzvchjfsywejafdewoyisdnzcxmcbxzvn</p>
      </div>

      <div className='app__chef-sign'>
        <p>Tyna Clem</p>
        <p className='p__opensans'>Chef & Founder</p>
        
      </div>

    </div>
 </div>
);

export default Chef;

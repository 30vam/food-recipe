import PropTypes from 'prop-types'
import React from 'react';
import './Carousel.css'
import { useState } from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';

const CARDS = 5;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='w-full h-full p-6 text-center text-black transition-all duration-300 ease-in-out bg-white rounded-xl'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='flex items-center justify-center'>
      <div className='carousel'>
      {active > 0 && <button className='carousel-nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='carousel-nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
    </div>
  );
};

export { Card, Carousel }

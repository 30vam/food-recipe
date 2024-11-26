import React from 'react';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { rightArrowIcon } from '../images/icons';
import './Carousel.css'

const MAX_VISIBILITY = 3;

const Carousel = ({startingCard, children}) => {
  const [active, setActive] = useState(startingCard);
  const count = React.Children.count(children);
  
  return (
    <div className='flex items-center justify-center'>
      <div className='carousel'>
      {active > 0 && <button className='carousel-nav left' onClick={() => setActive(i => i - 1)}><img src={rightArrowIcon} /></button>}
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
      {active < count - 1 && <button className='carousel-nav right' onClick={() => setActive(i => i + 1)}><img src={rightArrowIcon} /></button>}
    </div>
    </div>
  );
};

Carousel.propTypes = {
  startingCard: PropTypes.number,
  children: PropTypes.node
}

export { Carousel }

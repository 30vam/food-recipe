import React from 'react';
import PropTypes from 'prop-types'
import { useState } from 'react';
import { rightArrowIcon } from '../images/icons';
import './Carousel.css'
import CarouselCardContainer from './CarouselCardContainer';

const Carousel = ({startingCard, maxVisibility, children}) => {
  const [activeCard, setActiveCard] = useState(startingCard);
  const count = React.Children.count(children);
  
  return (
    <div className='flex items-center justify-center'>
      <div className='carousel'>
      {activeCard > 0 && <button className='carousel-nav left' onClick={() => setActiveCard(i => i - 1)}><img src={rightArrowIcon} /></button>}
      {React.Children.map(children, (child, i) => (
        <CarouselCardContainer child={child} i={i} activeCard={activeCard} maxVisibility={maxVisibility}/>
      ))}
      {activeCard < count - 1 && <button className='carousel-nav right' onClick={() => setActiveCard(i => i + 1)}><img src={rightArrowIcon} /></button>}
    </div>
    </div>
  );
};

Carousel.propTypes = {
  startingCard: PropTypes.number,
  maxVisibility: PropTypes.number,
  children: PropTypes.node
}

export { Carousel }

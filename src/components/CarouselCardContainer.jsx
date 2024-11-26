import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import './Carousel.css'

const CarouselCardContainer = ({child, i, activeCard, maxVisibility}) => {
  const [isActive, setIsActive] = useState(false);

  const updateIsActive = () => {
    if (activeCard === i) 
      setIsActive(true);
    else
      setIsActive(false);
  }

  useEffect (() => {
    updateIsActive();
  });

  return (
    <div className={`card-container overflow-hidden rounded-[3rem] hover:rounded-[2rem] transition-all hover:border-orange-400 ${ ((Math.abs(activeCard - i) > maxVisibility) || !isActive) ? 'hidden md:block' : 'block' } ${ isActive && 'md:border-4 border-2' }`} style={{
      '--active': i === activeCard ? 1 : 0,
      '--offset': (activeCard - i) / 3,
      '--direction': Math.sign(activeCard - i),
      '--abs-offset': Math.abs(activeCard - i) / 3,
      'pointerEvents': activeCard === i ? 'auto' : 'none',
      'opacity': Math.abs(activeCard - i) >= maxVisibility ? '0' : '1',
    }}>
    {child}
  </div>
  )
}

CarouselCardContainer.propTypes = {
  child: PropTypes.node,
  i: PropTypes.number,
  activeCard: PropTypes.number,
  maxVisibility: PropTypes.number
}

export default CarouselCardContainer
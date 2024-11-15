import PropTypes from 'prop-types'
import { useState } from 'react';
import './HamburgerMenu.css'

const HamburgerMenu = ({styleClass, ulMenu}) => {
  // State for toggling on mobile
  const [isVisible, setIsVisible] = useState(false);

  // Event Handlers
  const clickHandler = () => {
    setIsVisible(prevIsVisible => !prevIsVisible); // Uses update function
  }

  return (
    <div className='md:hidden'>
      <input type="checkbox" role="button" aria-label="Display the menu" onClick={clickHandler} 
      className={`${styleClass} z-30 relative`}></input>

      <div className={`${isVisible ? 'flex opacity-75' : 'hidden opacity-0'} absolute top-0 right-0 z-20 w-full h-dvh px-4 bg-black transition-opacity ease-out`}>

      </div>
    </div>
  )
}

HamburgerMenu.propTypes = {
  styleClass: PropTypes.string
}

export default HamburgerMenu
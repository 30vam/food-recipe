import PropTypes from 'prop-types'
import { useState } from 'react';
import './HamburgerMenu.css'

const HamburgerMenu = ({styleClass}) => {
  // State for toggling on mobile
  const [isVisible, setIsVisible] = useState(false);

  // Event Handlers
  const clickHandler = () => {
    setIsVisible(prevIsVisible => !prevIsVisible); // Uses update function
  }

  return (
    <>
      <input type="checkbox" role="button" aria-label="Display the menu" onClick={clickHandler} className={`${styleClass} z-30 relative`}></input>

      <div className='absolute top-0 right-0 z-20 flex w-full px-4 bg-black bg-opacity-75 min-h-dvh md:hidden'>

      </div>
    </>
  )
}

HamburgerMenu.propTypes = {
  styleClass: PropTypes.string
}

export default HamburgerMenu
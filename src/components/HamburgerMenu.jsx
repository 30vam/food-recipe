import PropTypes, { object } from 'prop-types'
import { useState } from 'react';
import './HamburgerMenu.css'
import NavMenu from './NavMenu';

const HamburgerMenu = ({ulMenuItems, styleClass}) => {
  // State for toggling on mobile
  const [isVisible, setIsVisible] = useState(false);

  // Event Handlers
  const clickHandler = () => {
    setIsVisible(prevIsVisible => !prevIsVisible); // Uses update function
  }

  return (
    <div className='md:hidden'>
      <input type="checkbox" checked={isVisible} role="button" aria-label="Display the menu" onChange={clickHandler} 
      className={`${styleClass} z-30 relative`}></input>

      <div onClick={clickHandler} className={`${isVisible ? 'flex bg-opacity-75' : 'hidden bg-opacity-0'} fixed top-0 right-0 z-20 w-full pt-16 flex justify-center h-dvh bg-black`}>
        <NavMenu clickHandler={clickHandler} itemsArray={ulMenuItems} isVertical={true}/>
      </div>
    </div>
  )
}

HamburgerMenu.propTypes = {
  ulMenuItems: PropTypes.arrayOf(object),
  styleClass: PropTypes.string
}

export default HamburgerMenu
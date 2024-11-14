import PropTypes from 'prop-types'
import Button from './Button'
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = ({logo}) => {
  // State for toggling on mobile
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed z-20 flex items-center justify-between w-full px-4 py-2 md:px-20 bg-gradient-to-b from-black to-transparent'>
      <a href="/">
        <img src={logo ?? Logo} alt="Site Logo" className='w-32'/>
      </a>

      <ul className='hidden gap-12 text-xl text-white md:flex'>
        <li><a href="/" className='transition-colors ease-out hover:text-blue-400'>Home</a></li>
        <li><a href="/explore" className='transition-colors ease-out hover:text-blue-400'>Explore</a></li>
        <li><a href="/favorites" className='transition-colors ease-out hover:text-blue-400'>Favorites</a></li>
      </ul>
      
      <Button label='Sign in' buttonStyle={"neon-btn"}/>

      {/*Hamburger button */}
      <button className='block md:hidden'>
        {open ? <AiOutlineClose /> : <HiMenuAlt3 color='white' size='48px'/>}
      </button>
    </nav>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string
}

export default Navbar 
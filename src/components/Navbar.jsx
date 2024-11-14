import PropTypes from 'prop-types'
import Button from './Button'
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({logo}) => {
  // States for toggling on mobile
  
  return (
    <nav className='fixed z-20 flex items-center justify-between w-full px-4 py-2 md:px-20 bg-gradient-to-b from-black to-transparent'>
      <a href="/">
        <img src={logo ?? Logo} alt="Site Logo" className='w-32'/>
      </a>

      <ul className='flex gap-12 text-xl'>
        <li><a href="#home" className='text-white transition-colors ease-out hover:text-green-400'>Home</a></li>
        <li><a href="#explore" className='text-white transition-colors ease-out hover:text-green-400'>Explor</a></li>
        <li><a href="#favorites" className='text-white transition-colors ease-out hover:text-green-400'>Favorites</a></li>
      </ul>
      
      <Button label='Sign in'/>
    </nav>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string
}

export default Navbar 
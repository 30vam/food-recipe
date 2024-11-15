import PropTypes from 'prop-types'
import Button from './Button'
import HamburgerMenu from './HamburgerMenu'
import Logo from '../images/logo.png'

const Navbar = ({logo}) => {
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
      
      <HamburgerMenu styleClass={'hamburger-menu'}/>
    </nav>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string
}

export default Navbar
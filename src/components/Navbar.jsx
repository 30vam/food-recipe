import PropTypes from 'prop-types'
import Button from './Button.jsx'
import HamburgerMenu from './HamburgerMenu.jsx'
import Logo from '../images/logo.png'
import { navMenuItems } from "../utils/menus.js";
import NavMenu from './NavMenu.jsx';

const Navbar = ({logo}) => {
  return (
    <nav className='fixed top-0 z-20 flex flex-row-reverse items-center justify-between w-full px-4 py-2 lg:px-18 md:px-20 bg-gradient-to-b from-black to-transparent'>
      {/* Website Logo */}
      <a href="/">
        <img src={logo ?? Logo} alt="Site Logo" className='w-32 transition-all duration-300 hover:drop-shadow-siteLogo'/>
      </a>

      <NavMenu itemsArray={navMenuItems} isResponsive={true}/>
      {/*<Button label='ورود / ثبت‌نام' buttonStyle={"neon-btn"}/>*/}
      <HamburgerMenu ulMenuItems={navMenuItems} styleClass={'hamburger-menu'}/>
    </nav>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string
}

export default Navbar
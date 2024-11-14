import PropTypes from 'prop-types'
import Button from './Button'
import Logo from '../images/logo.png'

const Navbar = ({logo}) => {
  return (
    <nav className='flex items-center justify-between w-full px-4 py-2 bg-gradient-to-b from-black to-[#0000008a]'>
      <img src={logo ?? Logo} alt="Site Logo" className='w-32'/>

      <ul className='flex gap-6'>
        <li><a href="#home" className='text-white transition-colors ease-out hover:text-green-400'>Home</a></li>
        <li><a href="#explore" className='text-white transition-colors ease-out hover:text-green-400'>Explor</a></li>
        <li><a href="#favorites" className='text-white transition-colors ease-out hover:text-green-400'>Favorites</a></li>
      </ul>
      
      <Button />
    </nav>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string
}

export default Navbar 
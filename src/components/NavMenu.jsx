import PropTypes, { object } from 'prop-types'
import { Link} from 'react-scroll'

const NavMenu = ({itemsArray, isVertical = false, isResponsive = false, otherStyles, clickHandler}) => {
  return (
    <ul className={`flex text-xl relative z-20 text-white text-center ${isVertical ? 'flex-col gap-6 text-2xl' : 'flex-row gap-12'} ${isResponsive && 'hidden md:flex'} ${otherStyles}`}>
      {itemsArray.map((item, index) => (
        <li key={index} className="font-bold transition-all duration-300 ease-out cursor-pointer select-none hover:drop-shadow-linkText">
          { item.href ? 
          <a onClick={clickHandler} href={item.href}>{item.label}</a>
          :
          <Link onClick={clickHandler} to={item.fragmentLink} spy={true} smooth={true} duration={500} offset={-80}>{item.label}</Link> /* Animated scrolls using Link from react-scroll */
          }
        </li>
      ))}
    </ul>
  )
}

NavMenu.propTypes = {
  itemsArray: PropTypes.arrayOf(object),
  isVertical: PropTypes.bool,
  isResponsive: PropTypes.bool,
  clickHandler: PropTypes.func,
  otherStyles: PropTypes.string
}

export default NavMenu
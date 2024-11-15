import PropTypes, { object } from 'prop-types'

const NavMenu = ({itemsArray, isVertical = false, isResponsive = false, otherStyles}) => {
  return (
    <ul className={`flex text-xl relative z-20 text-white text-center ${isVertical ? 'flex-col gap-6 text-2xl' : 'flex-row gap-12'} ${isResponsive && 'hidden md:flex'} ${otherStyles}`}>
      {itemsArray.map((item, index) => (
        <li key={index}>
          <a href={item.href} className="font-bold transition-all duration-300 ease-out hover:drop-shadow-linkText">{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

NavMenu.propTypes = {
  itemsArray: PropTypes.arrayOf(object),
  isVertical: PropTypes.bool,
  isResponsive: PropTypes.bool,
  otherStyles: PropTypes.string
}

export default NavMenu
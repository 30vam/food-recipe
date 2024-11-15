import PropTypes, { object } from 'prop-types'

const NavMenu = ({itemsArray, isVertical = false, isResponsive = false, otherStyles}) => {
  return (
    <ul className={`flex gap-12 text-xl text-white ${isVertical ? 'flex-col' : 'flex-row', isResponsive && 'hidden md:flex'} ${otherStyles}`}>
      {itemsArray.map((item, index) => (
        <li key={index}>
          <a href={item.href} className='transition-colors ease-out hover:text-blue-400'>{item.label}</a>
        </li>
      ))}
    </ul>
  )
}

NavMenu.propTypes = {
  itemsArray: PropTypes.arrayOf(Object),
  isVertical: PropTypes.bool,
  isResponsive: PropTypes.bool,
  otherStyles: PropTypes.string
}

export default NavMenu
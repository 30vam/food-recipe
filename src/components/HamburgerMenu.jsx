import PropTypes from 'prop-types'
import './HamburgerMenu.css'

const HamburgerMenu = ({styleClass}) => {
  return (
    <input type="checkbox" role="button" aria-label="Display the menu" className={`${styleClass} block md:hidden`}></input>
  )
}

HamburgerMenu.propTypes = {
  styleClass: PropTypes.string
}

export default HamburgerMenu
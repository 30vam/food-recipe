import PropTypes from 'prop-types'
import './Button.css'

const defaultClickHandler = () => {
  console.log('CLICKED');
}

const Button = ({ isDisabled = false, buttonType = "button", icon, label="Label", buttonStyle, clickHandler = defaultClickHandler }) => {

  return (
    <button disabled={isDisabled} type={buttonType} onClick={clickHandler} className={`hidden md:block ${buttonStyle}`}>
      <span className='flex-1'>{label}</span>
      {icon && <div className='relative size-6'>{icon}</div>}
    </button>
  )
}

Button.propTypes = {
  isDisabled: PropTypes.bool,
  buttonType: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  buttonStyle: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Button
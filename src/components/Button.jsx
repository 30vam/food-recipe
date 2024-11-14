import PropTypes from 'prop-types'
import './Button.css'

const defaultClickHandler = () => {
  console.log('CLICKED');
}

const Button = ({ label="Label", clickHandler = defaultClickHandler }) => {

  return (
    <div className='btn-container'>
      <button onClick={clickHandler} className='neon-btn'>
      {label}
    </button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Button
import PropTypes from 'prop-types'

const defaultClickHandler = () => {
  console.log('CLICKED');
}

const Button = ({ label="Label", clickHandler = defaultClickHandler }) => {

  return (
    <button onClick={clickHandler} className='px-4 py-1 text-lg text-white transition-all ease-out bg-black border rounded-xl hover:text-black hover:bg-white'>
      {label}
    </button>
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
import PropTypes from 'prop-types'

const defaultClickHandler = () => {
  console.log('CLICKED');
}

const Button = ({ label="Label", clickHandler = defaultClickHandler }) => {

  return (
    <button onClick={clickHandler} className='px-5 py-2 text-lg text-white border border-[#f3eaff] transition-all ease-out bg-transparent rounded-xl'>
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

/*
.neon-btn {
  position: relative;
  padding: 20px 30px;
  background: transparent;
  border: 3px solid #f3eaff;
  border-radius: 50px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 7px 0 #9013fe, inset 0 0 5px 1px #d64eff;
}

.neon-btn::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50px;
  transition: all 200ms ease-in-out;
}

.neon-btn:hover::before {
  top: -9px;
  left: -9px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  border: 1px solid #f3eaff;
  box-shadow: 0 0 7px 0 #9013fe, 0 0 5px 2px #d64eff, inset 0 0 7px 0 #9013fe, inset 0 0 5px 1px #d64eff;
}
*/
import PropTypes from 'prop-types'
import { useState } from 'react'

const Accordian = ({title, text}) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  }

  return (
    <div className='py-1 text-lg text-white'>
      <button onClick={clickHandler} className='flex items-center justify-between w-full text-2xl transition-all duration-200 hover:text-orange-400'>
        <span className={`${isOpen ? 'text-orange-400': 'text-white'} transition-colors duration-300`}>{title}</span>
        {/*isOpen ? <span>-</span> : <span>+</span>*/}
        <svg
          className={`ml-8 ${isOpen ? 'fill-orange-400': 'fill-white'}`}
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out py-2
        ${ isOpen ?
          'grid-rows-[1fr] opacity-100' :
          'grid-rows-[0fr] opacity-0'
        }
      `}>
        <div className='overflow-hidden font-light'>{text}</div>
      </div>
    </div>

  )
}

Accordian.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default Accordian
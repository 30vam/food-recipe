import PropTypes from 'prop-types'

const FormInput = ({type, placeholder, required = true, value, name, handleInputChange, iconSrc}) => {
  return (
    <div className='relative'>
      <input
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className='bg-white border border-gray-800 text-black text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block w-full py-2.5 outline-none pl-12 pr-5 placeholder:text-sm shadow-xl'
      />
      {iconSrc && (
        <img src={iconSrc} alt='Input Icon' className='absolute top-[8px] left-0 flex w-8 ml-2 cursor-pointer' />
      )}
    </div>
  )
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  handleInputChange: PropTypes.func,
  iconSrc: PropTypes.string
}

export default FormInput
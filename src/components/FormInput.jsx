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
        className='bg-white border border-gray-800 text-black text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block w-full py-2.5 outline-none pr-12 pl-5 placeholder:text-sm shadow-xl'
      />
      {iconSrc && (
        <button className='absolute inset-y-0 right-0 flex items-center w-8 mr-3'>
          <img src={iconSrc} alt='Input Icon' />
        </button>
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
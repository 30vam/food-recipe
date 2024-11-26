import PropTypes from 'prop-types'

const SectionTitle = ({title, icon}) => {
  return (
    <div className='flex justify-center w-full gap-4 mb-6 select-none md:gap-8 md:mb-10'>
      {icon && <img src={icon} alt="Title Icon" className='size-11 md:size-14 lg:size-16'/>}
      <h2 className='text-3xl text-white md:text-4xl lg:text-5xl'>
        {title}
      </h2>
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

export default SectionTitle
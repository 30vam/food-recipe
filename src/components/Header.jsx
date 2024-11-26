import PropTypes from 'prop-types'
import HeroImage from './HeroImage'
import GradientFade from './GradientFade'

const Header = ({title = "TEST", heroImages}) => {
  return (
    <header className='w-full select-none h-dvh'>
      <HeroImage heroImages={heroImages}/>

      {/* Black to transparent gradient that appears at the bottom of the header */}
      <GradientFade position='bottom'/>
      
      { /* Header title, text, etc. */ }
      <div className='absolute bottom-0 z-10 flex flex-col items-center justify-center w-full h-full gap-8 px-6 pt-20 text-center text-white'>
        <h1 className='text-5xl font-bold leading-snug drop-shadow-xl sm:text-7xl'>{title}</h1>
        <p className='text-2xl leading-normal sm:text-3xl drop-shadow-lg'>دیگر دوران تخم‌مرغ شکستن به پایان رسید...
          <br /><span className='text-xl'>انقلابی نوپا در صنعت آشپزی!</span>
        </p>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  heroImages: PropTypes.arrayOf(PropTypes.string), // An Array of image URLs
  type: PropTypes.string
}

export default Header

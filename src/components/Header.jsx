import PropTypes from 'prop-types'
import { selectRandomElement } from "../utils/utils";

const Header = ({title = "TEST", img, type}) => {
  const images = Object.values(import.meta.glob('../images/banners/*.{jpg, jpeg, png}', { eager: true, query: '?url', import: 'default' }));   
  const headerImg = selectRandomElement(images);
  console.log(images);
  return (
    <header className='w-full select-none h-dvh'>
      <div className='relative w-full h-full'>
        <img src={img ?? headerImg} alt="Header Image" className='object-cover w-full h-full' />
      </div>

      <div className='absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent'>
      </div>

      <div className='absolute bottom-0 z-10 flex flex-col items-center justify-center w-full h-full gap-8 px-6 pt-20 text-center text-white'>
        <h1 className='text-5xl font-bold sm:text-7xl'>{title}</h1>
        {/* Only show this if type prop exists */}
        {type && (
          <p className='text-xl sm:text-3xl'>Hungry and tired of the same boring food? Don&apos;t worry, We&apos;ve got your back!
            <br />
            <span className='hidden text-base sm:text-lg md:block'>Just tell your wife where you found the recipes!</span>
          </p>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.string
}

export default Header

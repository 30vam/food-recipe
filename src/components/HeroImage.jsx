import PropTypes from 'prop-types'
import { selectRandomElement } from "../utils/utils.js";

const HeroImage = ({ heroImages , tailwindStyles}) => {
  const defaultHeroImages = Object.values(import.meta.glob('../images/banners/*.{jpg, jpeg, png}', { eager: true, query: '?url', import: 'default' }));   
  const headerImg = heroImages ? selectRandomElement(heroImages) : selectRandomElement(defaultHeroImages);
  
  return (
    <div className={ tailwindStyles } >
      <img src={headerImg} alt="Header Image" className='object-cover w-full h-full bg-center' />
    </div>
  )
}

HeroImage.propTypes = {
  heroImages: PropTypes.arrayOf(PropTypes.string),
  tailwindStyles: PropTypes.obj
}

export default HeroImage
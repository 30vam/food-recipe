import PropTypes from 'prop-types'
import { selectRandomElement } from "../utils/utils";

const HeroImage = ({ heroImages }) => {
  const defaultHeroImages = Object.values(import.meta.glob('../images/banners/*.{jpg, jpeg, png}', { eager: true, query: '?url', import: 'default' }));   
  const headerImg = heroImages ? selectRandomElement(heroImages) : selectRandomElement(defaultHeroImages);
  
  return (
    <div className='relative w-full h-full'>
      <img src={headerImg} alt="Header Image" className='object-cover w-full h-full' />
    </div>
  )
}

HeroImage.propTypes = {
  heroImages: PropTypes.arrayOf(PropTypes.string) // An Array of image URLs
}

export default HeroImage
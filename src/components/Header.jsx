import PropTypes from 'prop-types'
import { Banner1, Banner2, Banner3 } from "../images";
import { selectRandomElement } from "../utils/utils";

const Header = ({title, img}) => {
  const images = [Banner1, Banner2, Banner3];   
  const headerImg = selectRandomElement(images);

  return (
    <header className="w-full h-dvh">
      <div className="relative w-full h-full">
        <img src={img ?? headerImg} alt="Header Image" className="object-cover w-full h-full" />
      </div>

      <div className="absolute bottom-0 w-full h-full px-4 bg-gradient-to-t from-black to-transparent">
        <h1>{title}</h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string
}

export default Header

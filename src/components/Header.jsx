import { Banner1, Banner2, Banner3 } from "../images";
import { selectRandomElement } from "../utils/utils";

const Header = () => {
  const images = [Banner1, Banner2, Banner3];   
  const headerImg = selectRandomElement(images);

  return (
    <header className="w-full h-dvh">
      <img src={headerImg} alt="Header Image" className="object-cover w-full h-full" />
    </header>
  )
}

export default Header

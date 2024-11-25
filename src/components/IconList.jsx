import PropTypes from 'prop-types'
import { instagramIcon, githubIcon, telegramIcon } from '../images/icons';

const IconList = ({instagramLink, githubLink, telegramLink}) => {
  return (
    <div className='flex justify-center gap-2'>
      <a href={instagramLink} target='_blank'><img src={instagramIcon} alt="Instagram Icon" className='size-12'/></a>
      <a href={githubLink} target='_blank'><img src={githubIcon} alt="Github Icon" className='size-12'/></a>
      <a href={telegramLink} target='_blank'><img src={telegramIcon} alt="Telegram Icon" className='size-12'/></a>
    </div>
  )
}

IconList.propTypes = {
  telegramLink: PropTypes.string,
  githubLink: PropTypes.string,
  instagramLink: PropTypes.string
}

export default IconList
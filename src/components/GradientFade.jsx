import PropTypes from 'prop-types'

const GradientFade = ({position = 'bottom'}) => {
  let positionClass = "";

  switch (position) {
    case 'top':
      positionClass = 'bg-gradient-to-b'
      break;
    case 'bottom':
      positionClass = 'bg-gradient-to-t'
      break;
    case 'left':
      positionClass = 'bg-gradient-to-r'
      break;
    case 'right':
      positionClass = 'bg-gradient-to-l'
      break;
    default:
      positionClass = 'bg-gradient-to-b'
      break;
  }

  return (
    <div className={`absolute bottom-0 w-full h-full ${positionClass} from-black to-transparent`}></div>
  )
}

GradientFade.propTypes = {
  position: PropTypes.string
}

export default GradientFade
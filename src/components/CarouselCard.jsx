import PropTypes from 'prop-types'
import './Carousel.css'

const CarouselCard = ({title, content}) => (
  <div className='carousel-card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

CarouselCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export { CarouselCard };
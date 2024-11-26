import PropTypes from 'prop-types'
import './Carousel.css'

const CarouselCard = ({title, content}) => {
  return (
    <div className='carousel-card'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
  
}

CarouselCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export { CarouselCard };
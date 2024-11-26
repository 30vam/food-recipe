import PropTypes from 'prop-types'
import GradientFade from './GradientFade.jsx'
import './Carousel.css'

const CarouselCard = ({ item }) => {
  return (
    <a href={item.url} className='relative w-full h-full text-justify text-black transition-all duration-300 ease-in-out group carousel-card'>
      <img src={item.image} alt={`${item.name} Photo`} className='object-cover w-full h-full transition-all duration-500 ease-out group-hover:scale-110 rounded-[3rem]' />
      <GradientFade position="bottom"/>
      <div className='absolute bottom-0 right-0 flex flex-col items-center justify-center w-full gap-3 mb-4 text-white transition-all duration-300 ease-in-out hover:text-orange-400'>
        <h2 className='text-4xl font-bold'>{item.name}</h2>
        <ul className='text-lg leading-relaxed text-center'>
          { item.subcourses.slice(0,2).map((subcourse, index) => 
            (<li key={index}>{subcourse}</li>)
            ) }
          { item.subcourses.length > 2 && <ul>و زیردوره‌های بیشتر!...</ul> }
        </ul>
      </div>
    </a>
  );
  
}

CarouselCard.propTypes = {
  item: PropTypes.object
}

export { CarouselCard };
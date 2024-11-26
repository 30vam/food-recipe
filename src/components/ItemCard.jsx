import PropTypes from 'prop-types'
import GradientFade from './GradientFade.jsx'

const ItemCard = ({item}) => {
  let leftsideTitle= '';
  if (item.type.includes('غذا')) {
    leftsideTitle = 'زمان تهیه:';
  } else if (item.type.includes('دوره')) {
    leftsideTitle = 'طول دوره:';
  }
  
  return (
    <a href={item.url} className='w-full select-none h-[256px] rounded-2xl relative overflow-hidden group'>

      <img src={item.image} alt={`${item.name} Photo`} className='object-cover w-full h-full transition-all duration-500 ease-out group-hover:scale-110' />
      <GradientFade position="bottom"/>
      
      <div className='absolute bottom-0 z-0 flex items-center justify-between w-full gap-2 px-6 text-center text-white transition-all duration-300 select-none hover:text-orange-400'>
        <div className='flex flex-col items-start gap-1 mb-2'>
          <h3 className='text-3xl'>{item.name}</h3>
          <span className='text-xl font-light'>{item.subtype}</span>
        </div>

        <div>
          <span className='block'>{leftsideTitle}</span>
          <span>{item.duration}</span>
        </div>
      </div>
    </a>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object
}

export default ItemCard
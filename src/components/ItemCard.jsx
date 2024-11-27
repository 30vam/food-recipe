import PropTypes from 'prop-types'
import GradientFade from './GradientFade.jsx'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
  let leftsideTitle = '';
  let link = '';

  if (item.type.includes('غذا')) {
    leftsideTitle = 'زمان تهیه:';
    link = `/recipes/${item.id}`;
  } else if (item.type.includes('دوره')) {
    leftsideTitle = 'طول دوره:';
    link = `/courses/${item.id}`;
  }
  
  return (
    <div className='w-full select-none h-[256px] rounded-[2.5rem] hover:rounded-2xl transition-all ease-in-out duration-500 relative overflow-hidden group border-4 border-black hover:border-orange-400 border-opacity-50'>
      <Link to={ link }>
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
      </Link>
    </div>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object
}

export default ItemCard
import PropTypes from 'prop-types'
import GradientFade from './GradientFade'

const ItemCard = ({item}) => {
  return (
    <a href={item.url} className='w-full h-[256px] rounded-2xl relative overflow-hidden group'>

      <img src={item.image} alt={`${item.name} Photo`} className='object-cover w-full h-full transition-all duration-500 ease-out group-hover:scale-110' />
      <GradientFade position="bottom"/>
      
      <div className='absolute bottom-0 z-0 flex flex-col w-full gap-2 px-6 text-center text-white transition-all duration-300 select-none hover:text-orange-400'>
        <h3 className='text-3xl font-bold'>{item.name}</h3>
        <span className='text-xl font-semibold'>{item.type}</span>
      </div>
    </a>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object
}

export default ItemCard
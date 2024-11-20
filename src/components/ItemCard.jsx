import PropTypes from 'prop-types'
import GradientFade from './GradientFade'

const ItemCard = ({item}) => {
  return (
    <div className='w-full h-[256px] rounded-lg relative'>
      
      <img src={item.image} alt={`${item.name} Photo`} className='object-cover w-full h-full' />
      
      <GradientFade position="bottom"/>
      <div className='absolute bottom-0 z-10 flex flex-col items-center justify-center w-full h-full gap-4 px-6 pt-20 text-center text-white'>
        <h3>{item.name}</h3>
        <h3>{item.type}</h3>
        <h3>{item.info}</h3>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object
}

export default ItemCard
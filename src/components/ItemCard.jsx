import PropTypes, { string } from 'prop-types'

const ItemCard = ({imgSrc, name, tags, itemInfo}) => {
  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <img src={imgSrc} alt={`${name} Photo`} className='w-full' />
      {name}
      {tags}
      {itemInfo}
    </div>
  )
}

ItemCard.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  tags: PropTypes.arrayOf(string),
  itemInfo: PropTypes.string
}

export default ItemCard
import PropTypes, { string } from 'prop-types'

const ItemCard = ({imgSrc, name, tags, itemInfo}) => {
  return (
    <div className='flex flex-col items-center w-full'>
      <img src={imgSrc} alt={`${name} Photo`} className='w-full' />
      {name}
      {tags}
      {itemInfo}
    </div>
  )
}

ItemCard.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.arrayOf(string),
  info: PropTypes.string
}

export default ItemCard
import { info } from 'autoprefixer'
import PropTypes, { string } from 'prop-types'

const ItemCard = ({name, tags, info}) => {
  return (
    <div>ItemCard</div>
  )
}

ItemCard.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.arrayOf(string),
  info: PropTypes.string
}

export default ItemCard
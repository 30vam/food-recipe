import PropTypes from 'prop-types'

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
import React from 'react'
import PropTypes from 'prop-types'

const Helmet = (props) => {
  document.title = 'Multistores - ' + props.title
  return <div className='w-100'>{props.children}</div>
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Helmet

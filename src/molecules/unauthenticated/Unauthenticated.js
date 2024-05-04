import React from 'react'
import PropTypes from 'prop-types'

const Unauthenticated = props => {
  const { children } = props

  return (
    <div>Unauthenticated</div>
  )
}

Unauthenticated.propTypes = {
  children: PropTypes.node.isRequired
}

export default Unauthenticated
import PropTypes from 'prop-types'

const Authenticated = props => {
  const { children } = props

  return (
    <div>Authenticated</div>
  )
}

Authenticated.propTypes = {
  children: PropTypes.node.isRequired
}

export default Authenticated
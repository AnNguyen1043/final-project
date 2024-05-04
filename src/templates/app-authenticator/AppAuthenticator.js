import PropTypes from 'prop-types'
import Authenticated from '@/molecules/authenticated'
import Unauthenticated from '@/molecules/unauthenticated'

const AppAuthenticator = props => {
  const { pageType, children } = props

  switch (pageType) {
    case 'authenticated':
      return <Authenticated >
        {children}
      </Authenticated>

    case 'unauthenticated':
      return <Unauthenticated >
        {children}
      </Unauthenticated>

    case 'public':
    default:
      return children
  }
}

AppAuthenticator.propTypes = {
  pageType: PropTypes.oneOf(['authenticated', 'unauthenticated', "public"]).isRequired,
  children: PropTypes.node.isRequired
}

export default AppAuthenticator
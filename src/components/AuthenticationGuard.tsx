import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../pages/Loading'

// type Props = {
//   component: JSX.Element;
// }

function AuthenticationGuard({ component }: any) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (<Loading />)
  })
  return <Component />
}
export default AuthenticationGuard

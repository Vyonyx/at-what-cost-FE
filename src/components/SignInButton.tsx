import { Button } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'

function SignInButton() {
  const { loginWithRedirect } = useAuth0()
  
  return (
    <Button
      variant="contained"
      sx={{backgroundColor:'primary.main', marginLeft:'1rem'}}
      onClick={ async () => await loginWithRedirect({
        appState: {
          returnTo: '/tool'
        }
      })}
    >
      Sign In
    </Button>
  )
}
export default SignInButton
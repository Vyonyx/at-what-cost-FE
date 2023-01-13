import { Button } from "@mui/material"
import { useAuth0 } from '@auth0/auth0-react'

function SignUpButton() {
  const { loginWithRedirect } = useAuth0()
  
  return (
    <Button
      variant="contained"
      sx={{backgroundColor:'primary.main'}}
      onClick={async () => await loginWithRedirect({
        screen_hint: 'signup',
        appState: {
          returnTo: '/tool'
        }
      })}
    >
      Sign Up
    </Button>
  )
}
export default SignUpButton
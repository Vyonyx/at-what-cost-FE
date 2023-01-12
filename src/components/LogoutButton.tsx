import { Button } from "@mui/material"
import { useAuth0 } from '@auth0/auth0-react'

function LogoutButton() {
  const { logout } = useAuth0()
  
  return (
    <Button
      variant="contained"
      sx={{backgroundColor:'primary.main'}}
      onClick={() => logout({returnTo: window.location.origin})}
    >
      Logout
    </Button>
  )
}
export default LogoutButton
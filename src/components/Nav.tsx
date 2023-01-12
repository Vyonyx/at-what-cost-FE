import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from "./LogoutButton"
import SignUpButton from "./SignUpButton"
import SignInButton from "./SignInButton"

function Nav() {
  const { isAuthenticated, user } = useAuth0()
  
  return (
    <AppBar position="static">
      <Toolbar sx={toolbarStyle}>
        <IconButton size="large" color='inherit' aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>At What Cost</Typography>
        {isAuthenticated ? (
          <>
            <Typography mr={4}>{user?.name}</Typography>
            <LogoutButton />
          </>
        ) : (
          <>
            <SignUpButton />
            <SignInButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Nav

const toolbarStyle = {
  backgroundColor: 'background.default',
  color: '#F2F2F2',
}
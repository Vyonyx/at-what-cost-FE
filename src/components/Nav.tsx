import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  
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
            <Button
              variant="contained"
              sx={{backgroundColor:'primary.main'}}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            sx={{backgroundColor:'primary.main'}}
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
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
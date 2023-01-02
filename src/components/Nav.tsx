import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from "@mui/system";

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar sx={toolbarStyle}>
        <IconButton size="large" color='inherit' aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>At What Cost</Typography>
        <Button variant="contained" color="inherit" sx={{color:'#232121'}}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav

const toolbarStyle = {
  background: '#232121',
  color: '#F2F2F2',
}
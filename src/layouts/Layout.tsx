import { Box, Container } from "@mui/material"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

type Props = {
  children: JSX.Element
}

function Layout({children}: Props) {
  return (
    <Box sx={fullPageStyle}>
      <Nav />
      <Container sx={{flexGrow:1}}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
export default Layout

const fullPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  color: '#F2F2F2',
}
import { Box, CircularProgress, Typography } from "@mui/material"

function Loading() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'3rem', width:'100vw', height:'100vh'}} >
    <Typography variant='h3' color='primary'>Loading...</Typography>
    <CircularProgress size='5rem' color='primary' />
  </Box>
  )
}
export default Loading
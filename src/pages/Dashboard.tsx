import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"

function Dashboard() {
  return (
    <Grid container columnSpacing={10} sx={{height:'100%', paddingBottom:6, background:'primary.main'}}>
      <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h6" mt={6} mb={2}>
          Transactions
        </Typography>
        <Box sx={sectionStyle}>
          Box
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Typography variant="h6" mt={6} mb={2}>
          Cost Breakdown
        </Typography>
        <Box sx={sectionStyle}>
          Box
        </Box>
      </Grid>
    </Grid>
  )
}
export default Dashboard

const sectionStyle = {
  height: '100%',
  width: '100%',
  border: '1px solid black',
  borderRadius: '1rem',
  padding: '2rem',
  background: '#F2F2F2'
}
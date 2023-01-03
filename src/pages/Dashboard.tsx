import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"

function Dashboard() {
  return (
    <Grid container columnSpacing={6} sx={{height:'100%', paddingBottom:6, background:'primary.main'}}>
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
        <Container component='div' sx={graphContainerStyle}>
          <Box sx={subSectionStyle}>
            Box
          </Box>
          <Box sx={subSectionStyle}>
            Box
          </Box>
        </Container>
      </Grid>
    </Grid>
  )
}
export default Dashboard

const graphContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap:'1rem',
  height: '100%'
}

const subSectionStyle = {
  flexGrow: 1,
  width: '100%',
  borderRadius: '1rem',
  padding: '2rem',
  background: '#F2F2F2'
}

const sectionStyle = {
  height: '100%',
  width: '100%',
  borderRadius: '1rem',
  padding: '2rem',
  background: '#F2F2F2'
}
import { Box, Button, ButtonGroup, Grid, List, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useDispatch } from "react-redux"
import TransactionListItem from "../components/TransactionListItem"
import { toggle } from '../redux/filters'

function Dashboard() {
  const dispatch = useDispatch()

  return (
    <Grid container columnSpacing={6} sx={{height:'100%', paddingBottom:6, background:'primary.main'}}>
      <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
        <Typography variant="h6" mt={6}>
          Transactions
        </Typography>
        <Box sx={sectionStyle}>
          <List sx={{'li + li': {borderTop:'1px solid grey'}}}>
            <TransactionListItem transaction="BP" category='Vehicle' />
            <TransactionListItem transaction="Raglan Roast" category='Food & Drink' />
            <TransactionListItem transaction="Countdown" category='Groceries' />
            <TransactionListItem transaction="Two Degrees" category='Communication' />
            <TransactionListItem transaction="Mc Donalds" category='Food & Drink' />
          </List>
        </Box>
        <ButtonGroup
          size='large'
          color='primary'
          variant="outlined"
        >
          <Button
            onClick={() => {
              const input = document.getElementById('csvUpload')
              if (input) input.click()
            }}
          >
            <input
              id='csvUpload'
              type='file'
              accept='.csv'
              style={{display:'none'}}
            />
            Upload
          </Button>
          <Button onClick={() => dispatch(toggle())}>
            Filters
          </Button>
          <Button>
            Clear
          </Button>
        </ButtonGroup>
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
  maxHeight: '800px',
  overflowY: 'scroll',
  width: '100%',
  borderRadius: '1rem',
  padding: '2rem',
  background: '#F2F2F2',
}
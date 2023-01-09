import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import TransactionButtons from "../components/TransactionButtons"
import TransactionList from "../components/TransactionsList"
import FiltersModal from "../components/FiltersModal"
import PieChart from "../components/PieChart"
import CategorisedCostList from "../components/CategorisedCostList"
import OverallCostList from "../components/OverallCostList"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

function Dashboard() {
  const transactions = useSelector((state:RootState) => state.transactions)
  const filters = useSelector((state:RootState) => state.filters.list)

  // if (transactions.length === 0) {
  //   return (
  //     <Typography variant='h4' align="center" color='background.default'>
  //       Please upload CSV
  //     </Typography>
  //   )
  // }

  return (
    <>
      <Grid container columnSpacing={6} sx={{height:'100%', paddingBottom:6, background:'primary.main'}}>
        <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
          <Typography variant="h6" mt={6}>
            Transactions
          </Typography>
          <Box sx={sectionStyle}>
            {transactions.length === 0 ? (
              <Typography variant='h5' align="center" color='background.default'>
                1. Please upload CSV
              </Typography>
            ) : (
              <TransactionList />
            )}
          </Box>
          <TransactionButtons />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h6" mt={6} mb={2}>
            Cost Breakdown
          </Typography>
          <Container component='div' sx={graphContainerStyle}>
            <Box sx={subSectionStyle}>
              {(transactions.length > 0 && filters.length === 0) ? (
                <Typography variant="h5" align='center' color='background.default'>
                  2. Please add a filter
                </Typography>
              ) : (
                <>
                  <PieChart />
                  <CategorisedCostList />
                  <OverallCostList />
                </>
              )}
            </Box>
          </Container>
        </Grid>
      </Grid>

      <FiltersModal />
    </>
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
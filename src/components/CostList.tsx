import { Box, Grid, List, ListItem, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { transactionsToPieData } from "../utils/transactionDataConversions"

function CostList() {
  const transactions = useSelector((state:RootState) => state.transactions)
  const filters = useSelector((state:RootState) => state.filters.list)

  const data = transactionsToPieData('Code', 'Amount', transactions, filters)
  console.log(data)

  const totals = 
    typeof data !== 'string' 
      ? data.reduce((prev, item) => {
        const { id, value } = item
        return value <= 0
          ? {...prev, expenses: prev.expenses + value}
          : {...prev, income: prev.income + value}
      }, {expenses: 0, income: 0})
      : {expenses: 0, income: 0}

      const {expenses: expensesTotal, income: incomeTotal} = totals
  
  return (
    <Box sx={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gridAutoRows:'min-content', width:'100%', height:'100%', color:'background.default'}}>
      <Typography
        variant='h6'
        color='background.default'
      >
        Expenses: ${Math.abs(expensesTotal)}
      </Typography>
      <Typography
        variant='h6'
        color='background.default'
      >
        Income: ${incomeTotal}
      </Typography>

      <List dense>
        <ListItem>
          <Box sx={{display:'flex'}}>
            <Typography mr={2} align='right' variant='body2'>$20.35</Typography>
            <Typography align='left' variant='body2'>Category 1.</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{display:'flex'}}>
            <Typography mr={2} align='right' variant='body2'>$40.00</Typography>
            <Typography align='left' variant='body2'>Category 2.</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box sx={{display:'flex'}}>
            <Typography mr={2} align='right' variant='body2'>$15.30</Typography>
            <Typography align='left' variant='body2'>Category 3.</Typography>
          </Box>
        </ListItem>
      </List>

      <List dense>
        <ListItem>
          <Box sx={{display:'flex'}}>
            <Typography mr={2} align='right' variant='body2'>$20</Typography>
            <Typography align='left' variant='body2'>Category 1.</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  )
}
export default CostList
import { List, ListItem, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import TransactionListItem from "./TransactionListItem"

function TransactionList() {
  const transactions = useSelector((state:RootState) => state.transactions)

  // Keys should dynamically change to reflect different bank state headers
  const transactionKey = 'Code'
  const amountKey = 'Amount'
  
  if (transactions.length === 0) {
    return (
      <Typography variant='h4' align="center" color='background.default'>
        Please upload CSV
      </Typography>
    )
  }
  
  return (
    <List sx={{'li + li': {borderTop:'1px solid grey'}}}>
      {transactions.map((item, idx) => (
        <TransactionListItem
          key={idx}
          transaction={item[transactionKey]}
          amount={item[amountKey]}
        />
      ))}
    </List>
  )
}
export default TransactionList
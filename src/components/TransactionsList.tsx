import { List, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TransactionListItem from "./TransactionListItem";
import { useGetFiltersQuery } from "../redux/api/apiSlice";

function TransactionList() {
  const transactions = useSelector((state: RootState) => state.transactions);

  const {
    data: filters,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFiltersQuery(1);

  let content: any = (
    <Typography variant="h1" color="black">
      Content
    </Typography>
  );
  if (isLoading) {
    content = <Typography variant="h4">Loading...</Typography>;
  } else if (isError) {
    content = <Typography variant="body2">Error</Typography>;
  } else {
    content = JSON.stringify(filters);
  }

  // Keys should dynamically change to reflect different bank state headers
  const transactionKey = "Code";
  const amountKey = "Amount";

  return (
    <>
      {content}
      <List sx={{ "li + li": { borderTop: "1px solid grey" } }}>
        {transactions.map((item, idx) => (
          <TransactionListItem
            key={idx}
            transaction={item[transactionKey]}
            amount={item[amountKey]}
          />
        ))}
      </List>
    </>
  );
}
export default TransactionList;

import { List, ListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TransactionListItem from "./TransactionListItem";
import { useGetFiltersQuery } from "../redux/api/apiSlice";
import { useEffect } from "react";
import { load } from "../redux/filters";

function TransactionList() {
  const dispatch = useDispatch();
  const transactions = useSelector((state: RootState) => state.transactions);

  const { data: dbFilters, isSuccess } = useGetFiltersQuery({ id: 1 });

  // Keys should dynamically change to reflect different bank state headers
  const transactionKey = "Code";
  const amountKey = "Amount";

  return (
    <>
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

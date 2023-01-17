import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function OverallCostList() {
  const transactions = useSelector((state: RootState) => state.transactions);
  const filters = useSelector((state: RootState) => state.filters.list);

  if (!filters) return null;

  const expenseTransactions = transactions.filter(
    (item) => Number(item["Amount"]) < 0
  );
  const incomeTransactions = transactions.filter(
    (item) => Number(item["Amount"]) > 0
  );

  let expensesTotal = expenseTransactions.reduce(
    (prev, item) => prev + Number(item["Amount"]),
    0
  );
  expensesTotal = Math.round((expensesTotal * 100) / 100);

  let incomeTotal = incomeTransactions.reduce(
    (prev, item) => prev + Number(item["Amount"]),
    0
  );
  incomeTotal = Math.round((incomeTotal * 100) / 100);

  if (filters.length === 0) {
    return <></>;
  }

  return (
    <section>
      <Typography
        variant="h6"
        gutterBottom={true}
        color="background.default"
        sx={{ textDecoration: "underline" }}
      >
        Overall Total:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "min-content",
          color: "background.default",
        }}
      >
        <Typography variant="h6" color="background.default">
          Expenses: ${Math.abs(expensesTotal)}
        </Typography>
        <Typography variant="h6" color="background.default">
          Income: ${incomeTotal}
        </Typography>
      </Box>
    </section>
  );
}
export default OverallCostList;

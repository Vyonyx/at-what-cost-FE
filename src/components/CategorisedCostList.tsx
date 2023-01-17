import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetFiltersQuery } from "../redux/api/apiSlice";
import { RootState } from "../redux/store";
import { transactionsToPieData } from "../utils/transactionDataConversions";

function CategorisedCostList() {
  const transactions = useSelector((state: RootState) => state.transactions);
  const { data: filters } = useGetFiltersQuery({ id: 1 });

  if (!filters) return <></>;

  const data = transactionsToPieData("Code", "Amount", transactions, filters);

  const orderedExpenses =
    typeof data !== "string"
      ? data.filter((item) => item.value < 0).sort((a, b) => a.value - b.value)
      : [];

  const orderedIncome =
    typeof data !== "string"
      ? data.filter((item) => item.value > 0).sort((a, b) => a.value + b.value)
      : [];

  const expensesTotal = orderedExpenses.reduce(
    (prev, item) => prev + item.value,
    0
  );
  const incomeTotal = orderedIncome.reduce(
    (prev, item) => prev + item.value,
    0
  );

  if (typeof data === "string" || data.length === 0) {
    return null;
  }

  return (
    <Box mb={6}>
      <Typography
        variant="h6"
        gutterBottom={true}
        color="background.default"
        sx={{ textDecoration: "underline" }}
      >
        Categorised:
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
        <List dense>
          {orderedExpenses.map(({ id, value }) => (
            <ListItem key={id}>
              <Box sx={{ display: "flex" }}>
                <Typography mr={2} align="right" variant="body2">
                  ${Math.abs(value)}
                </Typography>
                <Typography align="left" variant="body2">
                  {id}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <List dense>
          {orderedIncome.map(({ id, value }) => (
            <ListItem key={id}>
              <Box sx={{ display: "flex" }}>
                <Typography mr={2} align="right" variant="body2">
                  ${Math.abs(value)}
                </Typography>
                <Typography align="left" variant="body2">
                  {id}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
export default CategorisedCostList;

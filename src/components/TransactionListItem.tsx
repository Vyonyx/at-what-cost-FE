import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { del } from "../redux/filters";
import { toggleIsAdd, toggleIsEdit } from "../redux/modal";
import {
  useDeleteFilterMutation,
  useGetFiltersQuery,
} from "../redux/api/apiSlice";

type Props = {
  transaction: string;
  amount?: string;
};
function TransactionListItem({ transaction, amount = "3.50" }: Props) {
  const showFilters = useSelector(
    (state: RootState) => state.filters.isToggled
  );
  const user = useSelector((state: RootState) => state.user);
  const { data: filters } = useGetFiltersQuery({ id: user.id });
  const [deleteFilter] = useDeleteFilterMutation();

  const filter = filters?.find((item) => item.transaction === transaction);
  const category = filter?.category || "";
  const userId = filter?.userId || null;
  const filterId = filter?.id || null;

  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{ color: "background.default", display: "flex", padding: "10px" }}
      disablePadding
    >
      <ListItemText color="inherit" sx={{ width: "100px" }}>
        {transaction}
      </ListItemText>

      <ListItemText color="inherit" sx={{ flexGrow: 2 }}>
        {category}
      </ListItemText>

      <ListItemText color="inherit" sx={{ flexGrow: 1, textAlign: "right" }}>
        {amount}
      </ListItemText>

      {showFilters && (
        <Box
          ml={4}
          sx={{
            display: "flex",
            gap: "1rem",
            width: "4rem",
            justifyContent: "end",
          }}
        >
          {category ? (
            <>
              <FilterButton
                text="Edit"
                label="edit"
                color="#F69400"
                func={() => {
                  dispatch(toggleIsEdit({ transaction, id: filterId }));
                }}
              />
              <FilterButton
                text="Del"
                label="delete"
                color="#FF1A1A"
                func={() => {
                  if (filter) {
                    deleteFilter(filter);
                  }
                }}
              />
            </>
          ) : (
            <>
              <FilterButton
                text="Add"
                label="add"
                color="#008061"
                func={() => {
                  dispatch(toggleIsAdd(transaction));
                }}
              />
            </>
          )}
        </Box>
      )}
    </ListItem>
  );
}
export default TransactionListItem;

const buttonStyleCreator = (color: string) => {
  return {
    color: "background.default",
    backgroundColor: color,
    borderRadius: "10rem",
    width: "40px",
    height: "40px",
    "&:hover": {
      backgroundColor: `background.default`,
    },
  };
};

type FilterButtonProps = {
  text: string;
  color: string;
  label: string;
  func: Function;
};

const FilterButton = ({ text, color, label, func }: FilterButtonProps) => {
  return (
    <IconButton
      edge="end"
      aria-label={label}
      sx={buttonStyleCreator(color)}
      onClick={() => func()}
    >
      <Typography variant="body2" sx={{ color: "primary.main" }}>
        {text}
      </Typography>
    </IconButton>
  );
};

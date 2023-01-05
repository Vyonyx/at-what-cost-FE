import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {
  transaction: string;
  amount?: string;
}
function TransactionListItem({transaction, amount = '3.50'}: Props) {
  const category = useSelector((state:RootState) => state.filters.list.find(filter => filter.transaction === transaction))?.category
  const showFilters = useSelector((state:RootState) => state.filters.isToggled)
  return (
    <ListItem sx={{color:'background.default', display:'flex', padding:'10px'}} disablePadding>
      <ListItemText color="inherit" sx={{width:'100px'}}>
        {transaction}
      </ListItemText>

      <ListItemText color="inherit" sx={{flexGrow:2}}>
        {category}
      </ListItemText>

      <ListItemText color="inherit" sx={{flexGrow:1, textAlign:'right'}}>
        {amount}
      </ListItemText>
      
      {(showFilters) && (
        <Box ml={4} sx={{display:'flex', gap:'1rem', width:'4rem', justifyContent:'end'}}>
          {category ? (
            <>
              <FilterButton text='Edit' label='edit' color='#F69400' />
              <FilterButton text='Del' label='delete' color='#FF1A1A' />
            </>
          ) : (
            <>
              <FilterButton text='Add' label='add' color='#008061' />
            </>
          )}
        </Box>
      )}
    </ListItem>
  )
}
export default TransactionListItem

const buttonStyleCreator = (color: string) => {
  return {
    color:'background.default',
    backgroundColor:color,
    borderRadius:'10rem',
    width:'40px',
    height:'40px',
    '&:hover': {
      backgroundColor:`background.default`
    }
  }
}

type FilterButtonProps = {
  text: string;
  color: string;
  label: string;
}

const FilterButton = ({ text, color, label }:FilterButtonProps) => {
  return (
    <IconButton edge='end' aria-label={label} sx={buttonStyleCreator(color)}>
      <Typography variant='body2' sx={{color:'primary.main'}}>
        {text}
      </Typography>
    </IconButton>
  )
}
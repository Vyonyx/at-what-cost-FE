import { IconButton, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box, fontSize } from "@mui/system";

const isEditMode = true

type Props = {
  transaction: string;
  category: string;
}
function TransactionListItem({transaction, category}: Props) {
  return (
    <ListItem sx={{color:'background.default', display:'flex', padding:'10px'}} disablePadding>
      <ListItemText color="inherit" sx={{width:'100px'}}>
        {transaction}
      </ListItemText>
      <ListItemText color="inherit" sx={{flexGrow:2}}>
        {category}
      </ListItemText>
      <ListItemText color="inherit" sx={{flexGrow:1, textAlign:'right'}}>
        $3.50
      </ListItemText>
      {isEditMode && (
        <Box ml={4} sx={{display:'flex', gap:'1rem'}}>
          <IconButton edge='end' aria-label="delete" sx={buttonStyleCreator('#F69400')}>
            <Typography variant='body2' sx={{color:'primary.main'}}>
              Edit
            </Typography>
          </IconButton>
          <IconButton edge='end' aria-label="delete" sx={buttonStyleCreator('#FF1A1A')}>
          <Typography variant='body2' sx={{color:'primary.main'}}>
              Del
            </Typography>
          </IconButton>
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
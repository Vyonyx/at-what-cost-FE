import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import TransactionButtons from "../components/TransactionButtons"
import TransactionList from "../components/TransactionsList"
import { RootState } from "../redux/store"
import { resetModal } from "../redux/modal"

function Dashboard() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state:RootState) => state.modal.isOpen)
  const isEditModal = useSelector((state:RootState) => state.modal.isEdit)
  const isAddModal = useSelector((state:RootState) => state.modal.isAdd)

  return (
    <>
      <Grid container columnSpacing={6} sx={{height:'100%', paddingBottom:6, background:'primary.main'}}>
        <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
          <Typography variant="h6" mt={6}>
            Transactions
          </Typography>
          <Box sx={sectionStyle}>
            <TransactionList />
          </Box>
          <TransactionButtons />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography variant="h6" mt={6} mb={2}>
            Cost Breakdown
          </Typography>
          <Container component='div' sx={graphContainerStyle}>
            <Box sx={subSectionStyle}>
              Box
            </Box>
            <Box sx={subSectionStyle}>
              Box
            </Box>
          </Container>
        </Grid>
      </Grid>

      <Dialog open={isModalOpen}>
        {isAddModal && (<DialogTitle>Add Filter</DialogTitle>)}
        {isEditModal && (<DialogTitle>Edit Filter</DialogTitle>)}
        <DialogContent>
          <DialogContentText>
            You can choose from one of our pre-defined categories or create one of your own.
          </DialogContentText>
          <DialogActions>
            {isAddModal && (
              <Button onClick={() => { dispatch(resetModal()) }}>
                Add Filter
              </Button>
            )}
            {isEditModal && (
              <Button onClick={() => { dispatch(resetModal()) }}>
                Update Filter
              </Button>
            )}
          </DialogActions>
        </DialogContent>
      </Dialog>
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
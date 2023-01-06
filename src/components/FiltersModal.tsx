import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grow, TextField } from "@mui/material"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetModal } from "../redux/modal"
import { RootState } from "../redux/store"

function FiltersModal() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state:RootState) => state.modal.isOpen)
  const isEditModal = useSelector((state:RootState) => state.modal.isEdit)
  const isAddModal = useSelector((state:RootState) => state.modal.isAdd)

  const [customCategory, setCustomCategory] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomCategory(e.target.value)
  }

  function handleClose() {
    setCustomCategory('')
    dispatch(resetModal())
  }
  
  return (
    <>
      {(isAddModal || isEditModal) && (
        <Dialog open={isModalOpen} TransitionComponent={Grow} onClose={handleClose}>
          {isAddModal && (<DialogTitle>Add Filter</DialogTitle>)}
          {isEditModal && (<DialogTitle>Edit Filter</DialogTitle>)}

          <DialogContent>
            <DialogContentText>
              You can choose from one of our pre-defined categories or create one of your own.
            </DialogContentText>

            <TextField
              variant='standard'
              type='text'
              label='Custom Category'
              id='customCategory'
              fullWidth
              onChange={handleChange}
              value={customCategory}
            />

            <DialogActions>
              {isAddModal && (
                <Button onClick={handleClose}>
                  Add Filter
                </Button>
              )}
              {isEditModal && (
                <Button onClick={handleClose}>
                  Update Filter
                </Button>
              )}
            </DialogActions>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
export default FiltersModal
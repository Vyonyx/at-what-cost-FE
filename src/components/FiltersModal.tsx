import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grow, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetModal } from "../redux/modal"
import { RootState } from "../redux/store"
import selectCategories from "../data/selectCategories"

const initialCategory = {
  selectCategory: '',
  customCategory: ''
}

function FiltersModal() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state:RootState) => state.modal.isOpen)
  const isEditModal = useSelector((state:RootState) => state.modal.isEdit)
  const isAddModal = useSelector((state:RootState) => state.modal.isAdd)

  const [category, setCategory] = useState(initialCategory)

  function handleChange(e: SelectChangeEvent | ChangeEvent) {
    const target = e.target as HTMLInputElement | HTMLSelectElement

    setCategory(prevState => {
      if (target instanceof HTMLInputElement) {
        return {...initialCategory, [target.id]: target.value}
      } else {
        return {...initialCategory, selectCategory: target.value}
      }
    })
  }

  function handleClose() {
    setCategory(initialCategory)
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

            <FormControl fullWidth sx={{margin:'2rem 0'}}>
              <InputLabel id='selectCategory-label'>Categories:</InputLabel>
              <Select
                labelId='selectCategory-label'
                id='selectCategory'
                label='Category'
                value={category.selectCategory}
                onChange={handleChange}
              >
                {selectCategories.map(category => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              variant='standard'
              type='text'
              label='Custom Category'
              id='customCategory'
              fullWidth
              onChange={handleChange}
              value={category.customCategory}
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
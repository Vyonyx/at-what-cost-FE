import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grow,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetModal } from "../redux/modal";
import { RootState } from "../redux/store";
import selectCategories from "../data/selectCategories";
import CloseIcon from "@mui/icons-material/Close";
import { add, edit } from "../redux/filters";
import {
  useAddFilterMutation,
  useEditFilterMutation,
} from "../redux/api/apiSlice";

const initialCategory = {
  selectCategory: "",
  customCategory: "",
};

function FiltersModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const isEditModal = useSelector((state: RootState) => state.modal.isEdit);
  const isAddModal = useSelector((state: RootState) => state.modal.isAdd);
  const selectedTransaction = useSelector(
    (state: RootState) => state.modal.transaction
  );
  const user = useSelector((state: RootState) => state.user);
  const filterId = useSelector((state: RootState) => state.modal.filterId);

  const [addFilter] = useAddFilterMutation();
  const [editFilter] = useEditFilterMutation();

  const [category, setCategory] = useState(initialCategory);

  function handleChange(e: SelectChangeEvent | ChangeEvent) {
    const target = e.target as HTMLInputElement | HTMLSelectElement;

    setCategory((prevState) => {
      if (target instanceof HTMLInputElement) {
        return { ...initialCategory, [target.id]: target.value };
      } else {
        return { ...initialCategory, selectCategory: target.value };
      }
    });
  }

  async function handleClose() {
    const { selectCategory: selected, customCategory: custom } = category;
    if (!selected && !custom) return dispatch(resetModal());

    const filter = {
      transaction: selectedTransaction,
      category: selected ? selected : custom,
      userId: user.id,
      id: filterId || null,
    };

    // Add filter
    if (isAddModal) {
      const newFilter = await addFilter(filter).unwrap();
    } else if (isEditModal) {
      const updatedFilter = await editFilter(filter).unwrap();
    }

    // Reset
    setCategory(initialCategory);
    dispatch(resetModal());
  }

  return (
    <>
      {(isAddModal || isEditModal) && (
        <Dialog
          open={isModalOpen}
          TransitionComponent={Grow}
          onClose={handleClose}
        >
          {isAddModal && (
            <DialogTitle>Add Filter: {selectedTransaction}</DialogTitle>
          )}
          {isEditModal && (
            <DialogTitle>Edit Filter: {selectedTransaction}</DialogTitle>
          )}

          <DialogContent>
            <DialogContentText>
              You can choose from one of our pre-defined categories or create
              one of your own.
            </DialogContentText>

            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            <FormControl fullWidth sx={{ margin: "2rem 0" }}>
              <InputLabel id="selectCategory-label">Categories:</InputLabel>
              <Select
                labelId="selectCategory-label"
                id="selectCategory"
                label="Category"
                value={category.selectCategory}
                onChange={handleChange}
              >
                {selectCategories.map((category, idx) => (
                  <MenuItem key={idx} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              variant="standard"
              type="text"
              label="Custom Category"
              id="customCategory"
              fullWidth
              onChange={handleChange}
              value={category.customCategory}
            />

            <DialogActions>
              {isAddModal && <Button onClick={handleClose}>Add Filter</Button>}
              {isEditModal && (
                <Button onClick={handleClose}>Update Filter</Button>
              )}
            </DialogActions>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
export default FiltersModal;

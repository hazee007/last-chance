import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { useState } from "react";

interface SubcategoryProps {
  open: boolean;
  handleClose: () => void;
  addSubcategory: (value: string | null) => void;
}

export default function Subcategory({
  open,
  handleClose,
  addSubcategory,
}: SubcategoryProps) {
  const [name, setName] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    handleClose();
    addSubcategory(name);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="add-subcategory-dialog-title"
      open={open}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="add-subcategory-dialog-title">
        Add Subcategory
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <TextField
          label="Name"
          id="filled-hidden-label-name"
          defaultValue="Subcategory name"
          variant="filled"
          onChange={handleChange}
          value={name}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

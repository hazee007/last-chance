import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import BackButton from "../../components/admin/BackButton";
import Subcategory from "../../components/admin/SubcategoryDialog";

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function CategoryDetails() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <BackButton />
      <Root>
        <Stack
          width={"40%"}
          spacing={3}
          justifyContent={"start"}
          sx={{ mb: 3, mt: 2 }}
        >
          <TextField
            label="Name"
            id="filled-hidden-label-name"
            defaultValue="category name"
            variant="filled"
          />

          <FormControl fullWidth>
            <InputLabel id="input-label-select-label-subcategory">
              Sub Category
            </InputLabel>
            <Select
              labelId="select-label-subcategory"
              id="select-for-subcategory"
              value={10}
              label="Sub Category"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Box sx={{ width: 300, mt: 1 }}>
              <Button variant="contained" onClick={() => setOpen(true)}>
                Add Subcategory
              </Button>
            </Box>
          </FormControl>
        </Stack>
      </Root>
      <Subcategory open={open} handleClose={handleClose} />
    </>
  );
}

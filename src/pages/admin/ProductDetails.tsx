import { Paper, Stack, TextField, Typography, styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BackButton from "../../components/admin/BackButton";
import Dropzone from "../../components/admin/Dropzone";

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function ProductDetails() {
  return (
    <div>
      <BackButton />
      <Root>
        <Typography variant="h4" component="h1">
          Product Details
        </Typography>

        <Stack
          width={"40%"}
          spacing={3}
          justifyContent={"start"}
          sx={{ mb: 3, mt: 2 }}
        >
          <TextField
            label="Name"
            id="filled-hidden-label-name"
            defaultValue="item number"
            variant="filled"
          />
          <TextField
            label="Quantity"
            id="filled-hidden-label-quantity"
            defaultValue={10}
            variant="filled"
          />

          <TextField
            label="Price"
            id="filled-hidden-label-price"
            defaultValue={200}
            variant="filled"
          />
          <TextField
            label="Description"
            id="filled-hidden-label-description"
            defaultValue="This is a description for the product"
            variant="filled"
          />

          <FormControl fullWidth>
            <InputLabel id="input-label-select-label-category">
              Category
            </InputLabel>
            <Select
              labelId="select-label-category"
              id="select-for-category"
              value={10}
              label="Category"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

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
          </FormControl>

          <Dropzone />
        </Stack>
      </Root>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import ActionButtons from "../../components/admin/ActionButtons";
import Subcategory from "../../components/admin/SubcategoryDialog";
import { useParams } from "react-router-dom";
import { selectCategory } from "../../store/categories/selectors";
import { useSelector } from "react-redux";
import { CategoryData } from "../../types";

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function CategoryDetails() {
  const [open, setOpen] = useState(false);
  const { uid = "" } = useParams();
  const category = useSelector(selectCategory(uid));

  const [categories, setCategories] = useState<CategoryData>({
    name: "",
    subcategories: [],
  });

  const onCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategories({ ...categories, name: event.target.value });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCategories({ ...categories, subcategories: [event.target.value] });
  };

  const addSubcategory = (value: string | null) => {
    if (value) {
      setCategories({
        ...categories,
        subcategories: [...categories.subcategories, value],
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (category) {
      setCategories(category);
    }
  }, [category]);

  return (
    <>
      <ActionButtons path="category" data={categories} id={uid} />
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
            variant="filled"
            onChange={onCategoryChange}
            name="name"
            value={categories?.name}
          />

          <FormControl fullWidth>
            <InputLabel id="input-label-select-label-subcategory">
              Sub Category
            </InputLabel>
            <Select
              labelId="select-label-subcategory"
              id="select-for-subcategory"
              value={categories?.subcategories[0] || ""}
              label="Sub Category"
              onChange={handleChange}
            >
              {categories?.subcategories.map((subcategory) => (
                <MenuItem key={subcategory} value={subcategory}>
                  {subcategory}
                </MenuItem>
              ))}
            </Select>
            <Box sx={{ width: 300, mt: 1 }}>
              <Button variant="contained" onClick={() => setOpen(true)}>
                Add Subcategory
              </Button>
            </Box>
          </FormControl>
        </Stack>
      </Root>
      <Subcategory
        addSubcategory={addSubcategory}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

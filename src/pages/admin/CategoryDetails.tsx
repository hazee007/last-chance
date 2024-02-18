import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import ActionButtons from "../../components/admin/ActionButtons";
import Subcategory from "../../components/admin/SubcategoryDialog";
import { selectCategory } from "../../store/categories/selectors";
import { CategoryData } from "../../types";

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const SubcategoryField = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  borderColor: theme.palette.divider,
  borderWidth: 2,
  borderStyle: "solid",
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

  const handleDelete = (value: string) => {
    setCategories({
      ...categories,
      subcategories: categories.subcategories.filter(
        (subcategory) => subcategory !== value
      ),
    });
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
          {categories?.subcategories.length > 0 && (
            <Box>
              <Typography variant="body1">Subcategories</Typography>
              <SubcategoryField elevation={2}>
                <Stack direction="row" flexWrap={"wrap"} spacing={1} useFlexGap>
                  {categories?.subcategories.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={() => handleDelete(value)}
                    />
                  ))}
                </Stack>
              </SubcategoryField>
            </Box>
          )}
          <Box sx={{ width: 300 }}>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Add Subcategory
            </Button>
          </Box>
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

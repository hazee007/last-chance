import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Paper, Stack, styled,TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import ActionButtons from "../../components/admin/ActionButtons";
import Dropzone from "../../components/admin/Dropzone";
import { selectCategories, selectItem } from "../../store/categories/selectors";
import { FileWithPreview, ItemData, ItemWithFiles } from "../../types";

const initialItemState: ItemWithFiles = {
  name: "",
  quantity: undefined,
  price: undefined,
  description: "",
  category: "",
  subcategory: "",
  imageUrls: [],
  files: [],
};

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function ProductDetails() {
  const { uid = "" } = useParams();
  const categories = useSelector(selectCategories);
  const itemToEdit = useSelector(selectItem(uid));
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [item, setItem] = useState(initialItemState);

  console.log(itemToEdit);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedValue =
      name === "quantity" || name === "price" ? parseFloat(value) : value;
    setItem({ ...item, [name]: updatedValue });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  useEffect(() => {
    if (item.category) {
      const category = categories.find(
        (category) => category.id === item.category
      );
      if (category) {
        setSubcategories(category.subcategories);
      }
    }
  }, [item.category, categories]);

  useEffect(() => {
    if (itemToEdit) {
      const files = itemToEdit.imageUrls.map((image) => ({
        preview: image,
      })) as FileWithPreview[];
      setItem({ ...itemToEdit, files });
    }
  }, [uid, itemToEdit]);

  console.log(item);

  return (
    <div>
      <ActionButtons path="items" data={item} id={uid} />
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
            variant="filled"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
          <TextField
            label="Quantity"
            id="filled-hidden-label-quantity"
            variant="filled"
            value={item.quantity === undefined ? "" : item.quantity}
            name="quantity"
            type="number"
            onChange={handleChange}
          />

          <TextField
            label="Price"
            id="filled-hidden-label-price"
            name="price"
            value={item.price === undefined ? "" : item.price}
            variant="filled"
            type="number"
            onChange={handleChange}
          />
          <TextField
            label="Description"
            id="filled-hidden-label-description"
            value={item.description}
            name="description"
            onChange={handleChange}
            variant="filled"
          />

          <FormControl fullWidth>
            <InputLabel id="input-label-select-label-category">
              Category
            </InputLabel>
            <Select
              labelId="select-label-category"
              id="select-for-category"
              value={item.category}
              name="category"
              label="Category"
              onChange={handleSelectChange}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="input-label-select-label-subcategory">
              Sub Category
            </InputLabel>
            <Select
              labelId="select-label-subcategory"
              id="select-for-subcategory"
              value={item.subcategory}
              label="Sub Category"
              name="subcategory"
              onChange={handleSelectChange}
            >
              {subcategories.map((subcategory) => (
                <MenuItem key={subcategory} value={subcategory}>
                  {subcategory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Dropzone setItem={setItem} files={item.files} />
        </Stack>
      </Root>
    </div>
  );
}

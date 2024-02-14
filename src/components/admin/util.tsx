import { addCategory, updateCategory } from "../../api/category";
import { addItem, updateItem } from "../../api/items";
import { CategoryData, ItemWithFiles } from "../../types";

type ClickProps = {
  path?: string;
  data?: CategoryData | ItemWithFiles;
  navigate: (value: number) => void;
  id?: string;
};

export function handleAddClick({ path, data, navigate }: ClickProps) {
  switch (path) {
    case "category":
      if (data?.name === "") return;

      addCategory(data as CategoryData);
      break;
    case "items":
      addItem(data as ItemWithFiles);
      break;
    default:
      break;
  }
  navigate(-1);
}

export function handleUpdateClick({ path, data, navigate, id }: ClickProps) {
  switch (path) {
    case "category":
      if (data?.name === "") return;
      updateCategory(data as CategoryData);
      break;
    case "items":
      updateItem(data as ItemWithFiles, id as string);
      break;
    default:
      break;
  }
  navigate(-1);
}

import { Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectItems,
} from "../../store/categories/selectors";
import { ItemData } from "../../types";

export default function Products() {
  const navigate = useNavigate();
  const items = useSelector(selectItems);
  const categories = useSelector(selectCategories);
  const [itemsWithCategories, setItemsWithCategories] = useState<ItemData[]>(
    []
  );

  useEffect(() => {
    const itemsWithCategories = items.map((item) => {
      const category = categories.find(
        (category) => category.id === item.category
      );
      return {
        ...item,
        category: category ? category.name : "No Category",
      };
    });
    setItemsWithCategories(itemsWithCategories);
  }, [items, categories]);

  const columns = useMemo<MRT_ColumnDef<ItemData>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        size: 100,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: itemsWithCategories,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => navigate(`/admin/products/${row.original.id}`),
      sx: {
        cursor: "pointer",
      },
    }),
  });

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Items
      </Typography>
      <MaterialReactTable table={table} />
      <Fab
        // color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 40, right: 16 }}
        onClick={() => navigate("/admin/products/new")}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

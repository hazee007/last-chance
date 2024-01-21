import { Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

interface Item {
  uid: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
}

const data: Item[] = [
  {
    uid: "1",
    name: "Item 1",
    category: "Category 1",
    quantity: 10,
    price: 100,
  },
  {
    uid: "2",
    name: "Item 2",
    category: "Category 2",
    quantity: 20,
    price: 200,
  },
  {
    uid: "3",
    name: "Item 3",
    category: "Category 3",
    quantity: 30,
    price: 300,
  },
  {
    uid: "4",
    name: "Item 4",
    category: "Category 4",
    quantity: 40,
    price: 400,
  },
  {
    uid: "5",
    name: "Item 5",
    category: "Category 5",
    quantity: 50,
    price: 500,
  },
  {
    uid: "6",
    name: "Item 6",
    category: "Category 6",
    quantity: 60,
    price: 600,
  },
  {
    uid: "7",
    name: "Item 7",
    category: "Category 7",
    quantity: 70,
    price: 700,
  },
  {
    uid: "8",
    name: "Item 8",
    category: "Category 8",
    quantity: 80,
    price: 800,
  },
  {
    uid: "9",
    name: "Item 9",
    category: "Category 9",
    quantity: 90,
    price: 900,
  },
  {
    uid: "10",
    name: "Item 10",
    category: "Category 10",
    quantity: 100,
    price: 1000,
  },
];

export default function Products() {
  const navigate = useNavigate();
  const columns = useMemo<MRT_ColumnDef<Item>[]>(
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
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => navigate(`/admin/products/${row.id}`),
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

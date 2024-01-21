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

interface Category {
  name: string;
  subcategories: string[];
}

const data: Category[] = [
  { name: "Electronics", subcategories: ["Mobile", "Laptop", "Television"] },
  { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
  {
    name: "Home & Kitchen",
    subcategories: ["Furniture", "Decor", "Kitchen Appliances"],
  },
  { name: "Books", subcategories: ["Fiction", "Non-fiction", "Educational"] },
  {
    name: "Automotive",
    subcategories: ["Car Accessories", "Bike Accessories", "Car Electronics"],
  },
  {
    name: "Sports & Fitness",
    subcategories: ["Gym Equipment", "Outdoor Sports", "Indoor Games"],
  },
  { name: "Grocery", subcategories: ["Staples", "Snacks", "Beverages"] },
  {
    name: "Beauty & Health",
    subcategories: ["Makeup", "Skincare", "Healthcare"],
  },
  {
    name: "Toys & Games",
    subcategories: ["Action Figures", "Board Games", "Dolls"],
  },
  {
    name: "Pet Supplies",
    subcategories: ["Dog Supplies", "Cat Supplies", "Bird Supplies"],
  },
];

export default function Categories() {
  const navigate = useNavigate();
  const columns = useMemo<MRT_ColumnDef<Category>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "subcategories",
        header: "Subcategories",
        size: 150,
        Cell: ({ renderedCellValue }) => (
          <span>
            {Array.isArray(renderedCellValue)
              ? renderedCellValue.join(", ")
              : ""}
          </span>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => navigate(`/admin/categories/${row.id}`),
      sx: {
        cursor: "pointer",
      },
    }),
  });

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Categories
      </Typography>
      <MaterialReactTable table={table} />
      <Fab
        // color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 40, right: 16 }}
        onClick={() => navigate("/admin/categories/new")}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

import { Typography } from "@mui/material";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import UserDialog from "../../components/admin/UserDialog";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../store/user/selector";
import { UserData } from "../../types";

export default function Users() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const allUsers = useSelector(selectAllUsers);

  const handleClose = () => {
    setOpen(false);
  };

  const columns = useMemo<MRT_ColumnDef<UserData>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Emails",
        size: 200,
      },
      {
        accessorKey: "createdAt",
        header: "Added On",
        size: 150,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: allUsers,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        navigate(`/admin/users/${row.original.id}`);
        // setOpen(true);
      },
      sx: {
        cursor: "pointer", //you might want to change the cursor too when adding an onClick
      },
    }),
  });

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>
      <MaterialReactTable table={table} />
      <UserDialog open={open} handleClose={handleClose} />
    </div>
  );
}

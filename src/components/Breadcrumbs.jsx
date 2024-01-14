import { Link, useLocation } from "react-router-dom";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  // Add "home" to the beginning of the pathnames array
  pathnames.unshift("home");
  return (
    <MuiBreadcrumbs aria-label="Breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <div key={to}>{value.toUpperCase()}</div>
        ) : (
          <Link color="inherit" to={to} key={to}>
            {value.toUpperCase()}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}

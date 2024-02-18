import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { signOutStart } from "../store/user/reducer";
import { selectCurrentUser } from "../store/user/selector";
import { UserData } from "../types";

const options = (user: UserData | null) => {
  if (user) {
    return ["Profile", "Sign out"];
  } else {
    return ["Sign in"];
  }
};

export default function Person() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option: string) => {
    if (option === "Sign out") {
      dispatch(signOutStart());
      navigate("/home");
    }
    if (option === "Profile") {
      navigate("/profile");
    }
    if (option === "Sign in") {
      navigate("/login");
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "15ch",
          },
        }}
      >
        {options(user).map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

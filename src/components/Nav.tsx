import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutButton from "./LogoutButton";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path: string = "") => {
    setAnchorEl(null);
    if (path) navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={toolbarStyle}>
        <>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
            {user.token && (
              <>
                <MenuItem onClick={() => handleClose("tool")}>
                  Dashboard
                </MenuItem>
              </>
            )}
          </Menu>
        </>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          At What Cost
        </Typography>
        {user?.token ? (
          <>
            <Typography mr={4}>{user?.name.toLowerCase()}</Typography>
            <LogoutButton />
          </>
        ) : (
          <>
            <SignUpButton />
            <SignInButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

const toolbarStyle = {
  backgroundColor: "background.default",
  color: "#F2F2F2",
};

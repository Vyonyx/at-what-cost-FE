import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUserDetails } from "../redux/user";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUserDetails());
    navigate("/");
  };

  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "primary.main" }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
export default LogoutButton;

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SignUpButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "primary.main" }}
      onClick={() => {
        navigate("/signup");
      }}
    >
      Sign Up
    </Button>
  );
}
export default SignUpButton;

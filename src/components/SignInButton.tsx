import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignInButton() {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "primary.main", marginLeft: "1rem" }}
      onClick={() => {
        navigate("/login");
      }}
    >
      Sign In
    </Button>
  );
}
export default SignInButton;

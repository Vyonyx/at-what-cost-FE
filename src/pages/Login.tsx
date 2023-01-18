import {
  Container,
  Typography,
  Box,
  Alert,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCheckUserMutation } from "../redux/api/apiSlice";
import { loadUserDetails } from "../redux/user";

const UserInfoSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password length too short")
    .max(30, "Password length too long"),
});

const UserInfoErrorSchema = z.object({
  emailAlert: z.string(),
  passwordAlert: z.string(),
});

type UserInfo = z.infer<typeof UserInfoSchema>;
type UserInfoError = z.infer<typeof UserInfoErrorSchema>;

const initialUserInfo: UserInfo = {
  email: "",
  password: "",
};

const initialUserInfoErrorState: UserInfoError = {
  emailAlert: "",
  passwordAlert: "",
};

function Login() {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [infoErrors, setInfoErrors] = useState(initialUserInfoErrorState);
  const [checkUserLogin] = useCheckUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { type, value } = target;
    setUserInfo((prevState) => {
      return { ...prevState, [type]: value };
    });
    setInfoErrors(initialUserInfoErrorState);
  };

  const handleSubmit = async () => {
    const result = UserInfoSchema.safeParse(userInfo);

    if (!result.success) {
      const { email: emailErrors, password: passwordErrors } =
        result.error.format();
      const emailAlert = emailErrors?._errors.join(", ") || "";
      const passwordAlert = passwordErrors?._errors.join(", ") || "";
      setInfoErrors({ emailAlert, passwordAlert });
    }

    // Submit user info to API
    const userDetailsAndToken = await checkUserLogin(userInfo).unwrap();
    if (!userDetailsAndToken) return;
    dispatch(loadUserDetails(userDetailsAndToken));

    // Go to dashboard if authenticated
    navigate("/tool");
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
          color: "primary.main",
          padding: "2rem",
          border: "1px solid white",
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            textDecoration: "underline",
          }}
        >
          Login:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "4rem",
          }}
        >
          {infoErrors.emailAlert && (
            <Alert severity="error" sx={{ color: "white" }}>
              {infoErrors.emailAlert}
            </Alert>
          )}
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            id="user_email"
            value={userInfo.email}
            fullWidth={true}
            color="primary"
            onChange={handleChange}
          />

          {infoErrors.passwordAlert && (
            <Alert severity="error" sx={{ color: "white" }}>
              {infoErrors.passwordAlert}
            </Alert>
          )}
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            id="user_password"
            value={userInfo.password}
            fullWidth={true}
            color="primary"
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            sx={{ marginTop: "4rem" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default Login;

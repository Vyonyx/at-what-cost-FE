import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { z } from "zod";

const userInfoSchema = z.object({
  user_name: z
    .string()
    .min(5, { message: "User name cannot be less than 5 characters long" }),

  user_email: z.string().email("Invalid email address"),

  user_password: z
    .string()
    .length(6, { message: "Password must be at least 6 characters long" }),
});

const initialUserInfoState: z.infer<typeof userInfoSchema> = {
  user_name: "",
  user_email: "",
  user_password: "",
};

const userInfoErrorSchema = z.object({
  name_alert: z.string(),
  email_alert: z.string(),
  password_alert: z.string(),
});

const initialUserInfoErrorState: z.infer<typeof userInfoErrorSchema> = {
  name_alert: "",
  email_alert: "",
  password_alert: "",
};

function SignUp() {
  const [userInfo, setUserInfo] = useState(initialUserInfoState);
  const [infoErrors, setInfoErrors] = useState(initialUserInfoErrorState);
  const { name_alert, email_alert, password_alert } = infoErrors;

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { id, value } = target;
    setUserInfo((prevState) => {
      return { ...prevState, [id]: value };
    });
    setInfoErrors(initialUserInfoErrorState);
  };

  const handleSubmit = () => {
    try {
      const result = userInfoSchema.safeParse(userInfo);
      if (result.success) {
        setUserInfo(initialUserInfoState);
      } else {
        const { user_name, user_email, user_password } = result.error.format();
        setInfoErrors((prevState) => {
          return {
            ...prevState,
            name_alert: user_name?._errors.join(", ") || "",
            email_alert: user_email?._errors.join(", ") || "",
            password_alert: user_password?._errors.join(", ") || "",
          };
        });
      }
    } catch (error) {
      console.error(error);
    }
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
          Sign Up:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "4rem",
          }}
        >
          {name_alert && (
            <Alert severity="error" sx={{ color: "white" }}>
              {name_alert}
            </Alert>
          )}
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            id="user_name"
            value={userInfo.user_name}
            fullWidth={true}
            color="primary"
            onChange={handleChange}
          />

          {email_alert && (
            <Alert severity="error" sx={{ color: "white" }}>
              {email_alert}
            </Alert>
          )}
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            id="user_email"
            value={userInfo.user_email}
            fullWidth={true}
            color="primary"
            onChange={handleChange}
          />

          {password_alert && (
            <Alert severity="error" sx={{ color: "white" }}>
              {password_alert}
            </Alert>
          )}
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            id="user_password"
            value={userInfo.user_password}
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
export default SignUp;

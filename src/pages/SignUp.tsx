import { Button, TextField, Typography } from "@mui/material";
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

function SignUp() {
  const [userInfo, setUserInfo] = useState(initialUserInfoState);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { id, value } = target;
    setUserInfo((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const handleSubmit = () => {
    try {
      userInfoSchema.parse(userInfo);
      setUserInfo(initialUserInfoState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "6rem",
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

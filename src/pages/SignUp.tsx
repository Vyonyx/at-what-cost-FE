import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { id, value } = target;
    setUserInfo((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const handleSubmit = () => {
    console.log(userInfo);
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

import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Register() {
  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      marginTop={2}
      padding={2}
    >
      <Typography variant="h3" fontWeight={"bold"} marginBottom={2}>
        Register
      </Typography>
      <Stack gap={2}>
        <TextField
          size="small"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button variant="contained">Register</Button>
      </Stack>
    </Stack>
  );
}

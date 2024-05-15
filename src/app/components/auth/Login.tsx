import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useMember from "../../../hooks/useMember";

export default function Login() {
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");

  const { loginMember } = useMember();

  const handleLoginRequest = () => {
    loginMember.mutate({ memberEmail, memberPassword });
  };

  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      padding={2}
      marginTop={10}
    >
      <Typography marginBottom={2} fontWeight={"bold"} variant="h3">
        Login
      </Typography>
      <Stack gap={2}>
        <TextField
          type="email"
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setMemberEmail(e.target.value)}
        />
        <TextField
          type="password"
          size="small"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setMemberPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLoginRequest}>
          Login
        </Button>
      </Stack>
    </Stack>
  );
}

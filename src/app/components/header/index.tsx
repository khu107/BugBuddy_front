import { Avatar, Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Register from "../../screen/registerPage";
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose: () => void = () => setOpen(false);
  const authMember = false;
  return (
    <Container>
      <Register open={open} handleClose={handleClose} />
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <h1>BugBuddy</h1>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={3}
        >
          <NotificationsNoneOutlinedIcon />
          <SearchIcon />
          {authMember ? (
            <Button variant="contained" color="secondary">
              새 글 작성
            </Button>
          ) : null}

          {authMember ? (
            <Avatar>s</Avatar>
          ) : (
            <Button variant="contained" onClick={handleOpen}>
              login
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

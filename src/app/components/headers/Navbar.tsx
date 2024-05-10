import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
export default function Navbar() {
  const authMember = false;
  return (
    <div className="navbar">
      <Container className="navbar-container">
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          height={"100%"}
          justifyContent={"space-around"}
        >
          <Typography variant="h3" color={"#D3D3D3"} letterSpacing={"0.3em"}>
            PRETTY GAL
          </Typography>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"500px"}
          >
            <Box className="hover-line">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Shop
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink
                to="/sale"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Sale
              </NavLink>
            </Box>
            {authMember && (
              <Box>
                <NavLink to="/">Admin</NavLink>
              </Box>
            )}
            <AddShoppingCartSharpIcon />

            {!authMember ? (
              <Button variant="contained" size="small" color="secondary">
                Login
              </Button>
            ) : (
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

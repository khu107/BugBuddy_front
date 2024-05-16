import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import { basketOpen } from "../../../redux/basketSlice";
import { openAuthModal } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useGlobals } from "../../../hooks/useGlobals";
import { useState } from "react";
import { Logout } from "@mui/icons-material";
import useMember from "../../../hooks/useMember";

export default function Navbar() {
  const { authMember } = useGlobals();
  console.log(authMember?.memberNick[0]);

  const dispatch = useDispatch();
  const { logoutMember } = useMember();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseLogout = () => setAnchorEl(null);

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
            {authMember && authMember.memberType === "ADMIN" && (
              <Box className="hover-line">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Dash board
                </NavLink>
              </Box>
            )}
            <Badge badgeContent={4} color="secondary">
              <ShoppingBagIcon
                sx={{ color: "white" }}
                onClick={() => dispatch(basketOpen())}
              />
            </Badge>

            {!authMember ? (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={() => dispatch(openAuthModal())}
              >
                Login
              </Button>
            ) : (
              <Avatar alt="Remy Sharp" onClick={handleLogoutClick}>
                {authMember && authMember?.memberNick[0].toUpperCase()}
              </Avatar>
            )}
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClick={handleCloseLogout}
              onClose={handleCloseLogout}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => logoutMember.mutate()}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal, openLoginModal } from "../../../redux/basketSlice";
import { Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function Basket() {
  const dispatch = useDispatch();
  const loginModalOpen = useSelector(
    (state: any) => state.basket.loginModalOpen
  );
  return (
    <div>
      <Drawer
        open={loginModalOpen}
        anchor="right"
        onClose={() => dispatch(closeLoginModal())}
      >
        <Box sx={{ width: 350 }} role="presentation">
          <Stack>
            <Stack
              bgcolor={"black"}
              height={"100px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <CloseIcon
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => dispatch(closeLoginModal())}
              />
              <Typography variant="h3" color={"white"}>
                Cart
              </Typography>

              <div></div>
            </Stack>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
}

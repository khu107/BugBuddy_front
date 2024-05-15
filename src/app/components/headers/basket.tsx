import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { basketClose } from "../../../redux/basketSlice";
import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Img from "../../../auth.webp";
export default function Basket() {
  const dispatch = useDispatch();
  const loginModalOpen = useSelector((state: any) => state.basket.basketOpen);
  return (
    <div>
      <Drawer
        open={loginModalOpen}
        anchor="right"
        onClose={() => dispatch(basketClose())}
      >
        <Box
          sx={{
            width: 350,
            height: "100vh",
            display: "grid",
            gridTemplateRows: "87px 1fr 87px",
          }}
          role="presentation"
        >
          <Box bgcolor={"black"} padding={"0px 34px 0px 34px"}>
            <Stack
              height={"87px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <CloseIcon
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => dispatch(basketClose())}
              />
              <Typography variant="h3" color={"white"}>
                Cart
              </Typography>
              <div></div>
            </Stack>
          </Box>

          <Box
            bgcolor={"white"}
            padding={"34px"}
            sx={{
              display: "grid",
              gridTemplateRows: "1fr 87px",
              overflow: "auto",
            }}
          >
            <Box>
              {[1, 2, 3].map((v, i) => {
                return (
                  <Stack
                    key={i}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    marginBottom={"10px"}
                  >
                    <Stack flexDirection={"row"} gap={2}>
                      <img src={Img} alt="" width={80} />
                      <Stack>
                        <Typography>I'm a Product</Typography>
                        <Typography>$19.99 $14.99</Typography>- 1 +
                      </Stack>
                    </Stack>
                    <div>x</div>
                  </Stack>
                );
              })}
            </Box>

            <Stack>
              <Typography variant="h2">Subtotal</Typography>
              <Typography variant="h2">$14.99</Typography>
            </Stack>
          </Box>
          <Stack
            borderTop={"1px solid #d3d3d3"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"0px 34px 0px 34px"}
          >
            <Button variant="contained" fullWidth>
              View Cart
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </div>
  );
}

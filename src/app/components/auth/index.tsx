import { Box, Modal, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../../redux/authSlice";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Divider from "@mui/material/Divider";
import Logo from "../../../log.webp";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
};

type ActiveType = "login" | "register";
export default function Auth() {
  const dispatch = useDispatch();
  const loginModalOpen = useSelector((state: any) => state.auth.openAuthModal);
  const [active, setActive] = useState<ActiveType>("login");

  return (
    <div>
      <Modal open={loginModalOpen} onClose={() => dispatch(closeAuthModal())}>
        <Box sx={style}>
          <Stack
            sx={{ border: "1px solid red" }}
            flexDirection={"row"}
            height={"100%"}
          >
            <Box width={"50%"}>
              <img src={Logo} alt="" width={"100%"} height={"100%"} />
            </Box>
            <Box width={"50%"} sx={{ border: "1px solid red" }}>
              <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                gap={2}
                marginTop={3}
              >
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => setActive("login")}
                >
                  Login
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => setActive("register")}
                >
                  Register
                </Box>
              </Stack>
              {active === "login" ? <Login /> : <Register />}
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

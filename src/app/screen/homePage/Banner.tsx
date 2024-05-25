import { Box, Button, Stack, Typography } from "@mui/material";

export default function Banner() {
  return (
    <div className="baner">
      <Box className="shop_box">
        <Stack gap={2} alignItems={"center"}>
          <Typography variant="h1" className="shop_title">
            FALL & WINTER
          </Typography>
          <Button
            sx={{
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
              width: "212px",
            }}
            variant="contained"
            size="large"
          >
            Shop Now
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

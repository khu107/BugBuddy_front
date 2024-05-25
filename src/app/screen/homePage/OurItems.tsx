import {
  Box,
  Card,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export default function OurItems() {
  return (
    <div className="items">
      <Container>
        <Stack>
          <Stack>
            <Typography>YEAR ROUND</Typography>
            <Typography>Must Have Items</Typography>
          </Stack>
          <Box className="card_items">
            {[1, 2, 3].map(() => {
              return (
                <Card sx={{ width: 315 }}>
                  <CardMedia
                    sx={{ height: 409 }}
                    image="/image/kra2.jpeg"
                    title="green iguana"
                  />
                </Card>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

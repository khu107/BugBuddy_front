import { TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { T } from "../../../libs/types/common";
import useAdmin from "../../../hooks/useAdmin";

export default function CreateProduct() {
  const [productImages, setProductImages] = useState<(string | File)[]>([]);
  const [productCollection, setProductCollection] = useState<string>("");
  const [productSize, setProductSize] = useState<string>("");
  const [productColor, setProductColor] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productLeftCount, setProductLeftCount] = useState<string>("");
  const [productDesc, setProductDesc] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setProductImages((prevImages) =>
        [...prevImages, ...fileArray].slice(0, 3)
      );
    }
  };

  const handleProductCollectionChange = (e: SelectChangeEvent<string>) => {
    setProductCollection(e.target.value);
  };

  const handleProductSizeChange = (e: SelectChangeEvent<string>) => {
    setProductSize(e.target.value);
  };

  const handleProductColorChange = (e: SelectChangeEvent<string>) => {
    setProductColor(e.target.value);
  };

  const { createProduct } = useAdmin();

  const handleSubmit = async (e: T) => {
    e.preventDefault();
    const newProduct = {
      productName,
      productPrice,
      productLeftCount,
      productCollection,
      productSize,
      productColor,
      productDesc,
      productImages,
    };
    createProduct.mutate(newProduct);
    setProductName("");
    setProductPrice("");
    setProductLeftCount("");
    setProductCollection("");
    setProductSize("");
    setProductColor("");
    setProductDesc("");
    setProductImages([]);
  };

  return (
    <div>
      <TabPanel value="3">
        <Container>
          <Stack gap={5}>
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Stack
              flexDirection={"column"}
              justifyContent={"space-between"}
              gap={5}
            >
              <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <TextField
                  sx={{ width: "48%" }}
                  id="outlined-basic"
                  type="number"
                  label="Product Price"
                  variant="outlined"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
                <TextField
                  sx={{ width: "48%" }}
                  id="outlined-basic"
                  type="number"
                  label="Product Left Counts"
                  variant="outlined"
                  value={productLeftCount}
                  onChange={(e) => setProductLeftCount(e.target.value)}
                />
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"space-between"}>
                <FormControl sx={{ width: "30%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Product Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productCollection}
                    label="Product Type"
                    onChange={handleProductCollectionChange}
                  >
                    <MenuItem value={"SHOP"}>SHOP</MenuItem>
                    <MenuItem value={"SALE"}>SALE</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: "30%" }}>
                  <InputLabel id="product-size-label">Product Size</InputLabel>
                  <Select
                    labelId="product-size-label"
                    id="product-size"
                    value={productSize}
                    label="Product Size"
                    onChange={handleProductSizeChange}
                  >
                    <MenuItem value={"220"}>220</MenuItem>
                    <MenuItem value={"225"}>225</MenuItem>
                    <MenuItem value={"230"}>230</MenuItem>
                    <MenuItem value={"235"}>235</MenuItem>
                    <MenuItem value={"240"}>240</MenuItem>
                    <MenuItem value={"245"}>245</MenuItem>
                    <MenuItem value={"250"}>250</MenuItem>
                    <MenuItem value={"255"}>255</MenuItem>
                    <MenuItem value={"260"}>260</MenuItem>
                    <MenuItem value={"265"}>265</MenuItem>
                    <MenuItem value={"270"}>270</MenuItem>
                    <MenuItem value={"275"}>275</MenuItem>
                    <MenuItem value={"280"}>280</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: "30%" }}>
                  <InputLabel id="product-color-label">
                    Product Color
                  </InputLabel>
                  <Select
                    labelId="product-color-label"
                    id="product-color"
                    value={productColor}
                    label="Product Color"
                    onChange={handleProductColorChange}
                  >
                    <MenuItem value={"BLACK"}>BLACK</MenuItem>
                    <MenuItem value={"BROWN"}>BROWN</MenuItem>
                    <MenuItem value={"GREEN"}>GREEN</MenuItem>
                    <MenuItem value={"WHITE"}>WHITE</MenuItem>
                    <MenuItem value={"PURPLE"}>PURPLE</MenuItem>
                    <MenuItem value={"RED"}>RED</MenuItem>
                    <MenuItem value={"OFF_WHITE"}>OFF_WHITE</MenuItem>
                    <MenuItem value={"YELLOW"}>YELLOW</MenuItem>
                    <MenuItem value={"PINK"}>PINK</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <TextField
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
              />
            </Stack>
          </Stack>
          <Stack flexDirection={"column"} gap={2} marginTop={4}>
            <label htmlFor="product-images" style={{ width: "190px" }}>
              <input
                id="product-images"
                name="product-images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <Button variant="contained" component="span">
                <Stack gap={1} flexDirection={"row"} alignItems={"center"}>
                  <CloudUploadIcon />
                  Upload Images
                </Stack>
              </Button>
            </label>

            <Stack flexDirection={"row"} gap={2}>
              {productImages.map((image, index) => (
                <Box key={index} sx={{ width: "100px", height: "100px" }}>
                  <img
                    src={URL.createObjectURL(image as File)}
                    alt={`product-${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Stack>
          <Button
            sx={{ marginTop: "20px" }}
            variant="contained"
            component="span"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Container>
      </TabPanel>
    </div>
  );
}

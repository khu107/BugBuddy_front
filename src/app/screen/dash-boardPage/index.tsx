import React, { SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { Box } from "@mui/material";
import Users from "./Users";
import Products from "./Products";
import CreateProduct from "./CreateProduct";

export default function DashBoardPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Users" value={"1"} />
            <Tab label="Products" value={"2"} />
            <Tab label="CreateProduct" value={"3"} />
          </Tabs>
        </Box>
        <Users />
        <Products />
        <CreateProduct />
      </TabContext>
    </div>
  );
}

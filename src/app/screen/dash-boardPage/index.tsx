import React, { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { Box } from "@mui/material";
import Users from "./Users";
import Products from "./Products";
import CreateProduct from "./CreateProduct";
import { useGlobals } from "../../../hooks/useGlobals";

export default function DashBoardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [value, setValue] = useState(query.get("tab") || "1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`?tab=${newValue}`, { replace: true });
  };

  const { authMember } = useGlobals();
  useEffect(() => {
    if (!authMember || authMember?.memberType !== "ADMIN") {
      navigate("/");
    }
  }, [authMember, navigate]);

  useEffect(() => {
    const tab = query.get("tab");
    if (tab) {
      setValue(tab);
    }
  }, [location]);

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
            <Tab label="Users" value="1" />
            <Tab label="Products" value="2" />
            <Tab label="CreateProduct" value="3" />
          </Tabs>
        </Box>
        <Users />
        <Products />
        <CreateProduct />
      </TabContext>
    </div>
  );
}

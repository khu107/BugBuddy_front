import { TabPanel } from "@mui/lab";
import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useProducts from "../../../hooks/useProducts";

export default function Products() {
  const {
    getProducts: { isLoading, error, data },
  } = useProducts();
  console.log(data);

  const handleStatusChange = (_id: string, memberStatus: string) => {
    // updateUser.mutate({ _id, memberStatus });
  };

  return (
    <div>
      <TabPanel value="2">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Type</TableCell>
                <TableCell>Product Color</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Product Left Count</TableCell>
                <TableCell>Product Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((user, index) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.productName}</TableCell>
                    <TableCell>{user.productCollection}</TableCell>
                    <TableCell>{user.productColor}</TableCell>
                    <TableCell>{user.productPrice}</TableCell>
                    <TableCell>{user.productLeftCount}</TableCell>
                    <TableCell>
                      <Select
                        size="small"
                        value={user.productStatus}
                        onChange={(e) =>
                          handleStatusChange(user._id, e.target.value)
                        }
                      >
                        <MenuItem value="PAUSE">PAUSE</MenuItem>
                        <MenuItem value="PROCESS">PROCESS</MenuItem>
                        <MenuItem value="DELETE">DELETE</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </div>
  );
}

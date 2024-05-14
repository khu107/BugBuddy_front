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
import useMember from "../../../hooks/useMember";

export default function Users() {
  const {
    getUsers: { isLoading, error, data },
  } = useMember();

  const { updateUser } = useMember();

  const handleStatusChange = (_id: string, memberStatus: string) => {
    updateUser.mutate({ _id, memberStatus });
  };

  return (
    <div>
      <TabPanel value="1">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((user, index) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.memberNick}</TableCell>
                    <TableCell>{user.memberPhone}</TableCell>
                    <TableCell>{user.memberEmail}</TableCell>
                    <TableCell>
                      <Select
                        size="small"
                        value={user.memberStatus}
                        onChange={(e) =>
                          handleStatusChange(user._id, e.target.value)
                        }
                      >
                        <MenuItem value="BLOCK">BLOCK</MenuItem>
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
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

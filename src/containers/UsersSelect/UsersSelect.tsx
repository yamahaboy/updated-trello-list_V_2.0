import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useAppSelector } from "../../store/reducers/store";
import { SelectChangeEvent } from "@mui/material/Select";
import Avatar from "./Avatar/Avatar";
import { Box } from "@mui/material";

type UserSelectProps = {
  selectedUser: number;
  onSelectChange: (selectedUserId: number) => void;
};

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { selectedUser, onSelectChange } = props;
  const { users } = useAppSelector((state) => state.todoReducer);

  const handleUserChange = (event: SelectChangeEvent<number>) => {
    onSelectChange(event.target.value as number);
  };

  return (
    <FormControl>
      <Select
        sx={{ width: "15rem" }}
        value={selectedUser}
        onChange={handleUserChange}
      >
        <MenuItem value={0}>None</MenuItem>
        {users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar id={user.id} name={user.name} />
              <span style={{ marginLeft: "8px" }}>{user.name}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;

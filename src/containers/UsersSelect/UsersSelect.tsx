import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useAppSelector } from "../../store/reducers/store";
import { SelectChangeEvent } from "@mui/material/Select";

type UserSelectProps = {
  selectedUser: number;
  onSelectChange: (selectedUserId: number) => void;
};

const UserSelect: React.FC<UserSelectProps> = ({
  selectedUser,
  onSelectChange,
}) => {
  const { users } = useAppSelector((state) => state.todoReducer);

  const handleUserChange = (event: SelectChangeEvent<number>) => {
    onSelectChange(event.target.value as number);
  };

  return (
    <FormControl>
      <Select
        sx={{ width: "12rem" }}
        value={selectedUser}
        onChange={handleUserChange}
      >
        <MenuItem value={0}>None</MenuItem>
        {users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;

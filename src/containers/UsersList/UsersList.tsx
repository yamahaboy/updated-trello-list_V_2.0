import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import { List, ListItem, Typography } from "@mui/material";
import { ListItemStyles, ListStyles } from "./styles";
import { setUserFilter } from "../../store/reducers/toDoReducer/Actions";

const UserList: React.FC = () => {
  const { users } = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();

  const handleUserClick = (userId: number) => {
    dispatch(setUserFilter(userId));
  };

  
  return (
    <List
      sx={ListStyles}
    >
      <Typography variant="h4" gutterBottom>
        List of Users
      </Typography>

      {users.map((user) => (
        <ListItem
          key={user.id}
          value={user.id}
          sx={ListItemStyles}
          onClick={() => handleUserClick(user.id)}
        >
          {user.name}
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;

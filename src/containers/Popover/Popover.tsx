import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Box, List, ListItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import { setUserFilter } from "../../store/reducers/toDoReducer/Actions";

const UserPopover: React.FC = () => {
  const { users, inputData } = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const handleOpenClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickClose = () => {
    setAnchorEl(null);
    setIsClicked(true);
  };

  const handleUserClick = (userId: number) => {
    dispatch(setUserFilter(userId));
    setAnchorEl(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inputData?.toLowerCase() || "")
  );
  return (
    <Box>
      <Button
        onClick={handleOpenClick}
        sx={{
          width: "56px",
          height: "56px",
          backgroundColor: isClicked
            ? "rgb(207, 204, 204, 0.6)"
            : "rgb(207, 204, 204, 0.3)",
          "&:hover": {
            backgroundColor: "rgb(207, 204, 204, 0.5)",
          },
          "&:active": {
            backgroundColor: "rgb(207, 204, 204, 0.7)",
          },
          marginTop:".5rem"
        }}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClickClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <List>
          {filteredUsers.map((user) => (
            <ListItem
              key={user.id}
              value={user.id}
              onClick={() => handleUserClick(user.id)}
            >
              {user.name}
            </ListItem>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

export default UserPopover;

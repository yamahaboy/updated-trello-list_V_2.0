import { Box, List, ListItem } from "@mui/material";
import { useAppSelector } from "../../store/reducers/store";
import { Strong } from "../Card/styles";
import UserList from "../UsersList/UsersList";
import { FullUserInfoListItemStyle, FullUserInfoListStyle } from "./styles";

const FullUserInfo: React.FC = () => {
  const { fullUsers, userfilter } = useAppSelector(
    (state) => state.todoReducer
  );
  const selectedUser = fullUsers.find((user) => user.id === userfilter);

  console.log(selectedUser, "selectedUser");

  return (
    <Box>
      {selectedUser ? (
        <List key={selectedUser.id} sx={FullUserInfoListStyle}>
          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Name:</Strong> {selectedUser.name}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Username:</Strong> {selectedUser.username}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Email:</Strong> {selectedUser.email}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Street:</Strong> {selectedUser.address.street}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>City:</Strong> {selectedUser.address.city}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Phone:</Strong> {selectedUser.phone}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Website:</Strong> {selectedUser.website}
          </ListItem>

          <ListItem sx={FullUserInfoListItemStyle}>
            <Strong>Company name:</Strong> {selectedUser.company.name}
          </ListItem>
        </List>
      ) : (
        <UserList />
      )}
    </Box>
  );
};

export default FullUserInfo;

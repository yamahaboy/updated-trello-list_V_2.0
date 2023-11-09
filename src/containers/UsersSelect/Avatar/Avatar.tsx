import React from "react";
import Avatar from "@mui/material/Avatar";
import { IToDoUsers } from "../../../models/IToDoForm";

const CustomAvatar: React.FC<IToDoUsers> = (props) => {
  const { id, name } = props;
  const cleanedName = name.replace(/Mr\.|Mrs\./g, "").trim();
  const [firstName, lastName] = cleanedName.split(" ");
  const initials = firstName.charAt(0) + lastName.charAt(0);

  const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

  const avatarStyle = {
    backgroundColor: randomColor,
    color: "white",
  };

  return (
    <Avatar sx={avatarStyle} key={id}>
      {initials}
    </Avatar>
  );
};

export default CustomAvatar;

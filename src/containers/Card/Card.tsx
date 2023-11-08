import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";

import { CardProps } from "./types";

import {
  StyledCard,
  CardTitle,
  Strong,
  CrossLine,
  ButtonBlock,
  DisplayButton,
  StyledInput,
} from "./styles";
import UserSelect from "../UsersSelect/UsersSelect";
import { useAppDispatch } from "../../store/reducers/store";
import { setUserId } from "../../store/reducers/toDoReducer/Actions";

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    userId,
    id,
    title,
    completed,
    onDelete,
    onToggleCompleted,
    onEdit,
    onSave,
  } = props;
  const dispatch = useAppDispatch();
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const handleCheckboxChange = () => {
    onToggleCompleted();
  };

  const handleEditClick = () => {
    onEdit();
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(id, updatedTitle);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedTitle("");
  };

  const handleUserSelectChange = (
    selectedUserId: number,
    taskIdToUpdate: number
  ) => {
    dispatch(setUserId(selectedUserId, taskIdToUpdate));
  };

  return (
    <StyledCard>
      <CardTitle>
        <Strong>Title: </Strong>
        {isEditing ? (
          <StyledInput
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        ) : (
          <CrossLine completed={completed} title={title}>
            {title}
          </CrossLine>
        )}
      </CardTitle>
      <ButtonBlock>
        <Checkbox checked={completed} onChange={handleCheckboxChange} />
        <UserSelect
          selectedUser={userId}
          onSelectChange={(newSelectedUserId) =>
            handleUserSelectChange(newSelectedUserId, id)
          }
        />
        {isEditing ? (
          <ButtonBlock>
            <Button type="button" onClick={handleSaveClick}>
              Save
            </Button>
            <Button type="button" onClick={handleCancelClick}>
              Cancel
            </Button>
          </ButtonBlock>
        ) : (
          <Button type="button" onClick={handleEditClick}>
            Edit
          </Button>
        )}
        <DisplayButton isEditing={isEditing}>
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </DisplayButton>
      </ButtonBlock>
    </StyledCard>
  );
};

export default Card;

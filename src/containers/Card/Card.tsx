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

 const Card: React.FC<CardProps> = (props: CardProps) => {
const { id,
  title,
  completed,
  onDelete,
  onToggleCompleted,
  onEdit,
  onSave,} = props;

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    onToggleCompleted();
  };

  console.log("Card")

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

  return (
   
    <StyledCard>
      <CardTitle>
        <Strong>Title: </Strong>{" "}
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

export default Card
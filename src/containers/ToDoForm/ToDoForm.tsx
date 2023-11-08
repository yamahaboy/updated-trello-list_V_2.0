import React, { BaseSyntheticEvent, useState } from "react";
import { Button } from "../../components/Button/Button";

import { setNewToDo } from "../../store/reducers/toDoReducer/Actions";
import { Form, FormTitle, Container, Error, StyledFormInput } from "./styles";
import { useAppDispatch } from "../../store/reducers/store";
import { IToDoForm } from "../../models/IToDoForm";
import UserSelect from "../UsersSelect/UsersSelect";

export const ToDoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [userId, setUserId] = useState<number>(0);

  const titleHandler = (event: BaseSyntheticEvent) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "") {
      setTitleError("* Input field for title is required");
      return;
    }

    const newToDoData: IToDoForm = {
      id: Date.now(),
      title: title,
      completed: false,
      userId: userId,
    };
    console.log(newToDoData, "newToDoData");
    dispatch(setNewToDo(newToDoData));
    setTitle("");
    setTitleError(null);
    setUserId(0);
  };

  const handleUserSelectChange = (selectedUserId: number) => {
    setUserId(selectedUserId);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormTitle>Add toDo</FormTitle>
      <Container>
        <StyledFormInput
          placeholder="Title:"
          value={title}
          onChange={titleHandler}
          style={{ width: "100%" }}
        />
        {titleError && <Error>{titleError}</Error>}
        <UserSelect
          selectedUser={userId}
          onSelectChange={handleUserSelectChange}
        />
        <Button type="submit">Submit</Button>
      </Container>
    </Form>
  );
};

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

import { TodoList, ListTitle, Container, ButtonBlock } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import {
  getToDosAndUsersToStore,
  setLastDeletedCard,
  setToDo,
} from "../../store/reducers/toDoReducer/Actions";
import { Button } from "../../components/Button/Button";

export const ToDoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { toDo, userfilter, inputData } = useAppSelector(
    (state) => state.todoReducer
  );
  const lastCard = useAppSelector((state) => state.todoReducer.lastDeletedCard);
  const [editItemId, setEditItemId] = useState<number | null>(null);

  const [showUnassigned, setShowUnassigned] = useState(false);

  const filteredToDo = toDo.filter(
    (task) =>
      (userfilter === null || task.userId === userfilter) &&
      task.title.toLowerCase().includes(inputData?.toLowerCase() || "")
  );
  const toggleShowUnassigned = () => {
    setShowUnassigned((prev) => !prev);
  };

  const deleteHandler = (idToDeleteCard: number) => {
    const deleteLastItem = toDo.find((todo) => todo.id === idToDeleteCard);
    if (deleteLastItem) {
      dispatch(setLastDeletedCard(deleteLastItem));
    }

    const updatedToDoData = toDo.filter(({ id }) => id !== idToDeleteCard);
    dispatch(setToDo(updatedToDoData));
  };

  const restoreHandler = () => {
    if (lastCard) {
      dispatch(setToDo([lastCard, ...toDo]));
      dispatch(setLastDeletedCard(null));
    }
  };

  const toggleCompleted = (idToToggle: number) => {
    const updatedToDoData = toDo.map((todo) =>
      todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(setToDo(updatedToDoData));
  };

  const editHandler = (idToEdit: number) => {
    setEditItemId(idToEdit);
  };

  const saveHandler = (idToSave: number, updatedTitle: string) => {
    const updatedToDoData = toDo.map((todo) =>
      todo.id === idToSave ? { ...todo, title: updatedTitle } : todo
    );
    dispatch(setToDo(updatedToDoData));
    setEditItemId(null);
  };

  const handleUserIdChange = (idToUpdate: number, newUserId: number) => {
    const updatedToDoData = toDo.map((todo) =>
      todo.id === idToUpdate ? { ...todo, userId: newUserId } : todo
    );
    dispatch(setToDo(updatedToDoData));
  };

  useEffect(() => {
    dispatch(getToDosAndUsersToStore());
  }, [dispatch]);

  return (
    <TodoList>
      <Container>
        <ListTitle>ToDo List</ListTitle>
        <ButtonBlock>
          <Button onClick={toggleShowUnassigned}>Show Unassigned</Button>
          <Button onClick={restoreHandler} disabled={!lastCard}>
            Restore Last
          </Button>
        </ButtonBlock>
      </Container>
      {filteredToDo &&
        filteredToDo
          .filter(({ userId }) => (showUnassigned ? userId === 0 : true))
          .map(({ userId, id, title, completed }) => (
            <Card
              key={id}
              userId={userId}
              id={id}
              title={title}
              completed={completed}
              onDelete={() => deleteHandler(id)}
              onToggleCompleted={() => toggleCompleted(id)}
              onEdit={() => editHandler(id)}
              isEditing={id === editItemId}
              onSave={saveHandler}
              onUserIdChange={(newUserId) => handleUserIdChange(id, newUserId)}
            />
          ))}
    </TodoList>
  );
};

import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

import { getToDos } from "../../api/services/toDoService/service";

import { TodoList, ListTitle, Container, RestoreButton } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import {
  setLastDeletedCard,
  setToDo,
} from "../../store/reducers/toDoReducer/Actions";

export const ToDoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const cardDates = useAppSelector((state) => state.todoReducer.toDo);
  const lastCard = useAppSelector((state) => state.todoReducer.lastDeletedCard);
  const [editItemId, setEditItemId] = useState<number | null>(null);

  const deleteHandler = (idToDeleteCard: number) => {
    const deleteLastItem = cardDates.find((todo) => todo.id === idToDeleteCard);
    if (deleteLastItem) {
      dispatch(setLastDeletedCard(deleteLastItem));
    }
  };

  const restoreHandler = () => {
    if (lastCard) {
      setToDo([lastCard, ...cardDates]);
      setLastDeletedCard(null);
    }
  };

  const toggleCompleted = (idToToggle: number) => {
    const updatedToDoData = cardDates.map((todo) =>
      todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(setToDo(updatedToDoData));
  };

  // const editHandler = (idToEdit: number) => {
  //   setEditItemId(idToEdit);
  // };

  // const saveHandler = (
  //   idToSave: number,
  //   updatedTitle: string,
  //   updatedDescription: string
  // ) => {
  //   const updatedToDoData = toDoData.map((todo) =>
  //     todo.id === idToSave
  //       ? { ...todo, title: updatedTitle, description: updatedDescription }
  //       : todo
  //   );
  //   setToDoData(updatedToDoData);
  //   setEditItemId(null);
  // };

  useEffect(() => {
    async function fetchData() {
      const data = await getToDos();
      dispatch(setToDo(data));
    }

    fetchData();
  }, [dispatch]);

  return (
    <TodoList>
      <Container>
        <ListTitle>ToDo List</ListTitle>
        <RestoreButton onClick={restoreHandler} disabled={!lastCard}>
          Restore Last
        </RestoreButton>
      </Container>
      {cardDates.map(({ userId, id, title, description, completed }) => (
        <Card
          key={id}
          id={id}
          title={title}
          description={description}
          completed={completed}
          onDelete={() => deleteHandler(id)}
          onToggleCompleted={() => toggleCompleted(id)}
          // onEdit={() => editHandler(id)}
          // isEditing={id === editItemId}
          // onSave={saveHandler}
        />
      ))}
    </TodoList>
  );
};

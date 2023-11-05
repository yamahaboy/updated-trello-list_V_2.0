import { Dispatch } from "react";
import { IToDoForm, IToDoUsers } from "../../../models/IToDoForm";
import { ToDoReducerEnum } from "./ActionsType";
import { AnyAction } from "redux";
import { getToDos, getUsers } from "../../../api/services/toDoService/service";

export const setToDo = (toDoData: IToDoForm[]) => {
  return { type: ToDoReducerEnum.Set_ToDo_Data, toDoData };
};

export const setLastDeletedCard = (lastDeleted: IToDoForm | null) => {
  return { type: ToDoReducerEnum.Set_Last_Deleted, lastDeleted };
};
export const setNewToDo = (newToDoForm: IToDoForm) => {
  return { type: ToDoReducerEnum.Add_New_ToDo, newToDoForm };
};

export const setUsers = (usersData: IToDoUsers[]) => {
  return { type: ToDoReducerEnum.Set_Users, usersData };
};

export const setUserId = (selectedUserId: number | null) => {
  return { type: ToDoReducerEnum.Set_Selected_Users_Id, selectedUserId };
};

export const getToDosAndUsersToStore = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataTodos, dataUsers] = await Promise.all([getToDos(), getUsers()]);
    console.log(dataTodos, dataUsers)
    dispatch(setToDo(dataTodos));
    dispatch(setUsers(dataUsers));
  };
};

import { Dispatch } from "react";
import {
  IToDoComments,
  IToDoForm,
  IToDoPosts,
  IToDoUsers,
} from "../../../models/IToDoForm";
import { ToDoReducerEnum } from "./ActionsType";
import { AnyAction } from "redux";
import {
  getComments,
  getPosts,
  getToDos,
  getUsers,
} from "../../../api/services/toDoService/service";

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

export const setUserId = (selectedUserId: number | null, taskId: number) => {
  return {
    type: ToDoReducerEnum.Set_Selected_Users_Id,
    selectedUserId,
    taskId,
  };
};

export const setPosts = (postsData: IToDoPosts[]) => {
  return { type: ToDoReducerEnum.Set_Posts, postsData };
};

export const setComments = (commentsData: IToDoComments[]) => {
  return { type: ToDoReducerEnum.Set_Comments, commentsData };
};

export const setUserFilter = (userFilterData: number | null) => {
  return { type: ToDoReducerEnum.Set_User_Filter, userFilterData };
};

export const getToDosAndUsersToStore = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataTodos, dataUsers, dataPosts, dataComments] = await Promise.all([
      getToDos(),
      getUsers(),
      getPosts(),
      getComments(),
    ]);
    dispatch(setToDo(dataTodos));
    dispatch(setUsers(dataUsers));
    dispatch(setPosts(dataPosts));
    dispatch(setComments(dataComments));
  };
};

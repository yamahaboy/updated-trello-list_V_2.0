import { Reducer } from "redux";
import { IToDoForm, IToDoUsers } from "../../../models/IToDoForm";
import { ToDoReducerEnum } from "./ActionsType";

type ToDoReducerType = {
  toDo: IToDoForm[];
  lastDeletedCard: IToDoForm | null;
  users: IToDoUsers[];
  selectedUserId: number | null;
};

const defaultState: ToDoReducerType = {
  toDo: [],
  lastDeletedCard: null,
  users: [],
  selectedUserId: null,
};

const todoReducer: Reducer<ToDoReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case ToDoReducerEnum.Set_ToDo_Data:
      return { ...state, toDo: action.toDoData };
    case ToDoReducerEnum.Set_Last_Deleted:
      return { ...state, lastDeletedCard: action.lastDeleted };
    case ToDoReducerEnum.Add_New_ToDo:
      return { ...state, toDo: [...state.toDo, action.newToDo] };
    case ToDoReducerEnum.Set_Users:
      return { ...state, users: action.usersData };
    case ToDoReducerEnum.Set_Selected_Users_Id:
      return { ...state, selectedUserId: action.selectedUserId };
    default:
      return { ...state };
  }
};

export default todoReducer;

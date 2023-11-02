import { Reducer } from "redux";
import { IToDoForm } from "../../../models/IToDoForm";
import { ToDoReducerEnum } from "./ActionsType";

type ToDoReducerType = {
  toDo: IToDoForm[];
  lastDeletedCard: IToDoForm | null;
  // cardEdit: IToDoForm[] | null;
};

const defaultState: ToDoReducerType = {
  toDo: [],
  lastDeletedCard: null,
  // cardEdit: null,
};

const todoReducer: Reducer<ToDoReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case ToDoReducerEnum.Set_ToDo_Data:
      return { ...state, toDo: action.toDo };
    case ToDoReducerEnum.Set_Last_Deleted:
      return { ...state, lastDeletedCard: action.lastDeleted };
    // case ToDoReducerEnum.Set_Edit_Card:
    //   return { ...state, cardEdit: action.editCard };
    default:
      return { ...state };
  }
};

export default todoReducer;

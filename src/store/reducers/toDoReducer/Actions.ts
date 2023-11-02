import { IToDoForm } from "../../../models/IToDoForm";
import { ToDoReducerEnum } from "./ActionsType";

export const setToDo = (toDoData: IToDoForm[]) => {
  console.log(toDoData, "Dates")
  return { type: ToDoReducerEnum.Set_ToDo_Data, toDoData };
  
};

export const setLastDeletedCard = (lastDeleted: IToDoForm | null) => {
  return { type: ToDoReducerEnum.Set_Last_Deleted, lastDeleted };
};

// export const setEditCard = (editCard: IToDoForm[] | null) => {
//   return { type: ToDoReducerEnum.Set_Edit_Card, editCard };
// };

import { Reducer } from "redux";
import {
  IToDoComments,
  IToDoForm,
  IToDoPosts,
  IToDoUsers,
} from "../../../models/IToDoForm";
import { ToDoReducerEnum } from "./ActionsType";

type ToDoReducerType = {
  toDo: IToDoForm[];
  lastDeletedCard: IToDoForm | null;
  users: IToDoUsers[];
  selectedUserId: number | null;
  posts: IToDoPosts[];
  comments: IToDoComments[];
  userfilter: number | null;
};

const defaultState: ToDoReducerType = {
  toDo: [],
  lastDeletedCard: null,
  users: [],
  selectedUserId: null,
  posts: [],
  comments: [],
  userfilter: null,
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
      return { ...state, toDo: [...state.toDo, action.newToDoForm] };
    case ToDoReducerEnum.Set_Users:
      return { ...state, users: action.usersData };
    case ToDoReducerEnum.Set_Selected_Users_Id:
      const newSelectedUserId = action.selectedUserId;
      const taskIdToUpdate = action.taskId;
      const updatedToDo = state.toDo.map((task) => {
        if (task.id === taskIdToUpdate) {
          return { ...task, userId: newSelectedUserId };
        } else {
          return task;
        }
      });

      return {
        ...state,
        selectedUserId: newSelectedUserId,
        toDo: updatedToDo,
      };
    case ToDoReducerEnum.Set_Posts:
      return { ...state, posts: action.postsData };
    case ToDoReducerEnum.Set_Comments:
      return { ...state, comments: action.commentsData };
    case ToDoReducerEnum.Set_User_Filter:
      return { ...state, userfilter: action.userFilterData };

    default:
      return { ...state };
  }
};

export default todoReducer;

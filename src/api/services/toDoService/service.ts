import { IToDoForm } from "../../../models/IToDoForm";

export const getToDos = async (): Promise<IToDoForm[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

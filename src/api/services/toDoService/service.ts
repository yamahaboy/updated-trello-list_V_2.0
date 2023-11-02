import { IToDoForm } from "../../../models/IToDoForm";

export const getToDos = async (): Promise<IToDoForm[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(response, "response")
  const data = await response.json();
  return data.map((props: IToDoForm) => ({
    userId: props.userId, 
    id: props.id,
    title: props.title,
    completed: props.completed
  }))
};

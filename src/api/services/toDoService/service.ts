import {
  IToDoForm,
  IToDoUsers,
  IToDoPosts,
  IToDoComments,
  IToDoFullUsers,
} from "../../../models/IToDoForm";

export const getToDos = async (): Promise<IToDoForm[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.map((props: IToDoForm) => ({
    userId: props.userId,
    id: props.id,
    title: props.title,
    completed: props.completed,
  }));
};

export const getUsers = async (): Promise<IToDoUsers[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map((props: IToDoUsers) => ({
    id: props.id,
    name: props.name,
  }));
};

export const getPosts = async (): Promise<IToDoPosts[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data.map((props: IToDoPosts) => ({
    id: props.id,
    title: props.title,
    body: props.body,
  }));
};

export const getComments = async (): Promise<IToDoComments[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data.map((props: IToDoComments) => ({
    postId: props.postId,
    id: props.id,
    name: props.name,
    body: props.body,
  }));
};

export const getFullUsers = async (): Promise<IToDoFullUsers[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
 
  const data = await response.json();
  return data.map((props: IToDoFullUsers) => ({
    id: props.id,
    name: props.name,
    username: props.username,
    email: props.email,
    address: {
      street: props.address.street,
      city: props.address.city,
    },
    phone: props.phone,
    website: props.website,
    company: {
      name: props.company.name,
    },
  }));
};

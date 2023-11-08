export type IToDoForm = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type IToDoUsers = {
  id: number;
  name: string;
};

export type IToDoPosts = {
  id: number;
  title: string;
  body: string;
};

export type IToDoComments = {
  postId: number;
  id: number;
  name: string;
  body: string;
};

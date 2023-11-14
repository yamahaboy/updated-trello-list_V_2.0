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


export type IToDoFullUsers = {
  id: number;
  name: string;
  username: string;
  email:string;
  address: adressType;
  phone: string;
  website: string;
  company: companyType;
}


type adressType ={
  street: string;
  city:string;
}

type companyType = {
  name:string;
}
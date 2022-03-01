export class Task {
  constructor(
    public _id: string,
    public user: {
      _id: string,
      name: string
    },
    public text: string,
    public status: string
  ) {}
}

export interface ApiTaskData {
  _id: string;
  user: {
    _id: string,
    name: string
  };
  text: string;
  status: string;
}

export interface NewTaskData {
  text: string;
  user: string;
}

export interface UserEditData {
  user: string;
}

export interface StatusEditData {
  status: string;
}

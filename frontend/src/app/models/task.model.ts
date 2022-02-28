export class Task {
  constructor(
    public _id: string,
    public user: string,
    public text: string,
    public status: string
  ) {}
}

export interface ApiTaskData {
  _id: string;
  user: string;
  text: string;
  status: string;
}

export interface NewTaskData {
  text: string;
  user: string;
}

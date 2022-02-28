export class User {
  constructor(
    public _id: string,
    public name: string
  ) {}
}

export interface ApiUserData {
  _id: string,
  name: string,
}


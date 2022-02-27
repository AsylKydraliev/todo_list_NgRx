export class Task {
  constructor(
    public _id: string,
    public user: string,
    public text: string,
    public status: string
  ) {}
}

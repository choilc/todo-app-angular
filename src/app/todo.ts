// export interface Todo {
//   id: number;
//   name: string;
//   completed: boolean;
// }

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public completed: boolean
  ) {}
}

export function getRandomId() {
  return Math.floor(Math.random() * 1000000 + 1);
}

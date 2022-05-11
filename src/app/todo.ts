// export interface Todo {
//   id: number;
//   name: string;
//   completed: boolean;
// }

export class Todo {
  id;
  name;
  completed;
  constructor(id: number, name: string, completed: boolean) {
    (this.id = id), (this.name = name), (this.completed = completed);
  }
}

export function getRandomId() {
  return Math.floor(Math.random() * 1000000 + 1);
}

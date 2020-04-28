export interface ITodos {
  [id: string]: ITodo;
}

export interface ITodo {
  title: string;
  done: boolean;
}

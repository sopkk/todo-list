export interface TodosType {
  [id: string]: TodoType;
}

export interface TodoType {
  title: string;
  done: boolean;
}

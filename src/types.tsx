export interface ITodo {
  id: string;
  text: string;
  done: boolean;
  created_at: string;
  updated_at: string;
}

export interface IState {
  todos: {
    data: {
      [key: string]: ITodo;
    };
    ids: string[];
  };
  visibilityFilter: string;
}

import { v4 as uuidv4 } from "uuid";

export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (text: string) => {
  const date = new Date();
  return {
    type: ADD_TODO,
    payload: {
      id: uuidv4(),
      todo: {
        created_at: date
          .toString()
          .replace(" GMT+0100 (Western European Summer Time)", ""),
        updated_at: date
          .toString()
          .replace(" GMT+0100 (Western European Summer Time)", ""),
        text,
        done: false,
      },
    },
  };
};

export const toggleTodo = (id: string) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

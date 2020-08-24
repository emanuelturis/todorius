import { ITodo } from "../../types";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todos";

interface State {
  data: {
    [key: string]: ITodo;
  };
  ids: string[];
}

interface Action {
  type: string;
  payload: any;
}

const initialState = {
  data: {},
  ids: [],
};

const todosReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: { ...state.data, [action.payload.id]: action.payload.todo },
        ids: [...state.ids, action.payload.id],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...state.data[action.payload],
            done: !state.data[action.payload].done,
          },
        },
      };
    case DELETE_TODO:
      return {
        ...state,
        ids: state.ids.filter((id: string) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;

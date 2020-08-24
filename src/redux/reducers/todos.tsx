import { SET_TODOS } from "../actions/todos";

interface State {
  data: object;
  ids: string[];
}

interface Action {
  type: string;
  payload: object | string | string[];
}

const initialState = {
  data: {},
  ids: [],
};

const todosReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todosReducer;

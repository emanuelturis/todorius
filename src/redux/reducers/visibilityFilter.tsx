import { SET_VISIBILITY_FILTER } from "../actions/visibilityFilter";

interface Action {
  type: string;
  payload: string;
}

const visibilityFilter = (state: string = "ALL", action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default visibilityFilter;

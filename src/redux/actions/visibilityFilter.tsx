export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const setVisibilityFilter = (filter: string) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter,
  };
};

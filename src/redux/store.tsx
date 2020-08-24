import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { loadState, saveState } from "./utils";

const state = loadState();

const store = createStore(
  reducers,
  state,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

store.subscribe(() => saveState(store.getState()));

export default store;

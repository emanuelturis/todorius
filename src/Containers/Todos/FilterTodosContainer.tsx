import { IState } from "../../types";
import { connect } from "react-redux";
import FilterTodos from "../../Components/Todos/FilterTodos";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setVisibilityFilter } from "../../redux/actions/visibilityFilter";

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todos.ids,
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, any, AnyAction>
) => {
  return {
    setVisibilityFilter: (filter: string) => {
      dispatch(setVisibilityFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);

import { IState } from "../../types";
import { connect } from "react-redux";
import Filter from "../../Components/Filter";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { setVisibilityFilter } from "../../redux/actions/visibilityFilter";

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todos.ids,
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

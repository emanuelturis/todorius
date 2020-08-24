import { connect } from "react-redux";
import AddTodo from "../../Components/Todos/AddTodo";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "../../types";
import { AnyAction } from "redux";
import { addTodo } from "../../redux/actions/todos";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, any, AnyAction>
) => {
  return {
    addTodo: (text: string) => {
      dispatch(addTodo(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

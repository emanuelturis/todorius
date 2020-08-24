import { connect } from "react-redux";
import Todos from "../../Components/Todos/Todos";
import { IState } from "../../types";

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todos.ids,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

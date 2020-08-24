import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IState, ITodo } from "../../types";
import { connect } from "react-redux";
import Todo from "../../Components/Todos/Todo";
import { deleteTodo, toggleTodo } from "../../redux/actions/todos";

interface IOwnProps {
  todoId: string;
}

const getTodo = (todo: ITodo, visibilityFilter: string) => {
  switch (visibilityFilter) {
    case "ALL":
      return todo;
    case "DONE":
      return todo.done ? todo : null;
    case "TO_DO":
      return todo.done ? null : todo;
    default:
      return null;
  }
};

const mapStateToProps = (state: IState, ownProps: IOwnProps) => {
  return {
    todo: getTodo(state.todos.data[ownProps.todoId], state.visibilityFilter),
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, any, AnyAction>
) => {
  return {
    toggleTodo: (id: string) => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: (id: string) => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

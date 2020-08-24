import React from "react";
import TodoContainer from "../../Containers/Todos/TodoContainer";

interface Props {
  todos: string[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <ul className="list-group">
        {todos.map((todoId) => (
          <TodoContainer todoId={todoId} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;

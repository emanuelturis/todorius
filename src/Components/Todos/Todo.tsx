import React from "react";
import { ITodo } from "../../types";
import { Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export interface Props {
  todo: ITodo | null;
  toggleTodo: Function;
  deleteTodo: Function;
  todoId: string;
}

const Todo: React.FC<Props> = ({ todo, toggleTodo, todoId, deleteTodo }) => {
  if (!todo) {
    return null;
  }
  return (
    <li style={{ marginTop: "10px" }} className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Form.Check checked={todo.done} onClick={() => toggleTodo(todoId)} />
          <p
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            {todo.text}
          </p>
        </div>
        <FaTrash
          style={{ cursor: "pointer" }}
          className="text-danger"
          onClick={() => deleteTodo(todoId)}
        />
      </div>
      <p style={{ marginBottom: "0px" }}> {todo.created_at}</p>
    </li>
  );
};

export default Todo;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  addTodo: Function;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <Form.Control
        value={todo}
        type="text"
        placeholder="Insert your to-do item here..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={() => {
          if (todo === "") {
            return;
          }
          addTodo(todo);
          setTodo("");
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodo;

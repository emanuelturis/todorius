import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  todos: string[];
  setVisibilityFilter: Function;
}

const Filter: React.FC<Props> = ({ todos, setVisibilityFilter }) => {
  if (todos.length === 0) {
    return null;
  }
  return (
    <div className="d-flex">
      <Button size="sm" onClick={() => setVisibilityFilter("ALL")}>
        Show All
      </Button>
      <Button size="sm" onClick={() => setVisibilityFilter("TO_DO")}>
        Show To Do
      </Button>
      <Button size="sm" onClick={() => setVisibilityFilter("DONE")}>
        Show Done
      </Button>
    </div>
  );
};

export default Filter;

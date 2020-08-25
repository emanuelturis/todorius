import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  todos: string[];
  setVisibilityFilter: Function;
  visibilityFilter: string;
}

const Filter: React.FC<Props> = ({
  todos,
  setVisibilityFilter,
  visibilityFilter,
}) => {
  if (todos.length === 0) {
    return null;
  }
  return (
    <div
      className="d-flex justify-content-between"
      style={{ maxWidth: "275px", marginTop: "15px", marginBottom: "15px" }}
    >
      <Button
        size="sm"
        onClick={() => setVisibilityFilter("ALL")}
        className={visibilityFilter === "ALL" ? "" : "btn-secondary"}
      >
        Show All
      </Button>
      <Button
        size="sm"
        onClick={() => setVisibilityFilter("TO_DO")}
        className={visibilityFilter === "TO_DO" ? "" : "btn-secondary"}
      >
        Show To Do
      </Button>
      <Button
        size="sm"
        onClick={() => setVisibilityFilter("DONE")}
        className={visibilityFilter === "DONE" ? "" : "btn-secondary"}
      >
        Show Done
      </Button>
    </div>
  );
};

export default Filter;

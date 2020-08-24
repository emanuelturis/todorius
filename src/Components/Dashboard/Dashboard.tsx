import React from "react";
import TodosContainer from "../../Containers/Todos/TodosContainer";
import { Container } from "react-bootstrap";
import AddTodoContainer from "../../Containers/Todos/AddTodoContainer";
import FilterContainer from "../../Containers/Todos/FilterTodosContainer";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Container>
        <AddTodoContainer />
        <TodosContainer />
        <FilterContainer />
      </Container>
    </div>
  );
};

export default Dashboard;

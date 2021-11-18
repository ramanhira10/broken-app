import { styled } from "@mui/material/styles";
import * as React from "react";
import { TodosContext } from "../../TodoContext";

const Container = styled("div")({
  fontWeight: 500,
  fontSize: "18px",
  textTransform: "uppercase",
  textAlign: "center",
  display: "block",
  padding: "5px 0",
  marginBottom: "10px",
});

const TodoResults = () => {
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const {todos} = React.useContext(TodosContext);
    return todos.reduce((initialValue, todo) => initialValue + (todo.checked ? 1 : 0), 0);
  };

  return (
    <Container>
      Done:
      {calculateChecked()}
    </Container>
  );
};

export default TodoResults;

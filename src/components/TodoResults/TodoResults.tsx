import { styled } from "@mui/material/styles";
import * as React from "react";
import "./todo-results.scss";

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
  };

  return (
    <Container>
      Done:
      {calculateChecked()}
    </Container>
  );
};

export default TodoResults;

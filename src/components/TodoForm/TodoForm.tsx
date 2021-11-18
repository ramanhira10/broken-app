import { styled } from "@mui/material/styles";
import * as React from "react";
import { TodosContext } from "../../TodoContext";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  "& input": {
    padding: "10px 15px",
    borderRadius: "4px",
    border: "1px solid rgba(1, 1, 1, 0.3)",
    marginRight: "5px",
    width: "250px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
  },
});
const StyledButton = styled("button")({
  cursor: "pointer",
  background: "#1e90ff",
  textTransform: "uppercase",
  color: "#ffffff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "4px",
  width: "110px",
  "&:hover": { background: "#1474d2" },
});

const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    // Fin an ability to add new task
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <Container>
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <StyledButton type="button" onClick={handleAddTodo}>
        Add task
      </StyledButton>
    </Container>
  );
};

export default TodoForm;

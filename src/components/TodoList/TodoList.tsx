import * as React from "react";
import { TodosContext } from "../../TodoContext";
import { styled } from "@mui/material/styles";
import Checkbox from "../Checkbox/Checkbox";

const Container = styled("div")({
  padding: "10px 0",
  borderBottom: "1px solid rgba(1,1,1,0.1)",
});
const Content = styled("div")({
  display: "flex",
  justifyContent: "center",
});
const Title = styled("span")({
  fontWeight: 500,
  fontSize: "18px",
  textTransform: "uppercase",
  textAlign: "center",
  display: "block",
  borderBottom: "1px solid rgba(1,1,1,0.1)",
  padding: "5px 0",
  marginBottom: "10px",
});

const NoToDos = styled("div")({
  textAlign: "center",
  padding: "5px 0",
  fontSize: "14px",
  color: "gray",
});

const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id: any) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (id: any) => {
    // Fix an ability to toggle task
  };

  const handleKeyUp = (e: any, id: any) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <Container>
      <Title className="todo-list-title">Things to do:</Title>
      {todos.length ? (
        <Content>
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </Content>
      ) : (
        <NoToDos>Looks like you&apos;re absolutely free today!</NoToDos>
      )}
    </Container>
  );
};

export default TodoList;

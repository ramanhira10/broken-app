import { styled } from "@mui/material/styles";
import type { NextPage } from "next";
import React, { useState } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoResults from "../components/TodoResults/TodoResults";
import { TodosContext } from "../TodoContext";

const tasks = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];
const Container = styled("div")({
  width: 600,
  margin: "auto",
});

const Home: NextPage = () => {
  const [todos, setTodos] = useState(tasks);

  return (
    <Container>
      <TodosContext.Provider value={{ todos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </Container>
  );
};

export default Home;

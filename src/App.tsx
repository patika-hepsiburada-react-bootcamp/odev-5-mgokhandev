import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TODOI from "./interfaces/TodoInterface";

const App = () => {
  const [todos, setTodos] = useState<TODOI[]>([]);

  const addTodo = (todo: string): void => {
    const data: TODOI = {
      id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
      text: todo,
      completed: false,
    };

    setTodos((prevTodos: TODOI[]): TODOI[] => [...prevTodos, data]);
    window.alert("Todo Add the List");
  };

  const completeTodo = (id: number): void => {
    const currentTodo: any = todos.find((todo: TODOI) => todo.id === id);
    currentTodo.completed = true;
    console.log(currentTodo);

    const updatedTodos: TODOI[] = todos.map(
      (todo: TODOI): TODOI => (todo.id === id ? currentTodo : todo)
    );

    setTodos(updatedTodos);
    window.alert("Well Done!");
  };

  const deleteTodo = (id: number): void => {
    const updatedTodos: TODOI[] = todos.filter(
      (todo: TODOI): any => todo.id !== id
    );

    setTodos(updatedTodos);
    window.alert("Deleted!");
  };

  return (
    <div className="container">
      <div className="row flex-column">
        <h1 className="text-center my-2">Todo App</h1>
        <Form addTodo={addTodo} />
        <List
          todos={todos}
          completedTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;

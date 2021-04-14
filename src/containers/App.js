import "./App.css";
import React from "react";
import Todo from "../components/Todo";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="title">TodoList</h1>
        <Todo />
      </header>
    </div>
  );
};

export default App;

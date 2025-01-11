import { useState, useEffect } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="App">
        <h1 style={{ color: 'white', fontFamily: '' }}>Checklist App</h1>
        <TodoInput addTodo={addTodo} />
      </div>
      <div>
        <TodoList className="todo" todos={todos} removeTodo={removeTodo} />
      </div>
    </>
  );
};

export default App;

import { useState, useEffect } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
import './App.css';
import CryptoJS from 'crypto-js'; 

const App = () => {
  // const [todos, setTodos] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      try{
        const bytes = CryptoJS.AES.decrypt(savedTodos,'secret-key');
        const decryptedTodos = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedTodos;
      }
      catch(e){
        console.log("error :",e);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    try{
      const encryptTodos = CryptoJS.AES.encrypt(JSON.stringify(todos),'secret-key').toString();
      localStorage.setItem("todos",encryptTodos);
    }
    catch(e){
      console.log("error",e);
    }
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

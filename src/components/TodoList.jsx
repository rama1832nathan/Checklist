import List from '../css/todoList.module.css'

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className={`${List.todoList}`}>
      {todos && todos.length>0?(
      <ul>
       
        {todos.map((todo, index) => (
          <li className={List.todoItem} key={index}>
            <h2>{index+1}<span>)</span> {todo}</h2>
            <button className={`${List.btn}`} onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>):((<h4 style={{color:'white'}}>Seems lonely here!..</h4>))
  }
    </div>
  );
};

export default TodoList;

import { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [todo, setTodo] = useState(["Learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>

      <div className="input-container">
        <input 
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo item"
        />
        <button onClick={addNewTodo}>Add</button>
      </div>

      <ul>
        {todo.map((todo, index) => (
          <TodoItem key={index} task={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;

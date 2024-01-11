import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useState, useEffect } from 'react';
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function (){
    fetch("http://localhost:3000/todos")
    .then(async function(data){
      const response = await data.json();
      setTodos(response.todos);
    })
  },[])

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App

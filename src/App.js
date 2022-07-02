import { useEffect, useState } from "react"
import './App.css';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import ListTodo from './components/ListTodo';

function App() {
  /*API */
  const [info, setInfo] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setInfo(data));
  }, [])
  console.log(info);
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <FilterTodo />
        <ListTodo />
      </header>
      <div>
        {info.map((el) =>
          <div style={{ border: "2px red solid" }}>
            <h1>{el.name}</h1>
            <h1>{el.username}</h1>
            <h1>{el.email}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

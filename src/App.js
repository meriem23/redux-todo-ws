import './App.css';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <FilterTodo />
        <ListTodo />
      </header>
    </div>
  );
}

export default App;

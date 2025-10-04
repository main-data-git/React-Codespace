

import './App.css';
import AppName from "./components/AppName";
import TodoAdd from "./components/TodoAdd";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";



function App() {
  return (
    <center className="todocontainer">

      <AppName />
      <TodoAdd />
      <div className="items">
        <Task1 />
        <Task2 />
      </div>

      
    </center>
  );
}

export default App;

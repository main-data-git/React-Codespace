
import AppName from "./components/AppName";
import TodoAdd from "./components/TodoAdd";
import Task1 from "./components/Task1";



function App() {
  return (
    <center class="todocontainer">

      <AppName />
      <TodoAdd />
      <Task1 />

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            Go To College
          </div>
          <div class="col-4">
            06/10/2025
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;

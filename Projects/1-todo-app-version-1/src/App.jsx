
import AppName from "./components/AppName";
import TodoAdd from "./components/TodoAdd";




function App() {
  return (
    <center class="todocontainer">

      <AppName />
      <TodoAdd />




        <div class="row">
          <div class="col-6">
            Buy Milk>
          </div>
          <div class="col-4">
            5/10/2025
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>


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

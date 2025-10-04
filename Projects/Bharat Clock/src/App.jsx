
import Heading from "./Components/Heading";
import IntroLine from "./Components/IntroLine";
import CurrentTime from "./Components/TimeLine";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Heading />
      <IntroLine />
      <CurrentTime />
    </div>
  );
}


export default App;

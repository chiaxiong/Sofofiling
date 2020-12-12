import "./App.css";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import Home from "./Home/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <MultiStepForm path="signup" />
      </Router>
    </div>
  );
}

export default App;

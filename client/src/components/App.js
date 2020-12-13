import "./App.css";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import Home from "./Home/Home";
import { Router } from "@reach/router";
import Feed from "./Page/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <MultiStepForm path="signup" />
        <Feed path="feed" />
      </Router>
    </div>
  );
}

export default App;

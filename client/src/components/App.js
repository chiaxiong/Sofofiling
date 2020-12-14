import "./App.css";
// import MultiStepForm from "./MultiStepForm/MultiStepForm";
import StepForm from "./MultiStepForm/StepForm";
import Home from "./Home/Home";
import { Router } from "@reach/router";
import Feed from "./Page/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <StepForm path="signup" />
        {/* <MultiStepForm path="signup" /> */}
        <Feed path="feed" />
      </Router>
    </div>
  );
}

export default App;

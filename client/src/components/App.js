import "./App.css";
import SignIn from "./Page/SignIn";
import MultistepForm from "./MultistepForm/MultistepForm";
import Home from "./Home/Home";
import { Router } from "@reach/router";
import Feed from "./Page/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <MultistepForm path="signup" />
        <SignIn path="signin" />
        <Feed path="feed" />
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import SignIn from "./Page/SignIn";
import StepForm from "./MultiStepForm/StepForm";
import Home from "./Home/Home";
import { Router } from "@reach/router";
import Feed from "./Page/Feed";
import { UserProvider } from "../userContext/useUser";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Home path="/" />
          <StepForm path="signup" />
          <SignIn path="signin" />
          <Feed path="feed" />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;

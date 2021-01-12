import "./App.css";
import SignIn from "./Page/SignIn";
import MultistepForm from "./MultistepForm/MultistepForm";
import Home from "./Home/Home";
import { Router } from "@reach/router";
import Feed from "./Feed/Feed";
import { UserProvider } from "../userContext/useUser";
import ProfileContainer from "./Profile/ProfileContainer";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Home path="/" />
          <MultistepForm path="/signup" />
          <SignIn path="/signin" />
          <Feed path="/feed" />
          <ProfileContainer path="/profile" />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Todo from "../screens/Todo";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="todos" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;

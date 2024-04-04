import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

function App() {
  return (
    <div ClassName="app-class">
      <header></header>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

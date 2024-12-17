import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Protected from "./config/Protected";

function App() {
  return (
    <div
      className="bg-slate-900 w-screen h-screen"
      style={{ backgroundPosition: "20% 30%" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={<Protected component={Home} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

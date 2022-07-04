import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Detail from './Components/Detail';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

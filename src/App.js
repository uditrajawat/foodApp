import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Signup from "./screens/Signup";
import { CartProvider } from "./screens/ContextReducer";
import MyOrder from "./screens/MyOrder";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/createuser" element={<Signup />} />
            <Route path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PrivateRoute from "./Routers/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name='Meet' />} />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - page Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

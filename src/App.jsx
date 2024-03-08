import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Home = React.lazy(() => import('./pages/Home'))
const Cart = React.lazy(() => import('./pages/Cart'))
const Login = React.lazy(() => import('./pages/Login'))
import PrivateRoute from "./Routers/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

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

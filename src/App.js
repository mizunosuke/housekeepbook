import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { SignUp } from "./Components/Providers/SignUp";
import { AuthProvider } from "./Components/Providers/AuthProvider";
import { Home } from "./Components/Home";
import { Login } from "./Components/Providers/Login";
import { WelCome } from "./Components/WelCome";

export const App = () => {
  return(
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelCome/>}>WelCome</Route>
            <Route path="/Home" element={<Home/>}>Home</Route>
            <Route path="/SignUp" element={<SignUp/>}>SignIn</Route>
            <Route path="/Login" element={<Login/>}>Login</Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}


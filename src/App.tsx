import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {  AuthProvider } from "./context/authContext";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>}></Route>
        <Route path="/auth" element={<Auth/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

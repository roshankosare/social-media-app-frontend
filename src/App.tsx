
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AuthPage from "./pages/auth/AuthPage";
import Home from "./pages/home/Home";

function App() {

 
  return (
    <div className=" min-h-screen px-4 py-1 pb-10 bg-slate-100">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home/>}
        ></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

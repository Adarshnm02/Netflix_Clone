import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import NaveBar from "./components/NaveBar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Details from "./components/Details";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NaveBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Home />} />
          <Route path="/details" element={<Details />}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

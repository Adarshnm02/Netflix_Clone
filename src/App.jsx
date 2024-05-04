import { useState } from "react";
import NaveBar from "./components/NaveBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NaveBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

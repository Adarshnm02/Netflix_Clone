import { useState } from "react";
import NaveBar from "./components/NaveBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <h1>Hello</h1>
      <NaveBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

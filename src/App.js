import "./App.css";
// React
import React, { useState, useRef } from "react";
// Styled-Component
import styled from "styled-components";
// React Router Dom
import { Routes, Route } from "react-router-dom";
// Component
import Home from "./pages/Home";
import Result from "./pages/Result";
// Context API
import { AppContext } from "./shared/context";

function App() {

  // Hook : getting search keyword from the search bar 
  const [search, setSearch] = useState("");

  // Hook : to close modal
  const [closeModal, setCloseModal] = useState(false);

  let errorFlag = useRef(false)

  return (
    <AppContext.Provider value={{ search, setSearch, closeModal,setCloseModal, errorFlag}}>
      <StyCon>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </StyCon>
    </AppContext.Provider>
  );
}

export default App;

const StyCon = styled.div`
  /* overflow: hidden; */
  height: 100vh;
  width: 768px;
  margin: 0 auto;

  border: 1px solid blue
`;

import "./App.css";
// React
import React, { useState } from "react";
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
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider value={{ search, setSearch }}>
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

  height: 100vh;
  width: 768px;
  margin: 0 auto;

  border: 1px solid blue
`;

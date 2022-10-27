import React from "react";
// Component
import SearchBar from "../elements/SearchBar";
// Icon
import BackIcon from "../static/images/back_icon.png";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Styled-Component
import styled from "styled-components";

const Header = () => {

  // Enabling to navigate to another component
  let navigate = useNavigate();

  return (
    <StyCon>
      <button className="BackBtn" onClick={() => navigate(-1)}>
        <img className="BackIcon" src={BackIcon} alt="back-icon" />
      </button>
      <SearchBar></SearchBar>
    </StyCon>
  );
};

export default Header;

const StyCon = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  height: 78px;
  width: 100%;

  .BackBtn {
    border: none;
    padding: 0;
    margin-left: 46.1px;
    margin-right: 26.1px;
    background-color: transparent;
  }

  .BackIcon {
    width: 11.8px;
    height: 21px;
  }
`;
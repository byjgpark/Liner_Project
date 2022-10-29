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
      <div className="BackWrap" onClick={() => navigate(-1)}>
        <img className="BackIcon" src={BackIcon} alt="back-icon" />
      </div>
      <SearchBar></SearchBar>
    </StyCon>
  );
};

export default Header;

const StyCon = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1000;

  display: flex;
  align-items: center;

  border: 1px solid red;
  height: 78px;
  width: 100%;

  .BackWrap {
    width: 40px;
    height: 40px;
    padding: 0;

    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: none;
    border-radius: 12px;

    margin-left: 32px;
    margin-right: 12px;

    &:hover{
        background-color: rgba(248, 249, 251, 1);
    }

  }

  .BackIcon {
    width: 11.8px;
    height: 21px;
    cursor: pointer;
  }
`;

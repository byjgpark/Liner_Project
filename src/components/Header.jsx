import React from "react";
// Component
import SearchBar from "../elements/SearchBar";
// Icon
import BackIcon from "../static/images/back_icon.png";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Styled-Component
import styled from "styled-components";
// CustomHook
import { useScrollPosition } from "./useScrollPosition";


const Header = () => {
  // Enabling to navigate to another component
  let navigate = useNavigate()

  // CustomHook : to keep track of the scroll position
  const scrollPosition = useScrollPosition();
   
  return (
    <StyCon scrollPosition={scrollPosition}>
      <div className="BackWrap" onClick={() => navigate('/')}>
        <img className="BackIcon" src={BackIcon} alt="back-icon" />
      </div>
      <SearchBar></SearchBar>
    </StyCon>
  );
};

export default Header;

const StyCon = styled.div`
  position: fixed;
  top: 0px;
  z-index: 1000;
  background-color: white;

  border-bottom: ${props => props.scrollPosition > 0 ?'1px solid rgba(242, 243, 247, 1)' : 'none'};

  display: flex;
  align-items: center;

  height: 78px;
  width: 768px;

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

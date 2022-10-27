import React from 'react';
import styled from "styled-components";
import LinerLogo from '../static/images/liner_logo.png'
import SearchBar from '../elements/SearchBar';

const Home = () => {
    return (
        <StyCon>
            <img className='logo' src={LinerLogo} alt="Liner Logo"/> 
            <SearchBar></SearchBar>
        </StyCon>
    );
};

export default Home;

const StyCon = styled.div`

  margin-top: 360px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  .logo{
    margin-bottom: 80px;
  }
 
`
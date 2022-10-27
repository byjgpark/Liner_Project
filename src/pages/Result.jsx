// React
import React, { useState, useContext } from "react";
// Context API
import { AppContext } from "../shared/context";
// Component
import Header from "../components/Header";
import ResultList from "../components/ResultList";
// Styled-Component
import styled from "styled-components";
// Redux
import { useDispatch, useSelector } from "react-redux";

const Result = () => {
  const { search } = useContext(AppContext);

  const results = useSelector((state) => state.searchSlice.results);

  console.log('Check', results);

  return (
    <>
      <Header></Header>
      <StyBody>
        {results.map((result,index)=> {
            return<ResultList key={index} result={result}></ResultList>
        })}
        
      </StyBody>
    </>
  );
};

export default Result;

const StyBody = styled.div`
  /* border: 5px solid pink; */
  margin: auto;
  overflow-y: scroll;
  max-height: 898px;
`;

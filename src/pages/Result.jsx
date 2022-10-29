// React
import React, { useContext, useEffect, useRef } from "react";
// Context API
import { AppContext } from "../shared/context";
// Component
import Header from "../components/Header";
import ResultList from "../components/ResultList";
import SkeletonList from "../components/SkeletonList";
import ErrorModal from "../elements/ErrorModal";
// Styled-Component
import styled from "styled-components";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getScrollThunk } from "../redux/modules/searchSlice";
// React Intersection Observer
import { useInView } from "react-intersection-observer";

const Result = () => {

  // Var : Dispatch
  const dispatch = useDispatch();

  // UseSelector : getting search results from the redux state
  const results = useSelector((state) => state.searchSlice.results);

  // UseSelector : getting loading status from the redux state
  const loading = useSelector((state) => state.searchSlice.isLoading);

  // UseSelector : if an error occurred while searching, return an error message
  let error = useSelector((state) => state.searchSlice.error);

  // Hook : React Intersection Observer
  const [ref, inView] = useInView();

  // Context API : getting search keyword from the search bar via Context API
  let { search } = useContext(AppContext);

  // Context API : to change the boolean closeModal via Context API
  let { closeModal, setCloseModal } = useContext(AppContext);

  // Context API : getting search keyword from the search bar via Context API
  let { errorFlag } = useContext(AppContext);

  console.log('check errorflag', errorFlag);

  // Ref : to increment from whenever scrolled to the bottom of page
  const countFrom = useRef(9);

  // UseEffect : when scrolled to the bottom of the page
  // countFrom ref will get incremented by 9 => fetching the next serach result
  // from the previous from number
  useEffect(() => {

    console.log('inView', inView);
    if (error !== "ERR_BAD_REQUEST") {
      if (inView) {
        countFrom.current = countFrom.current + 9;
        if (search !== "") {
          dispatch(
            getScrollThunk({ query: search, size: 9, from: countFrom.current })
          );
        }
      }
    }
  }, [inView]);

  // Var : a number of skeletons UI
  const rowSkeletons = 10;

  // While loading the search result, show the skeleton UI
  if (loading) {
    let rows = [];

    for (let index = 0; index < rowSkeletons; index++) {
      rows.push(<SkeletonList key={index}></SkeletonList>);
    }

    return (
      <>
        <Header></Header>
        <StyBody>{rows}</StyBody>
      </>
    );
  }

  // if an error ocurred, display modal && skeleton UI
  if (error === "ERR_BAD_REQUEST") {
    let rows = [];
    for (let index = 0; index < rowSkeletons; index++) {
      rows.push(<SkeletonList key={index}></SkeletonList>);
    }

    return (
      <>
        <Header></Header>
        <StyBody>{rows}</StyBody>
        <ErrorModal
          errorFlag={errorFlag}
          error={error}
          onClose={() => setCloseModal(true)}
          closeModal={closeModal}
        ></ErrorModal>
      </>
    );
  }

  // Rendering search result with the typed keyword
  return (
    <>
      <Header></Header>
      <StyBody>
        {results.map((result, index) => {
          return <ResultList key={index} result={result}></ResultList>;
        })}
        <div ref={ref} />
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

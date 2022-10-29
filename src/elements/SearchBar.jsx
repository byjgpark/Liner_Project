// React
import React, { useState, useContext } from "react";
// Styled-Component
import styled from "styled-components";
// Icon
import OutFSearchIcon from "../static/images/outf_search_icon.png";
import OnFSearchIcon from "../static/images/onf_search_icon.png";
import CancelIcon from "../static/images/cancel_icon.png";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Context API
import { AppContext } from "../shared/context";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getSearchThunk } from "../redux/modules/searchSlice";

const SearchBar = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Getting Component's URL name
  let currentPath = useLocation();
  // Enabling to navigate to another component
  let navigate = useNavigate();

  // Context API : to change the boolean closeModal via Context API
  let {setCloseModal } = useContext(AppContext);

  // Hook : to hold the search text from search bar
  const { search, setSearch } = useContext(AppContext);
  // Hook : when the serach bar is clicked, focused will be true
  const [focused, setFocused] = useState(false);

  // Func ; handing change of text from the search bar
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  // Func : when entered the enter key, get the search result 
  // then, change closeModal to false corresponding to its pathname
  const handleKeyUp = (e) => {
    if (currentPath.pathname === "/") {
      if (e.keyCode === 13) {
        dispatch(getSearchThunk({query:search, size:9, from:0}))
        setCloseModal(false);
        navigate("/result");
      }
    } else {
      if (e.keyCode === 13) {
        dispatch(getSearchThunk({query:search, size:9, from:0}))
        setCloseModal(false);
      }
    }
  };

  return (
    <>
      {currentPath.pathname === "/" ? (
        <StyCon
          style={{ border: focused && "1.5px solid rgba(0, 195, 204, 1)" }}
          className="SearchInput"
        >
          <button
            className="SearchBtn"
            onClick={() => {
              alert("Hey");
            }}
          >
            <img
              src={focused ? OnFSearchIcon : OutFSearchIcon}
              alt="Liner Logo"
            />
          </button>
          <input
            style={{ caretColor: focused && "rgba(0, 195, 204, 1)" }}
            placeholder="Search keyword"
            onChange={handleChange}
            value={search}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyUp={(event) => handleKeyUp(event)}
          ></input>
        </StyCon>
      ) : (
        <StyCon
          style={{
            border: focused && "1.5px solid rgba(0, 195, 204, 1)",
            width: "644px",
          }}
          className="SearchInput"
        >
          <input
            style={{
              caretColor: focused && "rgba(0, 195, 204, 1)",
              marginLeft: "16px",
              width: "591.25px",
            }}
            placeholder="Search keyword"
            onChange={handleChange}
            value={search}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyUp={(event) => handleKeyUp(event)}
          ></input>
          {search !== "" ? (
            <button className="CancelBtn" onClick={() => setSearch("")}>
              <img className="CancelIcon" src={CancelIcon} alt="cancel Logo" />
            </button>
          ) : null}
        </StyCon>
      )}
    </>
  );
};

export default SearchBar;

const StyCon = styled.div`
  &:hover {
    border: 1px solid rgba(149, 156, 166, 1);
  }

  &:focus-within {
    border: 1px solid rgba(0, 195, 204, 1);
  }

  height: 48px;
  width: 560px;

  border: 1px solid rgba(194, 198, 206, 1);
  border-radius: 1000px;
  align-items: center;
  display: flex;

  .SearchBtn {
    border: none;
    margin: 0 17.49px;
    background-color: transparent;
  }

  input {
    border: none;
    outline: none;
    width: 80%;
    font-size: 16px;
  }

  .CancelBtn {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .CancelIcon {
    width: 17.5px;
    height: 17.5px;
  }
`;

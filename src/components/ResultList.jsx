import React, { useState, useContext } from "react";
// Styled-Component
import styled from "styled-components";
// Icon
import DfltThumbIcon from "../static/images/default_thumb_icon.png";
import BookmarkIcon from "../static/images/bookmark_icon.png";
import UnBookmarkIcon from "../static/images/unbookmark_icon.png";
import DfltFaviIcon from "../static/images/default_favi_icon.png";
// Context API
import { AppContext } from "../shared/context";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  postBookmarkThunk,
  deleteBookmarkThunk,
} from "../redux/modules/bookmarkSlice";

const ResultList = ({ result }) => {
  // Dispatch
  const dispatch = useDispatch();

  // UseSelector : if an error occurred while toggle on/ off the bookmark, return an error message
  let bookmarkError = useSelector((state) => state.bookmarkSlice.error);

  // Hook : to toggle on/off the bookmark
  const [check, setCheck] = useState(false);

  // Context API : to change the boolean closeModal via Context API
  let { setCloseModal } = useContext(AppContext);

  // Var : Search result's ID
  const id = result.id;

  // Func : handling fallback image with default image
  const addDefaultSrc = (ev) => {
    ev.target.src = DfltThumbIcon;
  };

  // Func : when clicked, it will redirect to its URL
  const handleClickedUrl = () => {
    window.location.href = result.url;
  };

  // Func : When 200, if check is false, then dispatch bookmark API. Otherwise, unbook API
  // change the boolean value of check
  // When there is an error, not changing bookmark && show the modal
  const handleBookMark = (check, id) => {
    if (check === false) {
      dispatch(postBookmarkThunk(id)).then((res) => {
        if (res.payload === "ERR_BAD_REQUEST") {
          setCloseModal(false);
        } else {
          setCheck(!check);
          setCloseModal(false);
        }
      });
    } else {
      dispatch(deleteBookmarkThunk(id)).then((res) => {
        if (res.payload === "ERR_BAD_REQUEST") {
          setCloseModal(false);
        } else {
          setCheck(!check);
          setCloseModal(false);
        }
      });
    }
  };

  let [errorflag, setErrorFlag] = useState(true);
  return (
    <StyCon>
      <div className="HoverCon">
        <StyWrap>
          <img
            className="DfltThumbIcon"
            src={result.imageUrl}
            alt="dflt-thumb-icon"
            onError={addDefaultSrc}
          />
          <div className="TextWrap">
            <div className="Title" onClick={handleClickedUrl}>
              {result.title}
            </div>
            <div className="NetLocWrap">
              <img
                className="DfltFaviIcon"
                src={result.faviconUrl}
                alt="dflt-favi-icon"
                onError={(e) => {
                  if (errorflag) {
                    setErrorFlag(false);
                    e.target.src = DfltFaviIcon;
                  }
                }}
              />
              <div className="NetLoc">{result.netloc}</div>
            </div>
          </div>
          {check ? (
            <div className="BookMarkWrap">
              <img
                onClick={() => handleBookMark(check, id, bookmarkError)}
                className="BookmarkIcon"
                src={BookmarkIcon}
                alt="bookmark-icon"
              />
            </div>
          ) : (
            <div className="BookMarkWrap">
              <img
                onClick={() => handleBookMark(check, id, bookmarkError)}
                className="BookmarkIcon"
                src={UnBookmarkIcon}
                alt="unbookmark-icon"
              />
            </div>
          )}
        </StyWrap>
      </div>
    </StyCon>
  );
};

export default ResultList;

const StyCon = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;

  .HoverCon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;

    width: 728px;
    height: 104px;

    &:hover {
      background-color: rgba(248, 249, 251, 1);
    }
  }
`;

const StyWrap = styled.div`
  display: flex;
  width: 684.13px;
  height: 72px;

  .TextWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .DfltThumbIcon {
    height: 72px;
    width: 72px;
    border-radius: 10px;
    margin-right: 16px;
  }

  .TextWrap {
    margin-right: 43.88px;
  }

  .Title {
    font-size: 16px;
    font-weight: 700;
    height: fit-content;
    width: 536px;
    cursor: pointer;
  }

  .NetLocWrap {
    display: flex;
    align-items: center;
    height: fit-content;
  }

  .DfltFaviIcon {
    height: 14px;
    width: 14px;
    margin-right: 6px;
  }

  .NetLoc {
    height: fit-content;
    color: rgba(149, 156, 166, 1);
  }

  .BookMarkWrap {
    position: absolute;
    display: flex;
    border-radius: 12px;

    align-items: center;
    justify-content: center;

    top: 32px;
    right: 12px;

    width: 40px;
    height: 40px;

    &:hover {
      background-color: rgba(242, 243, 247, 1);
    }
  }
  .BookmarkIcon {
    height: 21px;
    width: 16.25px;
    cursor: pointer;
  }
`;

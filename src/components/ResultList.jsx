import React, { useState } from "react";
// Styled-Component
import styled from "styled-components";
// Icon
import DfltThumbIcon from "../static/images/default_thumb_icon.png";
import BookmarkIcon from "../static/images/bookmark_icon.png";
import UnBookmarkIcon from "../static/images/unbookmark_icon.png";
import DfltFaviIcon from "../static/images/default_favi_icon.png";
// Redux
import { postBookmarkThunk, deleteBookmarkThunk } from "../redux/modules/bookmarkSlice";

const ResultList = ({ result }) => {
  // Hook : to toggle on/off the bookmark
  const [check, setCheck] = useState(false);

  // Var : Search result's ID
  const id = result.id

  // Func : handling fallback image with default image 
  const addDefaultSrc = (ev) => {
    ev.target.src = DfltThumbIcon
  }

  const addSecondDefaultSrc = (ev) => {
    ev.target.src = DfltFaviIcon
  }

  const handleBookMark = (check,id) => {
    setCheck(!check)
  }

  return (
    <StyCon>
      <StyWrap>
        {/* <Img
          className="DfltThumbIcon"
          src={[result.imageUrl, DfltThumbIcon]}
          alt="dflt-thumb-icon"
        /> */}
        <img
          className="DfltThumbIcon"
          src={result.imageUrl}
          alt="dflt-thumb-icon"
          //   onError={(event) => {
          //     if (imgError) {
          //       setImgError(false);
          //     }
          //     event.target.src = DfltThumbIcon;
          //   }}
        //   onError={(e) => {
        //     if (e.target.src !== DfltThumbIcon) {
        //       e.target.src = DfltThumbIcon;
        //     }
        //   }}
        onError={addDefaultSrc}
        />
        <div className="TextWrap">
          <div className="Title">{result.title}</div>
          <div className="NetLocWrap">
             <img
              className="DfltFaviIcon"
              src={result.faviconUrl}
              alt="dflt-favi-icon"
            //   onError={(event) => {
            //     if (imgError2) {
            //       setImgError2(false);
            //     }
            //     event.target.src = DfltFaviIcon;
            //   }}
            onError={(event) => {
                if (event.target.src !== DfltFaviIcon) {
                    event.target.src = DfltFaviIcon;
                }
              }}
            // onError={addSecondDefaultSrc}
            /> 
            {/* <Img
              className="DfltFaviIcon"
              src={[result.faviconUrl, DfltFaviIcon]}
              alt="dflt-favi-icon"
            /> */}
            <div className="NetLoc">{result.netloc}</div>
          </div>
        </div>
        {check ? (
          <img
            onClick={() => handleBookMark(check,id)}
            className="BookmarkIcon"
            src={BookmarkIcon}
            alt="bookmark-icon"
          />
        ) : (
          <img
            onClick={() => handleBookMark(check,id)}
            className="BookmarkIcon"
            src={UnBookmarkIcon}
            alt="unbookmark-icon"
          />
        )}
      </StyWrap>
    </StyCon>
  );
};

export default ResultList;

const StyCon = styled.div`

  border: 1px solid green;
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  .BookmarkIcon {
    height: 21px;
    width: 16.25px;
    margin: auto 0;
  }
`;

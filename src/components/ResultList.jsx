import React, { useState } from "react";
// Styled-Component
import styled from "styled-components";
// Icon
import DfltThumbIcon from "../static/images/default_thumb_icon.png";
import BookmarkIcon from "../static/images/bookmark_icon.png";
import UnBookmarkIcon from "../static/images/unbookmark_icon.png";
import DfltFaviIcon from "../static/images/default_favi_icon.png";

const ResultList = ({result}) => {
  // Hook : to toggle on/off the bookmark
  const [check, setCheck] = useState(false);
  
  console.log('check result', result.imageUrl)

  return (
    <StyCon>
      <StyWrap>
        <img
          className="DfltThumbIcon"
          src={result.imageUrl}
          alt="dflt-thumb-icon"
        />
        <div className="TextWrap">
          <div className="Title">
            {result.title}
          </div>
          <div className="NetLocWrap">
            <img
              className="DfltFaviIcon"
              src={result.faviconUrl}
              alt="dflt-favi-icon"
            />
            <div className="NetLoc">{result.netloc}</div>
          </div>
        </div>
        {check ? (
          <img
            onClick={() => setCheck(!check)}
            className="BookmarkIcon"
            src={BookmarkIcon}
            alt="bookmark-icon"
          />
        ) : (
          <img
            onClick={() => setCheck(!check)}
            className="BookmarkIcon"
            src={UnBookmarkIcon}
            alt="bookmark-icon"
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

  .TextWrap{
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
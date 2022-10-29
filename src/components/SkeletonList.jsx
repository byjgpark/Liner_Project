import React from 'react';
// Styled-Component
import styled from "styled-components";

const SkeletonList = () => {
    return (
        <StyCon>
        <StyWrap>
          <div
            className="DfltThumbIcon"
            alt="dflt-thumb-icon"
          />
          <div className="TextWrap">
            <div className="Title">
            </div>
            <div className="NetLocWrap">
        
            </div>
          </div>
        </StyWrap>
      </StyCon>
    );
};

export default SkeletonList;

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
    background-color: rgba(242, 243, 247, 1);
  }

  .TextWrap{
    margin-right: 43.88px;
  }

  .Title {
    font-size: 16px;
    font-weight: 700;
    height: 20px;
    width: 457px;
    background-color: rgba(242, 243, 247, 1);
  }

  .NetLocWrap {
    display: flex;
    align-items: center;
    height: fit-content;
    height: 14px;
    width: 160px;
    background-color: rgba(242, 243, 247, 1);
  }
`;

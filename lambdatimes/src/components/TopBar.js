import React from "react";
import styled, { css } from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const NewTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const NewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const NewContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const NewSpanLeft = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const NewContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const NewSpanCenter = styled.div`
  cursor: pointer;
  margin-right: 5%;
`;

const NewContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const NewSpanRight = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <NewTopBar>
      <NewContainer>
        <NewContainerLeft>
          <NewSpanLeft>TOPICS</NewSpanLeft>
          <NewSpanLeft>SEARCH</NewSpanLeft>
        </NewContainerLeft>
        <NewContainerCenter>
          <NewSpanCenter>GENERAL</NewSpanCenter>
          <NewSpanCenter>BROWNBAG</NewSpanCenter>
          <NewSpanCenter>RANDOM</NewSpanCenter>
          <NewSpanCenter>MUSIC</NewSpanCenter>
          <NewSpanCenter>ANNOUNCEMENTS</NewSpanCenter>
        </NewContainerCenter>
        <NewContainerRight>
          <NewSpanRight>LOG IN</NewSpanRight>
        </NewContainerRight>
      </NewContainer>
    </NewTopBar>
  );
};

// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className="container">
//         <div className="container-left">
//           <span>TOPICS</span>
//           <span>SEARCH</span>
//         </div>
//         <div className="container-center">
//           <span>GENERAL</span>
//           <span>BROWNBAG</span>
//           <span>RANDOM</span>
//           <span>MUSIC</span>
//           <span>ANNOUNCEMENTS</span>
//         </div>
//         <div className="container-right">
//           <span>LOG IN</span>
//         </div>
//       </div>
//     </div>
//   );
// };

export default TopBar;

import React from "react";
import styled from "styled-components";
import SearchNav from "./SearchNav";

function NavBar() {
  return (
    <Main>
      <SearchNav />
      <Block />
    </Main>
  );
}

const Main = styled.div`
  display: block;
  padding: 30px 10px;
  height: 100vh;
  overflow-y: scroll;
  border-right: solid 1px #e6e6e6;
  position: relative;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    width: 4px;
    background-color: #e6e6e6;
  }
`;

const Block = styled.div`
  display: block;
  height: 200vh;
  background-color: blue;
`;
export default NavBar;

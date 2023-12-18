import React from "react";
import styled from "styled-components";
import SearchNav from "../SearchNav";
import Scrollable from "./Scrollable";

function NavBar() {
  return (
    <Main>
      <FixedLayer>
        <SearchNav />
        <Scrollable />
      </FixedLayer>
    </Main>
  );
}

const Main = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`;
const FixedLayer = styled.div`
  border-right: solid 1px #e6e6e6;
  position: fixed;
  display: grid;
  grid-template-rows: 8% 89% 3%;
  top: 0px;
  width: 210px;
  height: 100vh;
  padding: 30px 0px;
  z-index: 2;
  background-color: white;
`;

export default NavBar;

import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBarSection/NavBar";
import Mainbar from "../components/MainBarSections/Mainbar";

function documentation() {
  return (
    <>
      <View>
        <NavBar />
        <Mainbar />
      </View>
    </>
  );
}
const View = styled.div`
  display: grid;
  grid-template-columns: 210px auto;
  height: 100vh;
`;

export default documentation;

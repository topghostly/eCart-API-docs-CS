import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Mainbar from "../components/Mainbar";

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
  grid-template-columns: 25% 75%;
  height: 100vh;
`;

export default documentation;

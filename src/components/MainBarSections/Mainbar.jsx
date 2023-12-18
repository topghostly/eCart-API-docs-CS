import React from "react";
import styled from "styled-components";

import Intro from "./components/Intro";
import Authentication from "./components/Authentication";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Request from "./components/Request";

function Mainbar() {
  return (
    <Root>
      <Nav />
      <Intro />
      <Authentication />
      <Error />
      <Request />
    </Root>
  );
}

const Root = styled.div`
  padding: 30px;
  max-width: 1000px;
  margin: 0px auto;
`;

export default Mainbar;

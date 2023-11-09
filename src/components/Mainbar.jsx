import React from "react";
import styled from "styled-components";

function Mainbar() {
  return (
    <Root>
      <Title>Documentation</Title>
    </Root>
  );
}

const Root = styled.div`
  padding: 30px;
`;
const Title = styled.h1``;

export default Mainbar;

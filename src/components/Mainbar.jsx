import React from "react";
import styled from "styled-components";

function Mainbar() {
  return (
    <Root>
      <Title>Getting started</Title>
    </Root>
  );
}

const Root = styled.div`
  padding: 30px;
  width: 800px;
  margin: 0px auto;
`;
const Title = styled.h1`
  font-size: var(--header-font-size);
`;

export default Mainbar;

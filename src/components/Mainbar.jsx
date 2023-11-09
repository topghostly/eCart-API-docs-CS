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
const Title = styled.h1`
  font-family: var(--header-font-family);
  font-size: var(--header-font-size);
`;

export default Mainbar;

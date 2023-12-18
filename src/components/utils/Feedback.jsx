import React from "react";
import styled from "styled-components";

function Feedback({ color, hor, ver }) {
  return (
    <Root>
      <p>
        Was this helpful? <Link>Yes</Link> <Link>No</Link>
      </p>
    </Root>
  );
}
const Root = styled.div`
  position: relative;
  margin-top: var(--mid-margin);
`;
const Link = styled.a`
  color: var(--theme-color);
  text-decoration: none;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: var(--theme-color-light);
    transition: all 0.2s ease-in-out;
  }
`;

export default Feedback;

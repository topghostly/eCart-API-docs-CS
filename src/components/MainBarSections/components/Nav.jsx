import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Root>
      <SideNav>
        <ul>
          <li>Support</li>
          <li>Sign in</li>
        </ul>
      </SideNav>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  padding: 0px 30px;
`;
const SideNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    list-style-type: none;

    li {
      color: var(--theme-color);
      font-weight: bold;
      transition: all 0.1s ease-in-out;

      :hover {
        cursor: pointer;
        color: var(--theme-color-light);
        transition: all 0.1s ease-in-out;
      }
    }
  }
`;
export default Nav;

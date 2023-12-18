import React, { useState } from "react";
import styled from "styled-components";
import Drowdown from "../utils/Drowdown";

function Scrollable() {
  const [intoductionActive, setintoductionActive] = useState(false);
  const [AuthActive, setAuthActive] = useState(false);
  const [ErrorActive, setErrorActive] = useState(false);
  // const [intoductionActive, setintoductionActive] = useState(false);
  return (
    <Root>
      <NavHolder>
        <ul className="nav-holder">
          <li>Introduction</li>
          <li>Authentication</li>
          <li>Error Handling</li>
          <Drowdown />
        </ul>
      </NavHolder>
    </Root>
  );
}
const Root = styled.div`
  position: relative;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    width: 8px;
    background-color: #e6e6e6;
    border-radius: 10px;
  }
  .active {
  }
`;
const NavHolder = styled.div`
  position: relative;

  ul.nav-holder {
    width: 100%;
    position: relative;
    padding: 15px 20px;
    list-style-type: none;

    li {
      margin: 10px 0px;
      font-size: var(--nav-font-size);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      /* background-color: ${(props) => (props.active ? "red" : "blue")}; */
      :hover {
        color: var(--theme-color);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
export default Scrollable;

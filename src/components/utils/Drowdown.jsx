import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Drowdown() {
  return (
    <div>
      <Main>
        Idempotent Request <span className="drop-down-toggle"></span>
      </Main>
      <DrowdownLinks>
        <ul className="dropdown-nav-holder">
          <li>Get Products</li>
          <li>Maximum Amount</li>
          <li>Minimum Price</li>
          <li>Maximum Price</li>
        </ul>
      </DrowdownLinks>
    </div>
  );
}
const Main = styled.div`
  position: relative;
  padding: 0px;
  margin: 0px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    color: var(--theme-color);
    transition: all 0.2s ease-in-out;
  }
`;
const DrowdownLinks = styled.div`
  position: relative;

  ul.dropdown-nav-holder {
    width: 100%;
    position: relative;
    padding: 0px 20px;
    list-style-type: none;

    li {
      margin: 10px 0px;
      font-size: var(--nav-font-size); 
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      :hover {
        color: var(--theme-color);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;
export default Drowdown;

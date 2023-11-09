import React from "react";
import styled from "styled-components";
import searchSVG from "../assets/search.svg";

function NavBar() {
  return (
    <Main>
      <SearchBox>
        <img src={searchSVG} alt="search-button" />
        <input type="text" />
      </SearchBox>
    </Main>
  );
}

const Main = styled.div`
  display: block;
  background-color: var(--nav-background-color);
  padding: 30px;
`;

const SearchBox = styled.div`
  position: relative;
  height: 45px;

  img {
    width: 17px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 12px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #dfdfdf53;
    padding: 0px 0px 0px 40px;
    font-size: var(--text-font);
  }
`;

export default NavBar;

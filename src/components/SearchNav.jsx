import React from "react";
import styled from "styled-components";
import searchSVG from "../assets/search.svg";

function SearchNav() {
  return (
    <SearchBox>
      <img src={searchSVG} alt="search-button" />
      <input type="text" />
    </SearchBox>
  );
}
const SearchBox = styled.div`
  position: fixed;
  padding: 10px 0px;
  top: 0px;

  margin-bottom: var(--small-margin);
  background-color: white;
  width: 225px;

  img {
    width: 17px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 12px;
    transition: all 0.2s ease-in-out;

    :hover {
      opacity: 0.5;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }

  input {
    height: 38px;
    width: 100%;
    overflow-y: scroll;
    outline: none;
    border: none;
    border-radius: 5px;
    border: solid 1px #4b4b4b52;
    padding: 0px 0px 0px 40px;
    font-size: var(--text-font);
  }
`;

export default SearchNav;

import React from "react";
import styled from "styled-components";
import searchSVG from "../assets/search.svg";

function SearchNav() {
  return (
    <SearchBox>
      <img src={searchSVG} alt="search-button" />
      <input type="text" placeholder="Find anything" />
    </SearchBox>
  );
}
const SearchBox = styled.div`
  margin-bottom: var(--small-margin);
  background-color: white;
  position: relative;
  padding: 0px 10px;
  img {
    width: 15px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 25px;
    transition: all 0.2s ease-in-out;

    :hover {
      opacity: 0.5;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }

  input {
    height: 35px;
    width: 100%;
    overflow-y: scroll;
    outline: none;
    border: none;
    border-radius: 9px;
    border: solid 1px #4b4b4b2b;
    padding: 0px 0px 0px 40px;
    font-size: var(--text-font);
    font-size: 13px;
  }
`;

export default SearchNav;

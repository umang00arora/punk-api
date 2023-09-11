import styled from "styled-components";
import { useState } from "react";
const SearchForm = ({ onSearch }) => {
  const [searchString, setSearchString] = useState("");
  const onSearchInputChange = (ev) => {
    setSearchString(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    onSearch(searchString);
  };
  return (
    <SearchButtonWrapper>
      <div><h2>Search for Beers ...</h2></div>
      <form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          value={searchString}
          onChange={onSearchInputChange}
          placeholder="Search"
        />
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </SearchButtonWrapper>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  margin-top: 20px;
  button {
    color: #fff;
    background-color: blue;
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

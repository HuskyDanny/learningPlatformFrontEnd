import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ currentRefinement, refine }) => (
  <input
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;

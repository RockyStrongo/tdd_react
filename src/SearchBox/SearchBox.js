import isEmpty from "lodash.isempty";
import clone from "lodash.clone";
import React from "react";

const protect = (event, onSearch) => {
  const value = clone(event.target.value);

  if (!isEmpty(value.trim())) {
    return onSearch(event);
  }
};

const SearchBox = ({ term, onSearch }) => {
  const handleChange = (event) => {
    protect(event, onSearch);
  };

  return (
    <input
      className="search"
      data-test="search"
      type="text"
      onChange={handleChange}
      value={term}
    ></input>
  );
};

export {protect};

export default SearchBox;

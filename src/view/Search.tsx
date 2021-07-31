import React from "react";

const Search = (): JSX.Element => {
  return (
    <div className="search">
      <span id="hint">What repository are you looking for?</span>
      <input
        type="text"
        className="search__input"
        aria-label="Repository name"
        aria-describedby="hint"
      />
    </div>
  );
};

export default Search;

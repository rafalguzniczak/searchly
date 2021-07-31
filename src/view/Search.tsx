import React, { ChangeEvent, useEffect, useState } from "react";
import getRepositoryResult from "../helpers/getRepositoryResult";

const getApiUrl = (phrase: string) =>
  `https://api.github.com/search/repositories?q=${phrase}&sort=stars&order=desc`;

const Search = (): JSX.Element => {
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    if (searchPhrase.trim().length > 3) {
      fetchResults();
    }
  }, [searchPhrase]);

  const fetchResults = async () => {
    await fetch(getApiUrl(searchPhrase))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fetch failed.");
        }
      })
      .then((data: GitHubResponse) => {
        const repositoryResults: RepositoryResult[] = data.items.map(getRepositoryResult);
        return repositoryResults;
      })
      .catch((error: Error) => console.log("\n\nUps...", error)); // TODO: handle errors like a boss
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setSearchPhrase(value);
  };

  return (
    <div className="search">
      <span id="hint">What repository are you looking for?</span>
      <input
        type="text"
        className="search__input"
        aria-label="Repository name"
        aria-describedby="hint"
        onChange={handleChange}
        value={searchPhrase}
      />
    </div>
  );
};

export default Search;

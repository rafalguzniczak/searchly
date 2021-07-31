import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import getRepositoryResult from "../helpers/getRepositoryResult";
import { RepositoriesContext } from "../RepositoriesContextProvider";

const getApiUrl = (phrase: string) =>
  `https://api.github.com/search/repositories?q=${phrase}&sort=stars&order=desc`;

const Search = (): JSX.Element => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const repositoriesContext = useContext(RepositoriesContext);

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
      .then((data: GitHubResponse): RepositoryResult[] =>
        data.items.map(getRepositoryResult)
      )
      .then((repositoryResults) =>
        repositoriesContext.setResults(repositoryResults)
      )
      .catch((error: Error) => console.log("Ups...", error)); // TODO: handle errors like a boss
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchPhrase(event.target.value);

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

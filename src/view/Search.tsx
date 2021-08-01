import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import getRepositoryResult from "../helpers/getRepositoryResult";
import { RepositoriesContext } from "../RepositoriesContextProvider";

const getApiUrl = (phrase: string) =>
  `https://api.github.com/search/repositories?q=${phrase}&sort=stars&order=desc`;

const Search = (): JSX.Element => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const repositoriesContext = useContext(RepositoriesContext);

  useEffect(() => {
    if (searchPhrase.trim().length > 3) {
      fetchResults(); // TODO: Add debounce
    }
  }, [searchPhrase]);

  const fetchResults = async () => {
    setIsError(false);
    setIsLoading(true);
    repositoriesContext.setResults([]);

    await fetch(getApiUrl(searchPhrase), { cache: "force-cache" })
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
      .catch((error: Error) => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
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
        aria-describedby="hint error"
        onChange={handleChange}
        value={searchPhrase}
      />
      {isError && (
        <span id="error">
          There is a problem with the connection. Please try again later.
        </span>
      )}
      {isLoading && (
        <div className="loading-wrapper">
          <div className="loading"></div>
        </div>
      )}
    </div>
  );
};

export default Search;

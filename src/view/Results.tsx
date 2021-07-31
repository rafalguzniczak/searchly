import React, { useContext } from "react";
import { RepositoriesContext } from "../RepositoriesContextProvider";

const Results = (): JSX.Element => {
  const repositoriesContext = useContext(RepositoriesContext);

  console.log(repositoriesContext.results);

  if (repositoriesContext.results.length === 0) return null;

  return (
    <>
      {repositoriesContext.results.map((result) => (
        <div key={result.name}>{result.name} | {result.owner}</div>
      ))}
    </>
  );
};

export default Results;

import React, { useContext } from "react";
import { RepositoriesContext } from "../RepositoriesContextProvider";

const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

const Results = (): JSX.Element => {
  const repositoriesContext = useContext(RepositoriesContext);

  if (repositoriesContext.results.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Owner</th>
          <th scope="col">Stars</th>
          <th scope="col">Created at</th>
        </tr>
      </thead>
      <tbody>
        {repositoriesContext.results.map((result: RepositoryResult) => (
          <tr key={`${result.name}${result.owner}`}>
            <td scope="row" data-label="Name">
              {result.name}
            </td>
            <td data-label="Owner">{result.owner}</td>
            <td data-label="Stars">{result.stars}</td>
            <td data-label="Created at">{formatDate(result.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;

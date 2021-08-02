import React, { useContext, useEffect, useState } from "react";
import sortBy from "lodash.sortby";
import { RepositoriesContext } from "../RepositoriesContextProvider";

const Sorting = (): JSX.Element => {
  const [sorting, setSorting] = useState("stars");
  const [order, setOrder] = useState("DESC");
  const repositoriesContext = useContext(RepositoriesContext);

  const sortResults = (sortByValue: string, orderBy: string) => {
    let results = sortBy(repositoriesContext.results, [sortByValue]);
    if (orderBy === "DESC") {
      results.reverse();
    }
    repositoriesContext.setResults(results);
  };

  useEffect(() => {
    sortResults(sorting, order);
  }, [sorting, order]);

  if (repositoriesContext.results.length === 0) return null;

  const changeSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(event.target.value);
  };

  const changeOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
  };

  return (
    <div className="sort">
      Sort by:
      <select value={sorting} onChange={changeSorting} aria-label="sort by">
        <option value="name">name</option>
        <option value="owner">owner</option>
        <option value="stars">stars</option>
        <option value="createdAt">created at</option>
      </select>
      <select value={order} onChange={changeOrder} aria-label="sort direction">
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </div>
  );
};

export default Sorting;

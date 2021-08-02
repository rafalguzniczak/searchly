import React, { useEffect } from "react";

const useQuery = () => {
  const getQuery = (param: string): string => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
  };

  const setQuery = (param: string, value: string): void => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(param, value);
  };

  return {
    getQuery,
    setQuery
  };
};

export default useQuery;

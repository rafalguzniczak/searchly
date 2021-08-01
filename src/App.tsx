import React from "react";
import RepositoriesContextProvider from "./RepositoriesContextProvider";
import Header from "./view/Header";
import Results from "./view/Results";
import Search from "./view/Search";
import Sorting from "./view/Sorting";

const App = () => {
  return (
    <>
      <Header />
      <RepositoriesContextProvider>
        <Search />
        <Sorting />
        <Results />
      </RepositoriesContextProvider>
    </>
  );
};

export default App;
